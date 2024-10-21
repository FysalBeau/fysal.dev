import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-background" />

      <div className="contact-info">
        <span className="comment">/*</span>
        <br></br>
        <br></br>
        <span className="info-header">Get in Touch</span>
        <br></br>
        <br></br>
        <span className="info-text">I’m open to freelance opportunities!</span>
        <br></br>
        <br></br>
        <span className="comment">*/</span>
      </div>

      <div className="contact-form">
        <form
          action="https://formsubmit.co/2a4901365e6e19b9d2c7592e23a787f0"
          method="POST"
        >
          {/* Honeypot */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Your Name
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="phone">
              Phone No.
            </label>
            <input
              className="form-input"
              type="tel"
              id="phone"
              name="phone"
              required
            />
          </div>

          <div className="form-field email-field">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="form-field message-field">
            <label className="form-label" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="form-textarea"
              id="message"
              name="comments, questions"
              rows="8"
              required
            />
          </div>

          <div className="submit-button">
            <button className="submit-text" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
