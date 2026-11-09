import React from "react";
import ArrowIcon from "../../components/ArrowIcon.jsx";

export default function FinalCtaSection() {
  return (
    <section className="final-cta" id="build-together">
      <img
        className="final-cta-image"
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
        alt=""
        aria-hidden="true"
      />
      <div className="final-cta-shade" aria-hidden="true" />
      <div className="final-cta-inner" data-scroll-reveal="1">
        <p className="eyebrow final-cta-eyebrow">Let&apos;s build together</p>
        <h2>
          Your next chapter deserves
          <br />
          <strong>a trusted foundation.</strong>
        </h2>
        <p className="final-cta-copy">
          Whether you are looking for a new home, an investment or a partner for
          redevelopment, our team would love to hear from you.
        </p>
        <div className="final-cta-actions">
          <a className="button button-light" href="/contact#inquiry">
            Start a conversation <ArrowIcon />
          </a>
          <a className="button final-cta-outline" href="/residences">
            Explore residences
          </a>
        </div>
      </div>
    </section>
  );
}
