import React from "react";

const values = [
  {
    title: "Integrity",
    description:
      "Transparent dealings and honest timelines. We say what we mean and build what we promise.",
  },
  {
    title: "Quality",
    description:
      "From structure to finishes, every material and detail is chosen to stand the test of time.",
  },
  {
    title: "Location",
    description:
      "We build only where we would want to live, in neighbourhoods with character and lasting value.",
  },
  {
    title: "Craftsmanship",
    description:
      "A hands-on approach to construction, with experienced teams on site at every stage.",
  },
  {
    title: "Commitment",
    description:
      "A personal, responsible relationship with every family, long after the keys are handed over.",
  },
  {
    title: "Belonging",
    description:
      "Homes designed around community, light and space, places that feel like yours from day one.",
  },
];

export default function ValuesSection() {
  return (
    <section className="values" id="values">
      <div className="values-inner">
        <p className="eyebrow values-eyebrow" data-scroll-reveal="1">
          Our values
        </p>
        <div className="values-intro" data-scroll-reveal="2">
          <h2>
            What <strong>defines us.</strong>
          </h2>
          <p>
            Six principles that have quietly shaped every SCON development for
            more than three decades.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <article
              className="value-card"
              key={value.title}
              data-scroll-reveal={String((index % 3) + 1)}
            >
              <span className="value-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
