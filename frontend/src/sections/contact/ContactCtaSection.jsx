import React from "react";
import ArrowIcon from "../../components/ArrowIcon.jsx";

export default function ContactCtaSection() {
  return (
    <section className="cp-cta">
      <img
        className="cp-cta-image"
        src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2000&q=85"
        alt=""
        aria-hidden="true"
      />
      <div className="cp-cta-shade" aria-hidden="true" />
      <div className="cp-container cp-cta-inner" data-scroll-reveal="1">
        <p className="eyebrow cp-cta-eyebrow">Begin today</p>
        <h2>
          Your next chapter
          <br />
          <strong>starts here.</strong>
        </h2>
        <p className="cp-cta-copy">
          A considered home, a lasting investment, a renewed address. Whatever
          you are looking for, we would love to help you find it.
        </p>
        <div className="cp-cta-actions">
          <a className="button button-light" href="tel:+912025441122">
            Call 020 2544 1122 <ArrowIcon />
          </a>
          <a className="button cp-cta-outline" href="/residences">
            Explore residences
          </a>
        </div>
      </div>
    </section>
  );
}
