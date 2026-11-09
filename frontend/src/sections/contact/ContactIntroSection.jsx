import React from "react";

const promises = [
  { value: "24 hrs", label: "Typical response time" },
  { value: "1:1", label: "Dedicated relationship manager" },
  { value: "7 days", label: "Private site visits by appointment" },
];

export default function ContactIntroSection() {
  return (
    <section className="cp-intro">
      <div className="cp-container">
        <p className="eyebrow cp-eyebrow" data-scroll-reveal="1">
          Introduction
        </p>
        <div className="cp-rule" data-scroll-reveal="1" />
        <div className="cp-split" data-scroll-reveal="2">
          <h2>
            We&apos;re here
            <br />
            <strong>to connect.</strong>
          </h2>
          <div className="cp-copy">
            <p>
              Every SCON relationship begins with listening. Tell us what you
              are looking for and a member of our team will personally guide
              you, from the first question to the final handover.
            </p>
            <p>
              Reach us by phone, email or the form below, or visit our office in
              Erandwane. We look forward to hearing from you.
            </p>
          </div>
        </div>
        <dl className="cp-facts" data-scroll-reveal="3">
          {promises.map((promise) => (
            <div key={promise.label}>
              <dt>{promise.value}</dt>
              <dd>{promise.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
