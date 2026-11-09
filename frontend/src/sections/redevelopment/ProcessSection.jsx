import React from "react";

const steps = [
  {
    title: "Consultation",
    description:
      "We meet your committee and members to understand expectations and concerns.",
  },
  {
    title: "Feasibility study",
    description:
      "Site survey, title review and FSI potential, shared in a clear report.",
  },
  {
    title: "Proposal & agreement",
    description:
      "A transparent offer covering area, amenities, rent and timelines.",
  },
  {
    title: "Approvals",
    description:
      "We secure all statutory permissions while members are kept informed.",
  },
  {
    title: "Construction",
    description:
      "Quality-controlled execution with regular progress updates to the society.",
  },
  {
    title: "Handover",
    description:
      "Members return to new homes, with documentation and support complete.",
  },
];

export default function ProcessSection() {
  return (
    <section className="redev-process">
      <div className="redev-container">
        <p className="eyebrow redev-process-eyebrow" data-scroll-reveal="1">
          Our process
        </p>
        <div className="redev-split" data-scroll-reveal="2">
          <h2>
            From consultation
            <br />
            <strong>to transformation.</strong>
          </h2>
          <p className="redev-process-lead">
            Six clear stages, each with defined responsibilities and
            milestones, so your society always knows what comes next.
          </p>
        </div>

        <ol className="redev-steps">
          {steps.map((step, index) => (
            <li
              key={step.title}
              data-scroll-reveal={String((index % 3) + 1)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
