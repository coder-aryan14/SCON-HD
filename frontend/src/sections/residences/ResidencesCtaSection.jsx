import React from "react";
import ArrowIcon from "../../components/ArrowIcon.jsx";

export default function ResidencesCtaSection() {
  return (
    <section className="residences-cta">
      <img
        className="residences-cta-image"
        src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2000&q=85"
        alt=""
        aria-hidden="true"
      />
      <div className="residences-cta-shade" aria-hidden="true" />
      <div className="residences-container residences-cta-inner" data-scroll-reveal="1">
        <p className="eyebrow residences-cta-eyebrow">Find your place</p>
        <h2>
          Find your place
          <br />
          <strong>with SCON-HD.</strong>
        </h2>
        <p className="residences-cta-copy">
          Book a private site visit or speak with our team to find the residence
          that fits the way you live.
        </p>
        <div className="residences-cta-actions">
          <a className="button button-light" href="/contact#inquiry">
            Book a site visit <ArrowIcon />
          </a>
          <a className="button residences-cta-outline" href="/contact#inquiry">
            Request a brochure
          </a>
        </div>
      </div>
    </section>
  );
}
