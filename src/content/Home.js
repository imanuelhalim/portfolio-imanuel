import React from "react";
import { Link as PageLink } from "react-router-dom";
import {
  FaAngleDoubleRight,
  FaAngleDoubleDown,
  FaRegSmile,
  FaRegSmileWink,
  FaCoffee,
} from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { RiCodeBoxLine } from "react-icons/ri";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import HashtagCoffee from "../images/Hashtag-Coffee.webp";
import InfaAustralia from "../images/Infa-australia.webp";
import ComfortLilydale from "../images/Comfort Logo.webp";
import JBGRecordsImage from "../images/JBG-logo-wide.webp";
import KasihProjectImage from "../images/Kasih Project Logo.webp";
import StressDetoxImage from "../images/Stress Detox Melbourne Logo.webp";
import PPE2UImage from "../images/PPE2U Logo.webp";
import AshirAhmedImage from "../images/Dr Ashir Ahmed Logo.webp";
import AutoRepairImage from "../images/Auto Repair Logo.webp";
import NutMeldImage from "../images/NutMeld Logo.webp";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link as SmoothLink } from "react-scroll";

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

const Home = () => {
  const [isHoverLeftButton, setIsHoverLeftButton] = useState(false);
  const [isHoverRightButton, setIsHoverRightButton] = useState(false);
  const [isHoverAbout, setIsHoverAbout] = useState(false);

  const widthScreenSize = useWindowSize();

  const handleLeftButton = () => {
    if (isHoverLeftButton) {
      return (
        <>
          About me <FaAngleDoubleDown />
        </>
      );
    } else if (!isHoverLeftButton) {
      return (
        <>
          About me <FaAngleDoubleRight />
        </>
      );
    }
  };

  const handleRightButton = () => {
    if (isHoverRightButton) {
      return (
        <>
          Recent projects <RiCodeBoxLine />
        </>
      );
    } else if (!isHoverRightButton) {
      return (
        <>
          Recent projects <GrProjects />
        </>
      );
    }
  };

  const handleAboutButton = () => {
    if (isHoverAbout) {
      return (
        <>
          Are you sure? <FaRegSmileWink />
        </>
      );
    } else if (!isHoverAbout) {
      return (
        <>
          Read more about me <FaRegSmile />
        </>
      );
    }
  };

  const handleButtonHomeSec = (widthScreenSize) => {
    if (widthScreenSize >= 768) {
      return (
        <>
          <SmoothLink smooth={true} duration={1000} to="about">
            <Button
              className="left-button"
              onMouseEnter={() => {
                setIsHoverLeftButton(true);
              }}
              onMouseOut={() => {
                setIsHoverLeftButton(false);
              }}
              onClick={() => {
                window.scrollTo(0, 800);
              }}
            >
              {handleLeftButton()}
            </Button>
          </SmoothLink>
          <SmoothLink smooth={true} duration={1000} to="projects">
            <Button
              className="right-button"
              onMouseEnter={() => {
                setIsHoverRightButton(true);
              }}
              onMouseOut={() => {
                setIsHoverRightButton(false);
              }}
              onClick={() => {
                window.scrollTo(0, 1550);
              }}
            >
              {handleRightButton()}
            </Button>
          </SmoothLink>
        </>
      );
    } else if (widthScreenSize < 768) {
      return (
        <>
          <SmoothLink smooth={true} duration={1000} to="about">
            <Button
              className="button"
              onMouseEnter={() => {
                setIsHoverLeftButton(true);
              }}
              onMouseOut={() => {
                setIsHoverLeftButton(false);
              }}
              onClick={() => {
                window.scrollTo(0, 800);
              }}
            >
              {handleLeftButton()}
            </Button>
          </SmoothLink>
          <br />
          <SmoothLink smooth={true} duration={1000} to="projects">
            <Button
              className="button"
              onMouseEnter={() => {
                setIsHoverRightButton(true);
              }}
              onMouseOut={() => {
                setIsHoverRightButton(false);
              }}
              onClick={() => {
                window.scrollTo(0, 1550);
              }}
            >
              {handleRightButton()}
            </Button>
          </SmoothLink>
        </>
      );
    }
  };

  const createColumn = (imgSrc, imgSrcAlt, subTitle, subDesc, websiteLink) => {
    return(
    <Col>
      <Flippy flipOnHover={true}>
        <FrontSide className="front-side">
          <img src={imgSrc} alt={imgSrcAlt} />
        </FrontSide>
        <BackSide className="back-side">
          <div className="sub-title">{subTitle}</div>
          <div className="sub-description">
            {subDesc}
          </div>
          <div className="div-sub-link">
            <Button
              onClick={() => {
                window.open(websiteLink, "_blank");
              }}
            >
              Visit Website
            </Button>
          </div>
        </BackSide>
      </Flippy>
    </Col>
    );
  }

  const handleProjectBox = () => {
    if (widthScreenSize > 768) {
      return (
        <div className="projects-box">
          <Row>
            {createColumn(KasihProjectImage, "Kasih Project-Logo", "Kasih Project", "A non-profit organization that supports individuals regardless of age, disability, religious, or ethnic group.", "https://kasihproject.org.au")}
            {createColumn(StressDetoxImage, "Stress Detox Melbourne-Logo", "Stress Detox Melbourne", "Human transformation courses help releasing stress from the inner most layers of human consciousness., disability, religious, or ethnic group.", "https://stressdetoxmelb.com.au")}
            {/* {createColumn(StressDetoxImage, "Stress Detox Melbourne-Logo", "Stress Detox Melbourne", "Human transformation courses help releasing stress from the inner most layers of human consciousness., disability, religious, or ethnic group.", "https://stressdetoxmelb.com.au")} */}
            {/* <Col>
              <Flippy flipOnHover={true}>
                <FrontSide className="front-side">
                  <img src={KasihProjectImage} alt="Kasih Project-Logo" />
                </FrontSide>
                <BackSide className="back-side">
                  <div className="sub-title">Kasih Project</div>
                  <div className="sub-description">
                    A non-profit organization that supports individuals
                    regardless of age, disability, religious, or ethnic group.
                  </div>
                  <div className="div-sub-link">
                    <Button
                      onClick={() => {
                        window.open("https://kasihproject.org.au", "_blank");
                      }}
                    >
                      Visit Website
                    </Button>
                  </div>
                </BackSide>
              </Flippy>
            </Col> */}
            {/* <Col>
              <Flippy flipOnHover={true}>
                <FrontSide className="front-side">
                  <img
                    src={StressDetoxImage}
                    alt="Stress Detox Melbourne-Logo"
                  />
                </FrontSide>
                <BackSide className="back-side">
                  <div className="sub-title">Stress Detox Melbourne</div>
                  <div className="sub-description">
                    Human transformation courses help releasing stress from the
                    inner most layers of human consciousness.
                  </div>
                  <div className="div-sub-link">
                    <Button
                      onClick={() => {
                        window.open("https://stressdetoxmelb.com.au", "_blank");
                      }}
                    >
                      Visit Website
                    </Button>
                  </div>
                </BackSide>
              </Flippy>
            </Col> */}
            <Col>
              <Flippy flipOnHover={true}>
                <FrontSide className="front-side">
                  <img src={PPE2UImage} alt="PPE2U-Logo" />
                </FrontSide>
                <BackSide className="back-side">
                  <div className="sub-title">PPE2U</div>
                  <div className="sub-description">
                    Helping as many businesses to reopen, Covid safe, and
                    protecting their employees and customers.
                  </div>
                  <div className="div-sub-link">
                    <Button
                      onClick={() => {
                        window.open("https://ppe2u.com.au", "_blank");
                      }}
                    >
                      Visit Website
                    </Button>
                  </div>
                </BackSide>
              </Flippy>
            </Col>
          </Row>
          <Row>
            <Col>
              <Flippy flipOnHover={true}>
                <FrontSide className="front-side">
                  <img src={JBGRecordsImage} alt="JBG Records-Logo" />
                </FrontSide>
                <BackSide className="back-side">
                  <div className="sub-title">JBG Records</div>
                  <div className="sub-description">
                    One-stop service music production located in Surabaya, Indonesia, founded by John Mario as a producer and multi-instrumentalist.
                  </div>
                  <div className="div-sub-link">
                    <Button
                      onClick={() => {
                        window.open("https://jbgrecords.com", "_blank");
                      }}
                    >
                      Visit Website
                    </Button>
                  </div>
                </BackSide>
              </Flippy>
            </Col>
            <Col>
              <Flippy flipOnHover={true}>
                <FrontSide className="front-side">
                  <img src={AutoRepairImage} alt="7s Auto Repair-Logo" />
                </FrontSide>
                <BackSide className="back-side">
                  <div className="sub-title">7S Auto Repair</div>
                  <div className="sub-description">
                    Independent mechanical workshop with various services, fully
                    qualified technicians, locally trained, and provides the
                    highest standard of car service.
                  </div>
                  <div className="div-sub-link">
                    <Button
                      onClick={() => {
                        window.open("https://7sautorepair.com.au", "_blank");
                      }}
                    >
                      Visit Website
                    </Button>
                  </div>
                </BackSide>
              </Flippy>
            </Col>
            <Col>
              <Flippy flipOnHover={true}>
                <FrontSide className="front-side">
                  <img src={NutMeldImage} alt="Nut Meld-Logo" />
                </FrontSide>
                <BackSide className="back-side">
                  <div className="sub-title">Nut Meld</div>
                  <div className="sub-description">
                    Easy, healthy, and delicious flavoured nut butter recipes,
                    ways to enjoy them and more.
                  </div>
                  <div className="div-sub-link">
                    <Button
                      onClick={() => {
                        window.open("https://nutmeld.com.au", "_blank");
                      }}
                    >
                      Visit Website
                    </Button>
                  </div>
                </BackSide>
              </Flippy>
            </Col>
          </Row>
        </div>
      );
    } else if (widthScreenSize <= 768) {
      return (
        <div className="projects-box">
          <Card>
            <Card.Img
              className="kasihproject"
              src={KasihProjectImage}
              alt="Kasih Project-Logo"
            />
            <Card.Body>
              <Card.Title>Kasih Project</Card.Title>
              <Card.Text>
                A non-profit organisation that supports individuals regardless
                of age, disability, religious, or ethnic group.
              </Card.Text>
              <Button
                onClick={() => {
                  window.open("https://kasihproject.org.au", "_blank");
                }}
              >
                Visit Website
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="stressdetoxmelb"
              src={StressDetoxImage}
              alt="Stress Detox Melbourne-Logo"
            />
            <Card.Body>
              <Card.Title>Stress Detox Melbourne</Card.Title>
              <Card.Text>
                Human transformation courses help releasing stress from the
                inner most layers of human consciousness.
              </Card.Text>
              <Button
                onClick={() => {
                  window.open("https://stressdetoxmelb.com.au", "_blank");
                }}
              >
                Visit Website
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img className="ppe2u" src={PPE2UImage} alt="PPE2U-Logo" />
            <Card.Body>
              <Card.Title>PPE2U</Card.Title>
              <Card.Text>
                Helping as many businesses to reopen, Covid safe, and protecting
                their employees and customers.
              </Card.Text>
              <Button
                onClick={() => {
                  window.open("https://ppe2u.com.au", "_blank");
                }}
              >
                Visit Website
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="ashirahmed"
              src={AshirAhmedImage}
              alt="Dr Ashir Ahmed-Logo"
            />
            <Card.Body>
              <Card.Title>Dr Ashir Ahmed</Card.Title>
              <Card.Text>
                An academic and researcher, qualifie and trained in the area of
                Information Systems.
              </Card.Text>
              <Button
                onClick={() => {
                  window.open("https://ashirahmed.com", "_blank");
                }}
              >
                Visit Website
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="autorepair"
              src={AutoRepairImage}
              alt="7s Auto Repair-Logo"
            />
            <Card.Body>
              <Card.Title>7S Auto Repair</Card.Title>
              <Card.Text>
                Independent mechanical workshop with various services, fully
                qualified technicians, locally trained, and provides the highest
                standard of car service.
              </Card.Text>
              <Button
                onClick={() => {
                  window.open("https://7sautorepair.com.au", "_blank");
                }}
              >
                Visit Website
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="nutmeld"
              src={NutMeldImage}
              alt="Nut Meld-Logo"
            />
            <Card.Body>
              <Card.Title>Nut Meld</Card.Title>
              <Card.Text>
                Easy, healthy, and delicious flavoured nut butter recipes, ways
                to enjoy them and more.
              </Card.Text>
              <Button
                onClick={() => {
                  window.open("https://nutmeld.com.au", "_blank");
                }}
              >
                Visit Website
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
  };

  return (
    <div className="wrapper-home">
      <Container fluid>
        {/* <Row> */}
        <div className="home-section" id="home">
          <div className="header">
            Hi there, I'm <span className="name">Imanuel Halim</span>.<br /> I'm
            a website developer.
            {/* {widthScreenSize} */}
          </div>
          {handleButtonHomeSec(widthScreenSize)}
        </div>
        {/* </Row> */}
      </Container>
      <div className="about-section" id="about">
        <Container fluid>
          <Row>
            <Col>
              <div className="about-title">About</div>
              <div className="about-contents">
                As an IT developer, I have a high curiosity about updated IT
                frameworks and technology, keen to learn more, and able to work
                within a group or independently. It was a tough process and
                challenging since I studied IT at the first time with no
                background in IT. However, I enjoy those process and have a
                wllingness to learn to make myself familiar with updated
                technology.
              </div>
              <PageLink to="/about">
                <Button
                  onMouseEnter={() => {
                    setIsHoverAbout(true);
                  }}
                  onMouseOut={() => {
                    setIsHoverAbout(false);
                  }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {handleAboutButton()}
                </Button>
              </PageLink>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="projects-section" id="projects">
        <Container fluid>
          <Row className="projects-title">My Recent Projects</Row>
          {handleProjectBox(widthScreenSize)}
          <Row>
            <PageLink to="/projects">
              <Button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                See More ...
              </Button>
            </PageLink>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
