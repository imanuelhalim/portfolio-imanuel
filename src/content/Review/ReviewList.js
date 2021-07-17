import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import firebase from '../firebase';

const ReviewList = (props) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const database = firebase.firestore().collection('reviews');

  function getReviews() {
    setLoading(true);
    database.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setReviews(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getReviews();
  }, []);

  const displayReviews = () => {
    if (props.isReviewSet) {
      return (
        <>
          <h1>What did they say?</h1>
          <Carousel style={{ padding: '50px' }}>
            {reviews.map((review) => {
              if (review.isPublished) {
                return (
                  <Carousel.Item key={review.id}>
                    <section
                      className="review-list"
                      style={{ marginLeft: '100px', marginRight: '100px' }}
                    >
                      <p className="review-testimonial">
                        "{review.testimonial}"
                      </p>
                      <p className="review-full-name">{review.fullName}</p>
                      <p
                        className="review-website-add"
                        onClick={() => {
                          window.open(`${review.websiteAddress}`, '_blank');
                        }}
                      >
                        <button
                          className="go-to-site-button"
                          onClick={() => {
                            window.open(review.websiteAddress, '_blank');
                          }}
                        >
                          Go to Site
                        </button>
                      </p>
                    </section>
                  </Carousel.Item>
                );
              }
            })}
          </Carousel>
        </>
      );
    }
  };
  return <div>{displayReviews()}</div>;
};

export default ReviewList;
