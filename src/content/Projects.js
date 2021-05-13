import React from 'react';
import {
  TabContainer,
  Row,
  Col,
  Nav,
  TabContent,
  TabPane,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import Professional from './Experiences/Professional.json';
import Volunteering from './Experiences/Volunteering.json';

const { useEffect, useState } = React;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

const Projects = () => {
  const widthScreenSize = useWindowSize();
  const [displayContent, setDisplayContent] = useState('View');

  const professionalContent = () => {
    return (
      <div className="wrapper-projects-contents">
        <h2>Professional</h2>
        {Professional.map((text, value) => {
          if (Professional.length > 1 && text.id !== Professional.length) {
            return (
              <div key={text + value} className="projects-contents-container">
                {positionSection(text)}
                <div className="spacer" />
              </div>
            );
          } else {
            return (
              <div key={text + value} className="projects-contents-container">
                {positionSection(text)}
              </div>
            );
          }
        })}
      </div>
    );
  };

  const volunteeringContent = () => {
    return (
      <div className="wrapper-projects-contents">
        <h2>Volunteering</h2>
        {Volunteering.map((text, value) => {
          if (Volunteering.length > 1 && text.id !== Volunteering.length) {
            return (
              <div key={text + value} className="projects-contents-container">
                {positionSection(text)}
                <div className="spacer" />
              </div>
            );
          } else {
            return (
              <div key={text + value} className="projects-contents-container">
                {positionSection(text)}
              </div>
            );
          }
        })}
      </div>
    );
  };

  const recentProjectsContent = () => {
    return (
      <>
        <div className="wrapper-projects-contents">
          <h2>Professional</h2>
          {Professional.map((text, value) => {
            let total_contents = Professional.length / 2;
            if (Professional.length === text.id) {
              return (
                <div key={text + value} className="projects-contents-container">
                  {positionSection(text)}
                </div>
              );
            }
            if (text.id > total_contents) {
              return (
                <div key={text + value} className="projects-contents-container">
                  {positionSection(text)}
                  <div className="spacer" />
                </div>
              );
            }
          })}
        </div>
        <div className="wrapper-projects-contents">
          <h2>Volunteering</h2>
          {Volunteering.map((text, value) => {
            let total_contents = Volunteering.length / 2;
            if (Volunteering.length === text.id) {
              return (
                <div key={text + value} className="projects-contents-container">
                  {positionSection(text)}
                </div>
              );
            }
            if (text.id > total_contents) {
              return (
                <div key={text + value} className="projects-contents-container">
                  {positionSection(text)}
                  <div className="spacer" />
                </div>
              );
            }
          })}
        </div>
      </>
    );
  };

  const handleDisplay = (widthScreenSize, text, section) => {
    if (widthScreenSize <= 600 && section === 'first-section') {
      return (
        <>
          <Row className="sub-title-mobile">
            <strong>{text.title}</strong>
          </Row>
          <Row className="sub-period-mobile">
            <strong>{text.period}</strong>
          </Row>
        </>
      );
    } else if (widthScreenSize > 600 && section === 'first-section') {
      return (
        <Row className="title-period">
          <Col sm={6}>
            <div className="sub-title">
              <strong>{text.title}</strong>
            </div>
          </Col>
          <Col sm={6}>
            <div className="sub-period">
              <strong>{text.period}</strong>
            </div>
          </Col>
        </Row>
      );
    }
    if (widthScreenSize > 600 && section === 'second-section') {
      return (
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">{text.position}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Platforms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Outcomes</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent>
              <TabPane eventKey="first">
                <ul>
                  {text.responsibility.map((result) => {
                    return <li key={result}>{result}</li>;
                  })}
                </ul>
              </TabPane>
              <TabPane eventKey="second">
                <ul className="platform-list">
                  {text.platforms.map((result) => {
                    return <li key={result}>{result}</li>;
                  })}
                </ul>
              </TabPane>
              <TabPane eventKey="third">
                <ul>
                  {text.projectOutcome.map((result) => {
                    return (
                      <li
                        key={result}
                        onClick={() => {
                          window.open(`${result}`, '_blank');
                        }}
                      >
                        {result}
                      </li>
                    );
                  })}
                </ul>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      );
    } else if (widthScreenSize <= 600 && section === 'second-section') {
      return (
        <Row className="second-section-mobile">
          <Nav variant="pills" className="nav-content-mobile">
            <Nav.Item>
              <Nav.Link className="nav-link-mobile" eventKey="first">
                {text.position}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link-mobile" eventKey="second">
                Platforms
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link-mobile" eventKey="third">
                Outcomes
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent className="tab-content-mobile">
            <TabPane className="tab-pane-mobile" eventKey="first">
              <ul>
                {text.responsibility.map((result) => {
                  return <li key={result}>{result}</li>;
                })}
              </ul>
            </TabPane>
            <TabPane className="tab-pane-mobile" eventKey="second">
              <ul className="platform-list">
                {text.platforms.map((result) => {
                  return <li key={result}>{result}</li>;
                })}
              </ul>
            </TabPane>
            <TabPane className="tab-pane-mobile" eventKey="third">
              <ul>
                {text.projectOutcome.map((result) => {
                  return (
                    <li
                      key={result}
                      onClick={() => {
                        window.open(`${result}`, '_blank');
                      }}
                    >
                      {result}
                    </li>
                  );
                })}
              </ul>
            </TabPane>
          </TabContent>
        </Row>
      );
    }
  };

  const positionSection = (text, status) => {
    return (
      <>
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
          {handleDisplay(widthScreenSize, text, 'first-section')}
          {handleDisplay(widthScreenSize, text, 'second-section')}
        </TabContainer>
      </>
    );
  };

  const displaySelectedContent = () => {
    if (displayContent === 'All Projects' || displayContent === 'View') {
      return (
        <div>
          {professionalContent()}
          {volunteeringContent()}
        </div>
      );
    }
    if (displayContent === 'Professional') {
      return <div>{professionalContent()}</div>;
    }
    if (displayContent === 'Volunteering') {
      return <div>{volunteeringContent()}</div>;
    }
    if (displayContent === 'Recent Projects') {
      return <div>{recentProjectsContent()}</div>;
    }
  };

  return (
    <div className="wrapper-projects">
      <Row>
        <Col></Col>
        <Col>
          <h1>Projects</h1>
        </Col>
        <Col className="right-column">
          <DropdownButton title={displayContent}>
            <Dropdown.Item
              title="All Projects"
              onSelect={() => {
                setDisplayContent('All Projects');
              }}
            >
              All projects
            </Dropdown.Item>
            <Dropdown.Item
              title="All Projects"
              onSelect={() => {
                setDisplayContent('Professional');
              }}
            >
              Professional
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => {
                setDisplayContent('Volunteering');
              }}
            >
              Volunteering
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => {
                setDisplayContent('Recent Projects');
              }}
            >
              Recent Projects
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      {displaySelectedContent()}
    </div>
  );
};

export default Projects;
