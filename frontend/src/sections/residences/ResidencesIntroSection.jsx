import React from "react";

const introFacts = [
  { value: "12", label: "Residential developments" },
  { value: "6", label: "Established neighbourhoods" },
  { value: "3–4", label: "BHK residences" },
];

export default function ResidencesIntroSection() {
  return (
    <section className="residences-intro">
      <div className="residences-container">
        <p className="eyebrow residences-eyebrow" data-scroll-reveal="1">
          Introduction
        </p>
        <div className="residences-rule" data-scroll-reveal="1" />
        <div className="residences-split" data-scroll-reveal="2">
          <h2>
            Spaces designed
            <br />
            <strong>around you.</strong>
          </h2>
          <div className="residences-copy">
            <p>
              A SCON residence begins with the people who will live in it. Light,
              proportion and privacy are planned long before the first wall is
              built, so every room feels natural from the day you move in.
            </p>
            <p>
              From intimate three-bedroom homes to expansive ultra-luxurious
              residences, each development balances quiet elegance with the
              everyday ease of living well.
            </p>
          </div>
        </div>
        <dl className="residences-facts" data-scroll-reveal="3">
          {introFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.value}</dt>
              <dd>{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
