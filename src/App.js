import React, { useRef } from "react";
import Home from "./content/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Projects from "./content/Projects";
import About from "./content/About";

const { useEffect, useState } = React;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

const App = () => {
  const widthScreenSize = useWindowSize();

  const [isSticky, setSticky] = useState(false);

  const ref = useRef(null);

  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
          <div className="sticky-inner">
            <Header />
            {/* 479 */}
            {/* {widthScreenSize} */}
          </div>
        </div>
        <div className="container">
          <div className="wrapper">
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home}>
                  <div className="container-content">
                    <Home />
                  </div>
                </Route>
                <Route exact path="/About" component={About}>
                  <div className="container-content">
                    <About />
                  </div>
                </Route>
                <Route exact path="/Projects" component={Projects}>
                  <div className="container-content">
                    <Projects />
                  </div>
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
