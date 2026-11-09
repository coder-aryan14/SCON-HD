import React from "react";

const designPrinciples = [
  {
    title: "Light & air",
    description:
      "Orientation, ceiling heights and openings planned for natural light and cross-ventilation.",
  },
  {
    title: "Honest materials",
    description:
      "Stone, timber and glass chosen for how they age, not just how they look on day one.",
  },
  {
    title: "Thoughtful layouts",
    description:
      "Efficient plans with clear zoning between living, private and service spaces.",
  },
];

export default function DesignSection() {
  return (
    <section className="residences-design">
      <div className="residences-container">
        <p className="eyebrow residences-eyebrow" data-scroll-reveal="1">
          Design &amp; architecture
        </p>
        <div className="residences-split" data-scroll-reveal="2">
          <h2>
            Where form
            <br />
            <strong>meets function.</strong>
          </h2>
          <p className="residences-lead">
            Our architecture is restrained by intent: clean lines, generous
            proportions and details that reveal themselves over time.
          </p>
        </div>

        <div className="residences-design-image" data-scroll-reveal="3">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85"
            alt="Contemporary residential facade"
            loading="lazy"
          />
        </div>

        <div className="residences-principles">
          {designPrinciples.map((principle, index) => (
            <article
              key={principle.title}
              data-scroll-reveal={String(index + 1)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
