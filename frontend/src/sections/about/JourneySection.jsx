import React from "react";

const milestones = [
  {
    year: "1989",
    title: "The foundation",
    description:
      "SCON is established in Pune as a hands-on construction practice.",
  },
  {
    year: "1997",
    title: "First landmark residence",
    description:
      "Our first premium residential development opens in Erandwane.",
  },
  {
    year: "2005",
    title: "Into commercial",
    description: "SCON expands into workplaces and mixed-use developments.",
  },
  {
    year: "2012",
    title: "25 developments",
    description:
      "A milestone of addresses across the city's finest neighbourhoods.",
  },
  {
    year: "2019",
    title: "Three decades",
    description:
      "30 years of building, with thousands of families in trusted hands.",
  },
  {
    year: "2023",
    title: "SCON-HD",
    description:
      "Partnership with Harsh Deshmukh Developers to shape the next chapter.",
  },
  {
    year: "2026",
    title: "Navotsav",
    description:
      "Our redevelopment initiative brings new life to established homes.",
  },
];

export default function JourneySection() {
  return (
    <section className="journey" id="journey">
      <div className="journey-inner">
        <p className="eyebrow journey-eyebrow" data-scroll-reveal="1">
          Our journey
        </p>
        <div className="journey-intro" data-scroll-reveal="2">
          <h2>
            Milestones <strong>&amp; growth.</strong>
          </h2>
          <p>
            Thirty-seven years of steady, considered progress, one address at a
            time.
          </p>
        </div>
      </div>

      <ol
        className="journey-track"
        data-scroll-reveal="3"
        tabIndex={0}
        aria-label="Company milestones"
      >
        {milestones.map((milestone) => (
          <li className="journey-item" key={milestone.year}>
            <span className="journey-year">{milestone.year}</span>
            <span className="journey-dot" aria-hidden="true" />
            <h3>{milestone.title}</h3>
            <p>{milestone.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
