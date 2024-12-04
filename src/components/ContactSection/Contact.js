import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contHeading">
        <h2>Contact Me</h2>
      </div>
      <div className="contform">
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="form-control"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="form-control"
            required
          />
          <textarea
            placeholder="Your Message"
            className="form-control"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
