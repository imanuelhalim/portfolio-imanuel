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
import HashtagCoffeeImage from "../images/Hashtag-Coffee.webp";
import InfaAustraliaImage from "../images/Infa-australia.webp";
import ComfortLilydaleImage from "../images/Comfort Logo.webp";
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

  const createRow = () => {
    return(
      <div className="projects-box">
        <Row>
          {createColumn(KasihProjectImage, "Kasih Project-Logo", "Kasih Project", "A non-profit organization that supports individuals regardless of age, disability, religious, or ethnic group.", "https://kasihproject.org.au")}
          {createColumn(StressDetoxImage, "Stress Detox Melbourne-Logo", "Stress Detox Melbourne", "Human transformation courses help releasing stress from the inner most layers of human consciousness.", "https://stressdetoxmelb.com.au")}
          {createColumn(InfaAustraliaImage, "Infa Australia Logo", "Infa Australia", "A business that supports current and prospective international students to complete their studies in Australia by providing services with little or no cost. ", "https://infaaustralia.com.au")}
        </Row>
        <Row>
          {createColumn(JBGRecordsImage, "JBG Records Logo", "JBG Records", "One-stop service music production located in Surabaya, Indonesia, founded by John Mario as a producer and multi-instrumentalist.", "https://jbgrecords.com")}
          {createColumn(ComfortLilydaleImage, "Comfort Lilydale Logo", "Comfort Lilydale", "The ComfortInn Lilydale is a colonial style property perfectly situated at the gateway to the Yarra Valley.", "https://comfortlilydale.com.au")}
          {createColumn(HashtagCoffeeImage, "Hashtag Coffee Logo", "Hashtag Coffee", "Hashtag Coffee provides green beans that 100% ethically sourced directly from farmers.", "https://hashtagcoffee.com.au/")}
        </Row>
      </div>
    )
  }

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

  const createCard = (srcImg, altName, cardTitle, description, websiteLink) => {
    return(
      <div className="projects-box">
        <Card>
          <Card.Img
            src={srcImg}
            alt={altName}
          />
          <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button
              onClick={() => {
                window.open(websiteLink, "_blank");
              }}
            >
              Visit Website
            </Button>
          </Card.Body>
        </Card>
      </div>
    )
  }

  const handleProjectBox = () => {
    if (widthScreenSize > 768) {
      return (
        <>
          {createRow()}
        </>
      );
    } else if (widthScreenSize <= 768) {
      return (
        <>
          {createCard(KasihProjectImage, "Kasih Project-Logo", "Kasih Project", "A non-profit organization that supports individuals regardless of age, disability, religious, or ethnic group.", "https://kasihproject.org.au")}
          {createCard(StressDetoxImage, "Stress Detox Melbourne-Logo", "Stress Detox Melbourne", "Human transformation courses help releasing stress from the inner most layers of human consciousness.", "https://stressdetoxmelb.com.au")}
          {createCard(InfaAustraliaImage, "Infa Australia Logo", "Infa Australia", "A business that supports current and prospective international students to complete their studies in Australia by providing services with little or no cost. ", "https://infaaustralia.com.au")}
          {createCard(JBGRecordsImage, "JBG Records Logo", "JBG Records", "One-stop service music production located in Surabaya, Indonesia, founded by John Mario as a producer and multi-instrumentalist.", "https://jbgrecords.com")}
          {createCard(ComfortLilydaleImage, "Comfort Lilydale Logo", "Comfort Lilydale", "The ComfortInn Lilydale is a colonial style property perfectly situated at the gateway to the Yarra Valley.", "https://comfortlilydale.com.au")}
          {createCard(HashtagCoffeeImage, "Hashtag Coffee Logo", "Hashtag Coffee", "Hashtag Coffee provides green beans that 100% ethically sourced directly from farmers.", "https://hashtagcoffee.com.au/")}
        </>  
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
                willingness to learn to make myself familiar with updated
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
