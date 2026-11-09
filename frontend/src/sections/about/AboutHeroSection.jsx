import React from "react";
import SiteHeader from "../../components/SiteHeader.jsx";

const heroStats = [
  { value: "37", label: "Years of building trust since 1989" },
  { value: "40+", label: "Residential and commercial developments" },
  { value: "2,500+", label: "Families who call a SCON address home" },
];

export default function AboutHeroSection() {
  return (
    <section className="about-hero" id="home">
      <img
        className="about-hero-image"
        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=85"
        alt=""
        aria-hidden="true"
      />
      <div className="about-hero-shade" aria-hidden="true" />
      <SiteHeader current="about" />

      <div className="about-hero-inner">
        <p className="eyebrow about-hero-eyebrow" data-scroll-reveal="1">
          About SCON-HD
        </p>
        <h1 data-scroll-reveal="2">
          Beyond <em>structures.</em>
        </h1>
        <div className="about-hero-bottom" data-scroll-reveal="3">
          <p className="about-hero-copy">
            For over three decades, we have shaped more than buildings. We have
            shaped neighbourhoods, relationships and the quiet confidence of
            coming home.
          </p>
          <div className="about-hero-stats">
            {heroStats.map((stat) => (
              <article className="about-hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
