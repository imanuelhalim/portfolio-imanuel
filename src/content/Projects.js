import React, { useState, useEffect } from 'react';
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
import firebase from './firebase';

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
  const [profList, setProfList] = useState([]);
  const [volList, setVolList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayContent, setDisplayContent] = useState('View');

  const profDB = firebase.firestore().collection('professional');
  const volDB = firebase.firestore().collection('volunteering');

  function getProfExp() {
    setLoading(true);
    profDB.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setProfList(items);
      setLoading(false);
    });
  }

  function getVolExp() {
    setLoading(true);
    volDB.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setVolList(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getProfExp();
    getVolExp();
  }, []);

  const professionalExp = []
    .concat(profList)
    .sort((a, b) => (a.id > b.id ? 1 : -1))
    .map((item, i) => (
      <div className="projects-contents-container" key={i}>
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
          <Row className="title-period">
            <Col sm={6}>
              <div className="sub-title">
                <strong>{item.company}</strong>
              </div>
            </Col>
            <Col sm={6}>
              <div className="sub-period">
                <strong>
                  {item.startDate} - {item.endDate}
                </strong>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">{item.position}</Nav.Link>
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
                    {item.jobDescription.map((result, key) => {
                      return <li key={result + key}>{result}</li>;
                    })}
                  </ul>
                </TabPane>
                <TabPane eventKey="second">
                  <ul className="platform-list">
                    {item.platforms.map((result, key) => {
                      return <li key={result + key}>{result}</li>;
                    })}
                  </ul>
                </TabPane>
                <TabPane eventKey="third">
                  <ul>
                    {item.outcomes.map((result, key) => {
                      if (result !== '') {
                        return (
                          <li
                            key={result + key}
                            onClick={() => {
                              window.open(`${result}`, '_blank');
                            }}
                          >
                            {result}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
        <div className="spacer" />
      </div>
    ));

  const professionalExpMobile = []
    .concat(profList)
    .sort((a, b) => (a.id > b.id ? 1 : -1))
    .map((item, i) => (
      <div className="projects-contents-container" key={i}>
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
          <Row className="sub-title-mobile">
            <strong>{item.company}</strong>
          </Row>
          <Row className="sub-period-mobile">
            <strong>
              {item.startDate} - {item.endDate}
            </strong>
          </Row>
          <Row className="second-section-mobile">
            <Nav variant="pills" className="nav-content-mobile">
              <Nav.Item>
                <Nav.Link className="nav-link-mobile" eventKey="first">
                  {item.position}
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
                  {item.jobDescription.map((result, key) => {
                    return <li key={result + key}>{result}</li>;
                  })}
                </ul>
              </TabPane>
              <TabPane className="tab-pane-mobile" eventKey="second">
                <ul className="platform-list">
                  {item.platforms.map((result, key) => {
                    return <li key={result + key}>{result}</li>;
                  })}
                </ul>
              </TabPane>
              <TabPane className="tab-pane-mobile" eventKey="third">
                <ul>
                  {item.outcomes.map((result, key) => {
                    if (result !== '') {
                      return (
                        <li
                          key={result + key}
                          onClick={() => {
                            window.open(`${result}`, '_blank');
                          }}
                        >
                          {result}
                        </li>
                      );
                    }
                  })}
                </ul>
              </TabPane>
            </TabContent>
          </Row>
        </TabContainer>
        <div className="spacer" />
      </div>
    ));

  const volunteeringExp = []
    .concat(volList)
    .sort((a, b) => (a.id > b.id ? 1 : -1))
    .map((item, i) => (
      <div className="projects-contents-container" key={i}>
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
          <Row className="title-period">
            <Col sm={6}>
              <div className="sub-title">
                <strong>{item.company}</strong>
              </div>
            </Col>
            <Col sm={6}>
              <div className="sub-period">
                <strong>
                  {item.startDate} - {item.endDate}
                </strong>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">{item.position}</Nav.Link>
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
                    {item.jobDescription.map((result, key) => {
                      return <li key={result + key}>{result}</li>;
                    })}
                  </ul>
                </TabPane>
                <TabPane eventKey="second">
                  <ul className="platform-list">
                    {/* {console.log(item.platforms)} */}
                    {item.platforms.map((result, key) => {
                      return <li key={result + key}>{result}</li>;
                    })}
                  </ul>
                </TabPane>
                <TabPane eventKey="third">
                  <ul>
                    {item.outcomes.map((result, key) => {
                      if (result !== '') {
                        return (
                          <li
                            key={result + key}
                            onClick={() => {
                              window.open(`${result}`, '_blank');
                            }}
                          >
                            {result}
                          </li>
                        );
                      }
                    })}
                  </ul>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
        <div className="spacer" />
      </div>
    ));

  const volunteeringExpMobile = []
    .concat(volList)
    .sort((a, b) => (a.id > b.id ? 1 : -1))
    .map((item, i) => (
      <div className="projects-contents-container" key={i}>
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
          <Row className="sub-title-mobile">
            <strong>{item.company}</strong>
          </Row>
          <Row className="sub-period-mobile">
            <strong>
              {item.startDate} - {item.endDate}
            </strong>
          </Row>
          <Row className="second-section-mobile">
            <Nav variant="pills" className="nav-content-mobile">
              <Nav.Item>
                <Nav.Link className="nav-link-mobile" eventKey="first">
                  {item.position}
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
                  {item.jobDescription.map((result, key) => {
                    return <li key={result + key}>{result}</li>;
                  })}
                </ul>
              </TabPane>
              <TabPane className="tab-pane-mobile" eventKey="second">
                <ul className="platform-list">
                  {/* {console.log(item.platforms)} */}
                  {item.platforms.map((result, key) => {
                    return <li key={result + key}>{result}</li>;
                  })}
                </ul>
              </TabPane>
              <TabPane className="tab-pane-mobile" eventKey="third">
                <ul>
                  {item.outcomes.map((result, key) => {
                    if (result !== '') {
                      return (
                        <li
                          key={result + key}
                          onClick={() => {
                            window.open(`${result}`, '_blank');
                          }}
                        >
                          {result}
                        </li>
                      );
                    }
                  })}
                </ul>
              </TabPane>
            </TabContent>
          </Row>
        </TabContainer>
        <div className="spacer" />
      </div>
    ));

  const displaySelectedContent = () => {
    if (
      displayContent === 'All Projects' ||
      (displayContent === 'View' && widthScreenSize > 600)
    ) {
      return (
        <div>
          <div className="wrapper-projects-contents">
            <h2>Professional</h2>
            {professionalExp}
          </div>
          <div className="wrapper-projects-contents">
            <h2>Volunteering</h2>
            {volunteeringExp}
          </div>
        </div>
      );
    }
    if (displayContent === 'Professional' && widthScreenSize > 600) {
      return (
        <div className="wrapper-projects-contents">
          <h2>Professional</h2>
          {professionalExp}
        </div>
      );
    }
    if (displayContent === 'Volunteering' && widthScreenSize > 600) {
      return (
        <div className="wrapper-projects-contents">
          <h2>Volunteering</h2>
          {volunteeringExp}
        </div>
      );
    }
    if (
      displayContent === 'All Projects' ||
      (displayContent === 'View' && widthScreenSize <= 600)
    ) {
      return (
        <div>
          <div className="wrapper-projects-contents">
            <h2>Professional</h2>
            {professionalExpMobile}
          </div>
          <div className="wrapper-projects-contents">
            <h2>Volunteering</h2>
            {volunteeringExpMobile}
          </div>
        </div>
      );
    }
    if (displayContent === 'Professional' && widthScreenSize <= 600) {
      return (
        <div className="wrapper-projects-contents">
          <h2>Professional</h2>
          {professionalExpMobile}
        </div>
      );
    }
    if (displayContent === 'Volunteering' && widthScreenSize <= 600) {
      return (
        <div className="wrapper-projects-contents">
          <h2>Volunteering</h2>
          {volunteeringExpMobile}
        </div>
      );
    }
  };

  const displayHeaderContent = () => {
    if (widthScreenSize > 600) {
      return (
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
            </DropdownButton>
          </Col>
        </Row>
      );
    } else if (widthScreenSize <= 600) {
      return (
        <>
          <Row className="header-projects-mobile">
            <h1>Projects</h1>
          </Row>
          <Row className="dropdownbutton-mobile">
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
            </DropdownButton>
          </Row>
        </>
      );
    }
  };

  return (
    <div className="wrapper-projects">
      {displayHeaderContent()}
      {displaySelectedContent()}
    </div>
  );
};

export default Projects;
