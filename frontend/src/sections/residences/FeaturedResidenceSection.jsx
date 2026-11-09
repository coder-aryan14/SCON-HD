import React from "react";
import ArrowIcon from "../../components/ArrowIcon.jsx";

const featuredSpecs = [
  { label: "Location", value: "Law College Road, Pune" },
  { label: "Configuration", value: "3 & 4 BHK residences" },
  { label: "Carpet area", value: "1,850 – 2,600 sq. ft." },
  { label: "Status", value: "Ongoing · Possession 2028" },
];

export default function FeaturedResidenceSection() {
  return (
    <section className="featured-residence">
      <div className="residences-container featured-residence-inner">
        <div className="featured-residence-media" data-scroll-reveal="1">
          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
            alt="Emerald living room"
          />
        </div>

        <div className="featured-residence-content" data-scroll-reveal="2">
          <p className="eyebrow residences-eyebrow">Featured residence</p>
          <span className="featured-residence-name">Emerald</span>
          <h2>
            A new perspective on
            <br />
            <strong>modern living.</strong>
          </h2>
          <p className="featured-residence-copy">
            Set amid the green calm of Law College Road, Emerald offers just
            two residences per floor, wide balconies and uninterrupted views of
            the hills.
          </p>
          <dl className="residences-specs">
            {featuredSpecs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
          <a className="button button-dark" href="/contact#inquiry">
            Enquire now <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
