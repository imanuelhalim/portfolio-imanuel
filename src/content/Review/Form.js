import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Form = (props, { onClick }) => {
  const [fullName, setFullName] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [isFormDisplay, setFormDisplay] = useState(true);

  // const cancelFormDisplay = () => {
  //   console.log(props.isFormSet);
  //   props.isFormSet = { setForm: false };
  //   console.log(props.isFormSet);
  // };

  // const postRequest = () = {}

  const displayForm = () => {
    if (props.isFormSet) {
      return (
        <>
          <h1>Review Form</h1>
          <section>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              required
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
          </section>
          <section>
            <label>Website Name</label>
            <input
              type="text"
              placeholder="Enter your website"
              required
              value={websiteName}
              onChange={(event) => {
                setWebsiteName(event.target.value);
              }}
            />
          </section>
          <section>
            <label>Testimonial</label>
            <input
              type="text"
              placeholder="Enter your testimonial"
              required
              value={testimonial}
              onChange={(event) => {
                setTestimonial(event.target.value);
              }}
            />
          </section>
          <Button className="button" onClick={() => {}}>
            Submit Review
          </Button>
        </>
      );
    }
  };

  return <div>{displayForm()}</div>;
};

export default Form;
