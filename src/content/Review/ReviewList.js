import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const ReviewList = (props) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('reviews');

  function getReviews() {
    console.log(ref);
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
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
          {reviews.map((review) => {
            return (
              <div key={review.id}>
                <h3>{review.testimonial}</h3>
                <p>{review.fullName}</p>
                <p
                  onClick={() => {
                    window.open(`${review.websiteName}`, '_blank');
                  }}
                >
                  {review.websiteName}
                </p>
              </div>
            );
          })}
        </>
      );
    }
  };
  return <div>{displayReviews()}</div>;
};

export default ReviewList;
