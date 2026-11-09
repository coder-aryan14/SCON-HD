import React from "react";
import SiteHeader from "../../components/SiteHeader.jsx";

export default function RedevelopmentHeroSection() {
  return (
    <section className="redev-hero" id="home">
      <img
        className="redev-hero-image"
        src="/images/redevelopment-background.png"
        alt=""
        aria-hidden="true"
      />
      <div className="redev-hero-shade" aria-hidden="true" />
      <SiteHeader current="redevelopment" />

      <div className="redev-hero-inner">
        <p className="eyebrow redev-hero-eyebrow" data-scroll-reveal="1">
          Redevelopment · Navotsav
        </p>
        <h1 data-scroll-reveal="2">
          Reimagining spaces.
          <br />
          <em>Rebuilding possibilities.</em>
        </h1>
        <div className="redev-hero-bottom" data-scroll-reveal="3">
          <p>
            For housing societies and property owners ready for a new chapter,
            we bring the experience to rebuild with care and the transparency to
            do it with confidence.
          </p>
          <a href="#redev-cta">
            Talk to our team <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
