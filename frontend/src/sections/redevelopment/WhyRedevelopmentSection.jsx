import React from "react";

const reasons = [
  {
    title: "Safer structures",
    description:
      "Replace ageing buildings with modern, earthquake-resistant construction built to current codes.",
  },
  {
    title: "Larger homes",
    description:
      "Additional FSI allows members to move into more spacious, better-planned residences.",
  },
  {
    title: "Modern amenities",
    description:
      "Lifts, parking, security, clubhouses and green spaces that older buildings simply cannot offer.",
  },
  {
    title: "Greater value",
    description:
      "A renewed address in an established neighbourhood significantly increases property value.",
  },
];

export default function WhyRedevelopmentSection() {
  return (
    <section className="redev-why">
      <div className="redev-container">
        <p className="eyebrow redev-eyebrow" data-scroll-reveal="1">
          Why redevelopment
        </p>
        <div className="redev-split" data-scroll-reveal="2">
          <h2>
            Unlocking
            <br />
            <strong>new possibilities.</strong>
          </h2>
          <p className="redev-lead">
            Many of Pune&apos;s most loved buildings are reaching the end of
            their life. Redevelopment turns that challenge into an opportunity
            for every resident.
          </p>
        </div>

        <div className="redev-reasons">
          {reasons.map((reason, index) => (
            <article
              className="redev-reason"
              key={reason.title}
              data-scroll-reveal={String(index + 1)}
            >
              <span className="redev-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
