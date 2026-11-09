import React from "react";

const introFacts = [
  { value: "37", label: "Years of construction experience" },
  { value: "15+", label: "Societies redeveloped" },
  { value: "1,000+", label: "Families welcomed home" },
];

export default function RedevelopmentIntroSection() {
  return (
    <section className="redev-intro">
      <div className="redev-container">
        <p className="eyebrow redev-eyebrow" data-scroll-reveal="1">
          Introduction
        </p>
        <div className="redev-rule" data-scroll-reveal="1" />
        <div className="redev-split" data-scroll-reveal="2">
          <h2>
            A new beginning for
            <br />
            <strong>existing spaces.</strong>
          </h2>
          <div className="redev-copy">
            <p>
              Redevelopment is more than rebuilding a structure. It is about
              preserving a sense of belonging while creating a home that meets
              the aspirations of tomorrow.
            </p>
            <p>
              Through Navotsav, our redevelopment initiative with IKON and Harsh
              Deshmukh Developers, we guide societies and owners through every
              step, from the first conversation to the day new keys are handed
              over.
            </p>
          </div>
        </div>
        <dl className="redev-facts" data-scroll-reveal="3">
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
