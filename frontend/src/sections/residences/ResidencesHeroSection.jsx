import React from "react";
import SiteHeader from "../../components/SiteHeader.jsx";

export default function ResidencesHeroSection() {
  return (
    <section className="residences-hero" id="home">
      <img
        className="residences-hero-image"
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85"
        alt=""
        aria-hidden="true"
      />
      <div className="residences-hero-shade" aria-hidden="true" />
      <SiteHeader current="residences" />

      <div className="residences-hero-inner">
        <p className="eyebrow residences-hero-eyebrow" data-scroll-reveal="1">
          Residences
        </p>
        <h1 data-scroll-reveal="2">
          Redefining the
          <br />
          art of <em>living.</em>
        </h1>
        <div className="residences-hero-bottom" data-scroll-reveal="3">
          <p>
            Considered residences in Pune&apos;s most established
            neighbourhoods, built for the way you live.
          </p>
          <a href="#residences-list">
            Explore residences <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
