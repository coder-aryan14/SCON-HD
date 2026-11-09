import React from "react";

const missionPoints = [
  "Choose locations that hold their value for generations.",
  "Build with honest materials and meticulous execution.",
  "Stay personally accountable from first brick to handover.",
];

export default function PurposeSection() {
  return (
    <section className="purpose" id="purpose">
      <div className="purpose-backdrop" aria-hidden="true" />
      <div className="purpose-inner">
        <p className="eyebrow purpose-eyebrow" data-scroll-reveal="1">
          Vision &amp; mission
        </p>
        <div className="purpose-rule" data-scroll-reveal="1" />
        <div className="purpose-intro" data-scroll-reveal="2">
          <h2>
            Our <strong>purpose.</strong>
          </h2>
          <p>
            Every decision we make is guided by what a home will mean to the
            people who live in it, not just today, but decades from now.
          </p>
        </div>

        <div className="purpose-cards">
          <article className="purpose-card" data-scroll-reveal="2">
            <span className="purpose-card-label">01 — Vision</span>
            <h3>
              To be Pune&apos;s most trusted name in considered living, where
              every address reflects lasting value.
            </h3>
          </article>
          <article className="purpose-card" data-scroll-reveal="3">
            <span className="purpose-card-label">02 — Mission</span>
            <h3>To create homes and places that are built to be lived in.</h3>
            <ul>
              {missionPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
