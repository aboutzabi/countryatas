import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const inputformData = Object.fromEntries(formData.entries());
  };
  return (
    <section className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="form-wrapper">
          <form action={handleFormSubmit}>
            <input
              type="text"
              autoComplete="false"
              required
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              autoComplete="false"
              required
              placeholder="Email"
              name="email"
            />
            <textarea
              name="message"
              id=""
              placeholder="Enter a message"
              required
              autoComplete="false "
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
