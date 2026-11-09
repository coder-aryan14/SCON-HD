import React from "react";
import ArrowIcon from "../../components/ArrowIcon.jsx";

export default function RedevelopmentCtaSection() {
  return (
    <section className="redev-cta" id="redev-cta">
      <img
        className="redev-cta-image"
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=85"
        alt=""
        aria-hidden="true"
      />
      <div className="redev-cta-shade" aria-hidden="true" />
      <div className="redev-container redev-cta-inner" data-scroll-reveal="1">
        <p className="eyebrow redev-cta-eyebrow">Let&apos;s talk</p>
        <h2>
          Let&apos;s transform
          <br />
          <strong>your property.</strong>
        </h2>
        <p className="redev-cta-copy">
          Schedule a no-obligation consultation with our redevelopment team and
          receive a free feasibility assessment for your society.
        </p>
        <div className="redev-cta-actions">
          <a className="button button-light" href="/contact#inquiry">
            Schedule a consultation <ArrowIcon />
          </a>
          <a
            className="button redev-cta-outline"
            href="mailto:hello@scon.com?subject=Discover%20Navotsav"
          >
            Discover Navotsav
          </a>
        </div>
      </div>
    </section>
  );
}
