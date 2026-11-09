import React, { useState } from "react";
import ArrowIcon from "../../components/ArrowIcon.jsx";

const interests = ["Residences", "Commercial", "Redevelopment", "Other"];

const nextSteps = [
  "We review your inquiry and assign a relationship manager.",
  "You receive a call within one business day.",
  "We arrange a meeting or private site visit at your convenience.",
];

export default function InquiryFormSection() {
  const [interest, setInterest] = useState(interests[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: send the inquiry to the backend once it is available.
    setIsSubmitted(true);
  }

  return (
    <section className="cp-inquiry" id="inquiry">
      <div className="cp-container cp-inquiry-inner">
        <div className="cp-inquiry-intro" data-scroll-reveal="1">
          <p className="eyebrow cp-eyebrow">Inquiry form</p>
          <h2>
            Tell us about
            <br />
            <strong>your vision.</strong>
          </h2>
          <p className="cp-lead">
            A few details help us connect you with the right person from the
            very first call.
          </p>
          <ol className="cp-next-steps">
            {nextSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="contact-form cp-form" data-scroll-reveal="2">
          {isSubmitted ? (
            <div className="cp-form-success" role="status">
              <h3>Thank you.</h3>
              <p>
                Your inquiry has been received. A member of our team will be in
                touch shortly.
              </p>
              <button
                type="button"
                className="button button-dark"
                onClick={() => setIsSubmitted(false)}
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <fieldset className="cp-interest">
                <legend>I&apos;m interested in</legend>
                <div className="development-categories">
                  {interests.map((option) => (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={interest === option}
                      className={interest === option ? "is-active" : ""}
                      onClick={() => setInterest(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="interest" value={interest} />
              </fieldset>

              <div className="cp-fields">
                <label className="contact-field">
                  <span>Name</span>
                  <input type="text" name="name" autoComplete="name" required />
                </label>
                <label className="contact-field">
                  <span>Contact No.</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                  />
                </label>
                <label className="contact-field">
                  <span>Email ID</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                  />
                </label>
                <label className="contact-field">
                  <span>Preferred location</span>
                  <input type="text" name="location" />
                </label>
                <label className="contact-field cp-field-full">
                  <span>Message</span>
                  <textarea name="message" rows="4" />
                </label>
              </div>

              <div className="cp-form-footer">
                <label className="cp-consent">
                  <input type="checkbox" name="consent" required />
                  <span>
                    I agree to be contacted by SCON-HD regarding my inquiry.
                  </span>
                </label>
                <button type="submit" className="button button-dark">
                  Submit inquiry <ArrowIcon />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
