import React from "react";

const expertise = [
  {
    title: "Feasibility & FSI analysis",
    description: "A clear, honest assessment of what your property can become.",
  },
  {
    title: "Legal & approvals",
    description:
      "End-to-end handling of documentation, permissions and compliance.",
  },
  {
    title: "Design & planning",
    description:
      "Layouts planned around members' needs, with light, space and privacy.",
  },
  {
    title: "Construction & quality",
    description:
      "In-house execution with the same standards as our own developments.",
  },
  {
    title: "Member transition",
    description:
      "Rent, shifting and communication support throughout the build.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="redev-expertise">
      <div className="redev-container redev-expertise-inner">
        <div className="redev-expertise-media" data-scroll-reveal="1">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85"
            alt="Construction in progress on a residential building"
            loading="lazy"
          />
        </div>

        <div data-scroll-reveal="2">
          <p className="eyebrow redev-eyebrow">Our expertise</p>
          <h2>
            Thoughtful
            <br />
            <strong>redevelopment solutions.</strong>
          </h2>
          <p className="redev-lead redev-expertise-lead">
            One accountable partner for every stage, so your society never has
            to coordinate between consultants, contractors and authorities.
          </p>
          <ul className="redev-expertise-list">
            {expertise.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
