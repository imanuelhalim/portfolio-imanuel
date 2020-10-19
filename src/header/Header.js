import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import HeaderLogo from "../images/imanuelhalim-logo.svg";
import Menu from "./Menu";
import { animateScroll as scroll } from "react-scroll";

const Header = ({ history }) => {
  // State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // State  for disabled button
  const [disabled, setDisabled] = useState(false);

  // Use effect for page changes
  useEffect(() => {
    // listen for page changes
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  // Funtion to handle the menu if it changes
  const handleMenu = () => {
    disabledMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //A timer to disable menu for one second
  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  const displayMenuButton = () => {
    if (state.menuName === "Menu") {
      return (
        <div className="hamburger-open-icon">
          <div className="first-line"></div>
          <div className="second-line"></div>
          <div className="third-line"></div>
        </div>
      );
    } else {
      return (
        <div className="hamburger-close-icon">
          <div className="first-line"></div>
          <div className="second-line"></div>
          <div className="third-line"></div>
        </div>
        // <div className="close-icon">
        //   <div className="mdiv">
        //     <div className="div"></div>
        //   </div>
        // </div>
      );
    }
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div
              className="logo"
              onClick={() => {
                scroll.scrollToTop();
              }}
            >
              <Link to="/">
                <img src={HeaderLogo} alt="" />
              </Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {/* Menu */}
                {displayMenuButton()}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </header>
  );
};

export default withRouter(Header);
