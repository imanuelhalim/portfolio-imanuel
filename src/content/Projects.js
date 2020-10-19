import React from "react";
import {
  TabContainer,
  Row,
  Col,
  Nav,
  TabContent,
  TabPane,
} from "react-bootstrap";

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

const Projects = () => {
  const widthScreenSize = useWindowSize();

  const professional = [
    {
      no: 1,
      title: "Swinburne University of Technology",
      period: "Mar 2019 - Jun 2019",
      logo: "",
      position: "Software Developer",
      responsibility: [
        "Acted as a lead developer which responsible in design user interface and a new system from scratch.",
        "Conducted work in a team of five includes two testers and three developers.",
        "Planned, designed, and implemented a fully functional payroll spreadsheet interface using VBA.",
        "Designed and created a user manual to help academic and professional staff using workbook interface.",
      ],
      platforms: ["Visual Basic Application", "Macro", "Microsoft Excel"],
      projectOutcome: [],
      currentProject: false,
      collapse: false,
    },
    {
      no: 2,
      title: "Student Partnerships",
      period: "Aug 2019 - Oct 2019",
      logo: "",
      position: "Website Analyst and Developer",
      responsibility: [
        "Collaborated in a team that includes project supervisor, project manager, and marketing.",
        "Assisted in migrating the old website to the new WordPress website.",
        "Designed a customised website with Customer Relationship Management (CRM) ability, car service booking, shopping online, and payment gateway using WordPress.",
        "Designed and created a user manual to help clients easily update website contents, pages, and components.",
      ],
      platforms: ["WordPress", "HTML", "CSS"],
      projectOutcome: [
        "https://7sautorepair.com.au",
        "https://nutmeld.com.au",
        "https://alburnikitchendesign.com.au",
      ],
      currentProject: false,
      collapse: false,
      click: false,
    },
    {
      no: 3,
      title: "Dr Ashir Ahmed",
      period: "Oct 2019 - Nov 2019",
      logo: "",
      position: "Website Analyst and Developer",
      responsibility: [
        "Conducted analysis of hosting companies and set up a new domain.",
        "Planned, designed, and implemented a responsive website using HTML, CSS, and WordPress framework.",
        "Designed a fully functional website with the ability to register training events, publish training events, and show client’s information such as projects list, researches list, and blog.",
      ],
      platforms: ["WordPress", "HTML", "CSS"],
      projectOutcome: ["https://ashirahmed.com"],
      currentProject: false,
      collapse: false,
      click: false,
    },
    {
      no: 4,
      title: "On Demand Checks",
      period: "Mar 2020 - May 2020",
      logo: "",
      position: "Software Developer",
      responsibility: [
        "Developed an existed website using React JS framework in Visual Studio Code and used S3 bucket as a server.",
        "Set up routing traffic such as Route53 and CloudFront for the website under Amazon Web Services.",
        "Conducted several testing cases for the website to ensure all pages, forms, and buttons are working correctly.",
      ],
      platforms: [
        "ReactJs",
        "HTML",
        "CSS",
        "BootStrap",
        "Amazon Web Services",
        "Serverless",
      ],
      projectOutcome: ["https://github.com/imanuelhalim/onDemandChecks"],
      currentProject: false,
      collapse: false,
    },
    {
      no: 5,
      title: "PPE2U",
      period: "Aug 2020 - Sept 2020",
      logo: "",
      position: "Software Developer",
      responsibility: [
        "Design an online shopping website using a WordPress framework.",
        "Setting up the WooCommerce plugin and payment method on the website.",
      ],
      platforms: ["WordPress", "HTML", "CSS"],
      projectOutcome: ["https://ppe2u.com.au"],
      currentProject: false,
      collapse: false,
    },
    {
      no: 6,
      title: "Stress Detox Melbourne",
      period: "Sept 2020 - Present",
      logo: "",
      position: "Software Developer",
      responsibility: [
        "Develop a website to provide training courses using a WordPress framework.",
        "Setting up an event plugin for the website so that the website is able to show register form, event date, and payment gateway for customers.",
      ],
      platforms: ["WordPress", "HTML", "CSS"],
      projectOutcome: ["https://stressdetoxmelb.com.au"],
      currentProject: true,
      collapse: true,
    },
  ];
  const volunteering = [
    {
      no: 1,
      title: "Swinburne University of Technology",
      period: "Aug 2019 - Oct 2019",
      logo: "",
      position: "Software Developer",
      responsibility: [
        "Volunteer in extending the previous system of Tutor Preference System (TPS).",
        "Created new functions in spreadsheets include error checking, data checking, and filtering data using Visual Basic Application (VBA) and conducted testing with different devices and scenarios.",
        "Planned, designed, and implemented a new user interface and fully functional workbook to collect data from different spreadsheets and export data based on Swinburne payroll classification.",
      ],
      platforms: ["Visual Basic Application", "Macro", "Microsoft Excel"],
      projectOutcome: [],
      currentProject: false,
      collapse: false,
    },
    {
      no: 2,
      title: "Kasih Project",
      period: "Sept 2020 - Present",
      logo: "",
      position: "Website Developer",
      responsibility: [
        "Develop and design a responsive and customised website by WordPress framework to present images from donators, total donation, updated donations, and donate method",
        "Configure a donation pluginwith PayPal on the website",
      ],
      platforms: ["WordPress", "HTML", "CSS"],
      projectOutcome: ["https://kasihproject.org.au"],
      currentProject: true,
      collapse: true,
    },
  ];

  const displayList = (listName) => {
    if (professional.length != 0 && listName === "Professional") {
      return (
        <div className="wrapper-projects-contents">
          <h2>Professional</h2>
          {professional.map((text, value) => {
            if (professional.length > 1 && text.no != professional.length) {
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
    } else if (volunteering.length != 0 && listName === "Volunteering") {
      return (
        <div className="wrapper-projects-contents">
          <h2>Volunteering</h2>
          {volunteering.map((text, value) => {
            if (volunteering.length > 1 && text.no != volunteering.length) {
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
    }
  };

  const handleDisplay = (widthScreenSize, text, section) => {
    if (widthScreenSize <= 600 && section === "first-section") {
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
    } else if (widthScreenSize > 600 && section === "first-section") {
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
    if (widthScreenSize > 600 && section === "second-section") {
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
                          window.open(`${result}`, "_blank");
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
    } else if (widthScreenSize <= 600 && section === "second-section") {
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
                        window.open(`${result}`, "_blank");
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
          {handleDisplay(widthScreenSize, text, "first-section")}
          {handleDisplay(widthScreenSize, text, "second-section")}
        </TabContainer>
      </>
    );
  };

  return (
    <div className="wrapper-projects">
      <h1>Projects</h1>
      {displayList("Professional")}
      {displayList("Volunteering")}
    </div>
  );
};

export default Projects;
