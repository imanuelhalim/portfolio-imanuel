import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

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

const About = () => {
  const widthScreenSize = useWindowSize();

  const handleDisplay = () => {
    if (widthScreenSize > 959) {
      return (
        <div className="wrapper-about">
          <h1>About</h1>
          <Container fluid>
            <Row>
              <Col className="about">
                <div className="about-content-container">
                  <div className="about-content-description">
                    My journey in IT began in 2019 as a{" "}
                    <strong>Software Developer</strong> to do a project with
                    Swinburne University of Technology in a team of five to
                    complete one of my subjects in an IT degree. I have been
                    acted as a lead developer and developed a project with VBA
                    (Visual Basic Application) with no clue and experience
                    previously.
                    <br />
                    Once the project finished successfully, I received more
                    opportunities in volunteering, internships, and freelance
                    projects from various businesses and individuals to build
                    software or websites.
                    <br /> I enjoy building online products like websites,
                    applications, or anything in between. My objective is always
                    to create useful outcomes for communities, provide a
                    responsive, simple, and clean design; and enhance the market
                    value of a client's business.
                    <br />
                    There are some technologies that I have been working
                    recently:
                  </div>
                  <div className="list">
                    <ul className="about-content-list">
                      <li>WordPress</li>
                      <li>HTML and (S)CSS</li>
                    </ul>
                    <ul className="about-content-list">
                      <li>ReactJs</li>
                      <li>AWS</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="skill">
                <h2>Technical Skills</h2>
                <div className="skill-content">
                  <span>WordPress</span>
                  <div>
                    <ProgressBar animated now={90} label={"90%"} />
                  </div>
                  <span>HTML</span>
                  <div>
                    <ProgressBar animated now={90} label={"90%"} />
                  </div>
                  <span>CSS</span>
                  <div>
                    <ProgressBar animated now={90} label={"90%"} />
                  </div>
                  <span>JavaScript</span>
                  <div>
                    <ProgressBar
                      variant="info"
                      animated
                      now={80}
                      label={"80%"}
                    />
                  </div>
                  <span>PHP</span>
                  <div>
                    {" "}
                    <ProgressBar
                      variant="success"
                      animated
                      now={60}
                      label={"60%"}
                    />
                  </div>
                  <span>ReactJs</span>
                  <div>
                    <ProgressBar
                      variant="info"
                      animated
                      now={80}
                      label={"80%"}
                    />
                  </div>
                  <span>AWS</span>
                  <div>
                    <ProgressBar
                      variant="warning"
                      animated
                      now={50}
                      label={"50%"}
                    />
                  </div>
                  <span>Visual Basic Application</span>
                  <div>
                    <ProgressBar
                      variant="info"
                      animated
                      now={80}
                      label={"80%"}
                    />
                  </div>
                  <span>Java</span>
                  <div>
                    {" "}
                    <ProgressBar
                      variant="success"
                      animated
                      now={60}
                      label={"60%"}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else if (widthScreenSize <= 959) {
      return (
        <div className="wrapper-about">
          <h1 className="about-title">About</h1>
          <Container>
            <Row>
              <div className="about-content-container">
                <div className="about-content-description">
                  My journey in IT began in 2019 as a{" "}
                  <strong>Software Developer</strong> to do a project with
                  Swinburne University of Technology in a team of five to
                  complete one of my subjects in an IT degree. I have been acted
                  as a lead developer and developed a project with VBA (Visual
                  Basic Application) with no clue and experience previously.
                  <br />
                  Once the project finished successfully, I received more
                  opportunities in volunteering, internships, and freelance
                  projects from various businesses and individuals to build
                  software or websites.
                  <br /> I enjoy building online products like websites,
                  applications, or anything in between. My objective is always
                  to create useful outcomes for communities, provide a
                  responsive, simple, and clean design; and enhance the market
                  value of a client's business.
                  <br />
                  There are some technologies that I have been working recently:
                </div>
                <div className="list">
                  <ul className="about-content-list-left">
                    <li>WordPress</li>
                    <li>HTML and (S)CSS</li>
                  </ul>
                  <ul className="about-content-list-right">
                    <li>ReactJs</li>
                    <li>AWS</li>
                  </ul>
                </div>
                <h2 className="skill-title">Technical Skills</h2>
                <div className="skill-content">
                  <span>WordPress</span>
                  <div>
                    <ProgressBar animated now={90} label={"90%"} />
                  </div>
                  <span>HTML</span>
                  <div>
                    <ProgressBar animated now={90} label={"90%"} />
                  </div>
                  <span>CSS</span>
                  <div>
                    <ProgressBar animated now={90} label={"90%"} />
                  </div>
                  <span>JavaScript</span>
                  <div>
                    <ProgressBar
                      variant="info"
                      animated
                      now={80}
                      label={"80%"}
                    />
                  </div>
                  <span>PHP</span>
                  <div>
                    {" "}
                    <ProgressBar
                      variant="success"
                      animated
                      now={60}
                      label={"60%"}
                    />
                  </div>
                  <span>ReactJs</span>
                  <div>
                    <ProgressBar
                      variant="info"
                      animated
                      now={80}
                      label={"80%"}
                    />
                  </div>
                  <span>AWS</span>
                  <div>
                    <ProgressBar
                      variant="warning"
                      animated
                      now={50}
                      label={"50%"}
                    />
                  </div>
                  <span>Visual Basic Application</span>
                  <div>
                    <ProgressBar
                      variant="info"
                      animated
                      now={80}
                      label={"80%"}
                    />
                  </div>
                  <span>Java</span>
                  <div>
                    {" "}
                    <ProgressBar
                      variant="success"
                      animated
                      now={60}
                      label={"60%"}
                    />
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      );
    }
  };

  return <>{handleDisplay()}</>;
};

export default About;
