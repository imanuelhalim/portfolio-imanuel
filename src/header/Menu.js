import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Menu = ({ state }) => {
  const defaultTitle = "Hi,";
  const defaultText =
    "Let me introduce my self on this website and have a look what I have done so far.";
  const defaultContentsText = "Resume";

  const [overviewTitle, setOverviewTitle] = useState(defaultTitle);
  const [overviewText, setOverviewText] = useState(defaultText);
  const [changeStyle, setChangeStyle] = useState([]);
  const [contentsText, setContentsText] = useState(defaultContentsText);

  //var for dom nodes
  let menu = useRef(null);
  let revealMenuBackground = useRef(null);
  let revealMenu = useRef(null);
  let menuBackground = useRef(null);
  let homeMenu = useRef(null);
  let projectsMenu = useRef(null);
  let aboutMenu = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close menu animation
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 2.5,
        height: 0,
        ease: "back.inOut.config(1.7)",
        stagger: { amount: 0.1 },
      });
      // close menu set style display none
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
      document.body.style.overflowY = "scroll";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.inital === null)
    ) {
      // open menu animation
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      // open menu set style display block
      gsap.to(menu, {
        duration: 1,
        css: { display: "block" },
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
      staggerText(homeMenu, projectsMenu, aboutMenu);
      document.body.style.overflowY = "hidden";
    }
  }, [state]);

  // function for customized animation
  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 1.8,
      height: 0,
      transformOrigin: "right top",
      skewX: 30,
      ease: "expo.out",
      stagger: { amount: 0.05 },
    });
  };

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.2,
      ease: "power3.inOut",
      stagger: { amount: 0.5 },
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      ease: "power3.inOut",
      opacity: 0,
    });
  };

  // const handleMenu = (menuImage) => {
  //   gsap.to(menuBackground, {
  //     duration: 0,
  //     background: `url(${menuImage}) center center`,
  //   });
  //   gsap.to(menuBackground, {
  //     duration: 0.4,
  //     opacity: 1,
  //     ease: "power3.inOut",
  //   });
  //   gsap.from(menuBackground, {
  //     duration: 0.4,
  //     skeyY: 2,
  //     transformOrigin: "right top",
  //   });
  // };

  const handleMenu = (menu) => {
    if (menu === "Home") {
      setChangeStyle({
        background:
          "linear-gradient(-45deg, #aac1cd, #161e30, #74868f, #09203f)",
        backgroundSize: "400% 400%",
        animation: "colorGradient 5s ease infinite",
      });
    } else if (menu === "About") {
      setChangeStyle({
        background:
          "linear-gradient(-45deg, #3e5b65, #1d4654, #0c5d79, #006b8f)",
        backgroundSize: "400% 400%",
        animation: "colorGradient 5s ease infinite",
      });
    } else if (menu === "Projects") {
      setChangeStyle({
        background:
          "linear-gradient(-45deg, #915636, #ca662f, #7e736d, #944000)",
        backgroundSize: "400% 400%",
        animation: "colorGradient 5s ease infinite",
      });
    } else if (menu === "") {
      setChangeStyle({});
    }
  };

  const handleMenuReturn = () => {
    gsap.to(menuBackground, { duration: 0.4, opacity: 0 });
  };

  const handleHover = (e) => {
    gsap.to(e.target, { duration: 0.3, y: 3, skewX: 4, ease: "power3.inOut" });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.target, { duration: 0.3, y: -3, skewX: 0, ease: "power3.inOut" });
  };

  const handleText = (menuText) => {
    if (menuText === "Home") {
      setOverviewTitle(menuText);
      setOverviewText(
        "I am a software developer with spesialisation in front end development."
      );
    } else if (menuText === "Projects") {
      setOverviewTitle(menuText);
      setOverviewText(
        "I had been working on several projects using various technologies."
      );
    } else if (menuText === "About") {
      setOverviewTitle(menuText);
      setOverviewText(
        "My passion is making a website comes to life, increases a market value of businesses, and becomes user responsive."
      );
    }
  };

  const handleTextReturn = () => {
    setOverviewTitle(defaultTitle);
    setOverviewText(defaultText);
  };

  const displayInfo = () => {
    if (overviewTitle != "Hi,") {
      return (
        <>
          <h3 className="overview-menu">{overviewTitle}</h3>
          <p className="overview-menu">{overviewText}</p>
        </>
      );
    } else if (overviewTitle === "Hi,") {
      return (
        <>
          <h3>{overviewTitle}</h3>
          <p>{overviewText}</p>
        </>
      );
    }
  };

  const handleContentResume = () => {
    setContentsText("Click here");
  };

  const handleContentReturn = () => {
    setContentsText(defaultContentsText);
  };

  return (
    <div
      ref={(el) => {
        menu = el;
      }}
      className="hamburger-menu"
    >
      <div
        ref={(el) => {
          revealMenuBackground = el;
        }}
        className="menu-secondary-background-color"
      ></div>
      <div
        ref={(el) => {
          revealMenu = el;
        }}
        className="menu-layer"
        style={changeStyle}
      >
        <div
          ref={(el) => {
            menuBackground = el;
          }}
          className="menu-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => {
                        homeMenu = el;
                      }}
                      onMouseEnter={(e) => {
                        // handleMenu(HomeImage);
                        handleMenu("Home");
                        handleHover(e);
                        handleText("Home");
                      }}
                      onMouseOut={(e) => {
                        handleMenuReturn();
                        handleHoverExit(e);
                        handleTextReturn();
                        handleMenu("");
                      }}
                      to="/"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      ref={(el) => {
                        aboutMenu = el;
                      }}
                      onMouseEnter={(e) => {
                        // handleMenu(AboutImage);
                        handleMenu("About");
                        handleHover(e);
                        handleText("About");
                      }}
                      onMouseOut={(e) => {
                        handleMenuReturn();
                        handleHoverExit(e);
                        handleTextReturn();
                        handleMenu("");
                      }}
                      to="/about"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      ref={(el) => {
                        projectsMenu = el;
                      }}
                      onMouseEnter={(e) => {
                        // handleMenu(ProjectsImage);
                        handleMenu("Projects");
                        handleHover(e);
                        handleText("Projects");
                      }}
                      onMouseOut={(e) => {
                        handleMenuReturn();
                        handleHoverExit(e);
                        handleTextReturn();
                        handleMenu("");
                      }}
                      to="/projects"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                ref={(el) => {
                  info = el;
                }}
                className="info"
              >
                {displayInfo()}
              </div>
              <div className="contents">
                Document:
                <span
                  onMouseEnter={(e) => {
                    handleContentResume();
                  }}
                  onMouseOut={(e) => {
                    handleContentReturn();
                  }}
                  onClick={() => {
                    window.open(
                      "https://imanuelhalim-resume.s3-ap-southeast-2.amazonaws.com/Imanuel+Halim_Resume.pdf",
                      "_blank"
                    );
                    return null;
                  }}
                >
                  {contentsText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
