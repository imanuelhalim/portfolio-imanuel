import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap';
import firebase from '../firebase';

const ReviewForm = (props, { onClick }) => {
  const [fullName, setFullName] = useState('');
  const [errorFullName, setErrorFullName] = useState('');
  const [websiteAddress, setWebsiteAddress] = useState('');
  const [businessType, setBusinessType] = useState('Please select');
  const [inputBusinessType, setInputBusinessType] = useState('');
  const [errorBusinessCategory, setErrorBusinessCategory] = useState('');
  const [errorWebsiteAddress, setErrorWebsiteAddress] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [errorTestimonial, setErrorTestimonial] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const leftColSize = 3;
  const rightColSize = 9;

  const database = firebase.firestore().collection('reviews');

  useEffect(() => {
    setTimeout(() => {
      setIsFinished(false);
    }, 5000);
  }, [isFinished]);

  function addAReview(newReview) {
    if (fullName === '') {
      setErrorFullName('Please enter your full name');
    }

    if (websiteAddress === '') {
      setErrorWebsiteAddress('Please enter the website address');
    }

    if (businessType === 'Please select') {
      setErrorBusinessCategory('Please select business type');
    }

    if (businessType === 'Other') {
      if (inputBusinessType === '') {
        setErrorBusinessCategory('Please select business type');
      }
    }

    if (testimonial === '') {
      setErrorTestimonial('Testimonial cannot be blank');
    }

    if (
      fullName !== '' &&
      websiteAddress !== '' &&
      businessType !== 'Please Select' &&
      testimonial !== ''
    ) {
      setIsFinished(true);
      database
        .doc()
        .set(newReview)
        .then(() => {
          setFullName('');
          setErrorFullName('');
          setWebsiteAddress('');
          setBusinessType('Please select');
          setInputBusinessType('');
          setErrorWebsiteAddress('');
          setTestimonial('');
          setErrorTestimonial('');
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  const displayError = (errorForm) => {
    return (
      <Row
        style={{
          fontSize: '16px',
          color: 'red',
          marginTop: '-20px',
          marginDown: '-50px',
        }}
      >
        {errorForm}
      </Row>
    );
  };

  const selectList = (evt) => {
    setBusinessType(evt);
  };

  const displayUserInput = () => {
    if (businessType === 'Other') {
      return (
        <Form.Control
          type="text"
          placeholder="Enter business type"
          required
          value={inputBusinessType}
          onChange={(event) => {
            setInputBusinessType(event.target.value);
          }}
        />
      );
    }
  };

  const displayFormElement = () => {
    if (isFinished) {
      return (
        <div>
          Thank you so much for taking the time to leave me this review.
        </div>
      );
    }
    if (!isFinished) {
      return (
        <>
          <Row className="review-form-row">
            <Col xs={leftColSize} md={leftColSize}>
              <Form.Label>Full Name</Form.Label>
            </Col>
            <Col xs={rightColSize} md={rightColSize}>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                required
                value={fullName}
                onChange={(event) => {
                  setFullName(event.target.value);
                }}
              />
              {displayError(errorFullName)}
            </Col>
          </Row>
          <Row className="review-form-row">
            <Col xs={leftColSize} md={leftColSize}>
              <Form.Label>Website Address</Form.Label>
            </Col>
            <Col xs={rightColSize} md={rightColSize}>
              <Form.Control
                type="text"
                placeholder="Enter website address e.g. https://imanuelhalim.com.au/"
                required
                value={websiteAddress}
                onChange={(event) => {
                  setWebsiteAddress(event.target.value);
                }}
              />
              {displayError(errorWebsiteAddress)}
            </Col>
          </Row>
          <Row className="review-form-row">
            <Col xs={leftColSize} md={leftColSize}>
              <Form.Label>Business Type</Form.Label>
            </Col>
            <Col xs={rightColSize} md={rightColSize}>
              <Dropdown
                onSelect={(evt) => {
                  selectList(evt);
                }}
              >
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  {businessType}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Art, Culture, Entertainment">
                    Art, Culture, Entertainment
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Auto Sales and Service">
                    Auto Sales and Service
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Education">Education</Dropdown.Item>
                  <Dropdown.Item eventKey="Real Estate">
                    Real Estate
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Restaurant">
                    Restaurant
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Online Shopping">
                    Online Shopping
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Transportation">
                    Transportation
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Wedding, Events &amp; Meetings">
                    Wedding, Events &amp; Meetings
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="News, Media">
                    News, Media
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {displayUserInput()}
              {displayError(errorBusinessCategory)}
            </Col>
          </Row>
          <Row className="review-form-row">
            <Col xs={leftColSize} md={leftColSize}>
              <Form.Label>Testimonial</Form.Label>
            </Col>
            <Col xs={rightColSize} md={rightColSize}>
              <Form.Control
                as="textarea"
                placeholder="Enter testimonial"
                required
                value={testimonial}
                onChange={(event) => {
                  setTestimonial(event.target.value);
                }}
                rows={5}
              />
              {displayError(errorTestimonial)}
            </Col>
          </Row>
          <Button
            className="button"
            onClick={() => {
              addAReview({
                fullName,
                websiteAddress,
                businessType,
                inputBusinessType,
                testimonial,
                isPublished,
              });
            }}
          >
            Submit Review
          </Button>
        </>
      );
    }
  };

  const displayForm = () => {
    if (props.isFormSet) {
      return (
        <>
          <Form className="review-form">{displayFormElement()}</Form>
        </>
      );
    }
  };

  return <div>{displayForm()}</div>;
};

export default ReviewForm;
