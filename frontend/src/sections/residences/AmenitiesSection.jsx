import React from "react";

const amenities = [
  "Landscaped podium garden",
  "Temperature-controlled pool",
  "Fully equipped fitness studio",
  "Clubhouse & residents' lounge",
  "Children's play area",
  "Yoga & meditation deck",
  "Multi-tier security",
  "EV-ready parking",
];

export default function AmenitiesSection() {
  return (
    <section className="residences-amenities">
      <div className="residences-container residences-amenities-inner">
        <div className="residences-amenities-media" data-scroll-reveal="1">
          <img
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85"
            alt="Residents' swimming pool"
            loading="lazy"
          />
        </div>

        <div data-scroll-reveal="2">
          <p className="eyebrow residences-eyebrow">Lifestyle &amp; amenities</p>
          <h2>
            Thoughtfully designed for
            <br />
            <strong>everyday living.</strong>
          </h2>
          <p className="residences-lead">
            Amenities that earn their place, designed to be used every day
            rather than admired once.
          </p>
          <ul className="residences-amenity-list">
            {amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
