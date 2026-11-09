import React from "react";

const commitments = [
  {
    title: "Transparent agreements",
    description:
      "Every term, area and timeline documented clearly and shared with all members.",
  },
  {
    title: "Timely possession",
    description:
      "Realistic schedules, committed in writing and tracked openly with the committee.",
  },
  {
    title: "Uncompromised quality",
    description:
      "The same materials and specifications we use in our own premium residences.",
  },
  {
    title: "A single point of contact",
    description:
      "A dedicated relationship manager for your society, from day one to handover.",
  },
];

export default function CommitmentsSection() {
  return (
    <section className="redev-commitments">
      <div className="redev-commitments-backdrop" aria-hidden="true" />
      <div className="redev-container redev-commitments-inner">
        <p className="eyebrow redev-commitments-eyebrow" data-scroll-reveal="1">
          Our commitments
        </p>
        <div className="redev-commitments-rule" data-scroll-reveal="1" />
        <div className="redev-split" data-scroll-reveal="2">
          <h2>
            Built on trust
            <br />
            <strong>and transparency.</strong>
          </h2>
          <p className="redev-commitments-lead">
            Redevelopment asks families to place their homes in our hands. These
            are the promises we keep in return.
          </p>
        </div>

        <div className="redev-commitment-cards">
          {commitments.map((commitment, index) => (
            <article
              className="redev-commitment-card"
              key={commitment.title}
              data-scroll-reveal={String((index % 2) + 1)}
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="m4.5 10.5 3.5 3.5 7.5-8" />
              </svg>
              <h3>{commitment.title}</h3>
              <p>{commitment.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
