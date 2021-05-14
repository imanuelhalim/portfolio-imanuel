import React from 'react';
import Form from './ReviewForm';
import ReviewList from './ReviewList';
import { Button } from 'react-bootstrap';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setReview: true,
      setForm: false,
      setLeaveReviewButton: true,
      setCancelReviewForm: false,
    };
  }

  //   componentDidMount() {
  //     this.setState({set});
  //   }

  displayContent() {
    if (this.state.setReview || this.state.setCancelReviewForm) {
      return (
        <>
          <ReviewList
            className="wrapper-review-lis"
            isReviewSet={this.state.setReview}
          />
          <Button
            className="button"
            onClick={() => {
              this.handleDisplay();
            }}
          >
            Leave a Review
          </Button>
        </>
      );
    }
    if (this.state.setForm) {
      return (
        <>
          <h1>Review Form</h1>
          <section className="wrapper-review-form">
            <Form isFormSet={this.state.setForm} />
            <Button
              onClick={() => {
                this.handleCancelFormDisplay();
              }}
            >
              Review List
            </Button>
          </section>
        </>
      );
    }
  }

  handleDisplay() {
    this.setState({
      setReview: false,
      setForm: true,
      setLeaveReviewButton: false,
      setCancelReviewForm: false,
    });
  }

  handleCancelFormDisplay() {
    this.setState({
      setReview: true,
      setForm: false,
      setLeaveReviewButton: true,
      setCancelReviewForm: true,
    });
  }

  render() {
    return <div className="wrapper-about-reviews">{this.displayContent()}</div>;
  }
}
