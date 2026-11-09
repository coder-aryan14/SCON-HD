import React from "react";
import SiteHeader from "../../components/SiteHeader.jsx";

export default function ContactHeroSection() {
  return (
    <section className="cp-hero" id="home">
      <img
        className="cp-hero-image"
        src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=85"
        alt=""
        aria-hidden="true"
      />
      <div className="cp-hero-shade" aria-hidden="true" />
      <SiteHeader current="contact" />

      <div className="cp-hero-inner">
        <p className="eyebrow cp-hero-eyebrow" data-scroll-reveal="1">
          Contact
        </p>
        <h1 data-scroll-reveal="2">
          Let&apos;s start a <em>conversation.</em>
        </h1>
        <div className="cp-hero-bottom" data-scroll-reveal="3">
          <p>
            Whether you are looking for a home, an investment or a redevelopment
            partner, the right address begins with the right conversation.
          </p>
          <a href="#inquiry">
            Send an inquiry <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
