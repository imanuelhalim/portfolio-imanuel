import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import firebase from '../firebase';
// import { v4 as uuidv4 } from 'uuid';

const ReviewForm = (props, { onClick }) => {
  const [fullName, setFullName] = useState('');
  const [errorFullName, setErrorFullName] = useState('');
  const [websiteAddress, setWebsiteAddress] = useState('');
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

    if (testimonial === '') {
      setErrorTestimonial('Testimonial cannot be blank');
    }

    if (fullName !== '' && websiteAddress !== '' && testimonial !== '') {
      setIsFinished(true);
      database
        .doc()
        .set(newReview)
        .then(() => {
          setFullName('');
          setErrorFullName('');
          setWebsiteAddress('');
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
