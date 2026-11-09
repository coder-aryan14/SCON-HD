import React from "react";
import ArrowIcon from "../../components/ArrowIcon.jsx";

const storyHighlights = [
  { label: "Established", value: "1989, Pune" },
  { label: "Approach", value: "Hands-on, in-house construction" },
  { label: "Focus", value: "Pune's most established neighbourhoods" },
];

export default function StorySection() {
  return (
    <section className="story" id="story">
      <div className="story-inner">
        <div className="story-media" data-scroll-reveal="1">
          <img
            className="story-image-main"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
            alt="A SCON residence at dusk"
          />
          <img
            className="story-image-inset"
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=85"
            alt="Architectural drawings on a desk"
          />
          <div className="story-badge" aria-hidden="true">
            <span>Since</span>
            <strong>1989</strong>
          </div>
        </div>

        <div className="story-content" data-scroll-reveal="2">
          <p className="eyebrow story-eyebrow">Our story</p>
          <div className="story-rule" />
          <h2>
            Who <strong>we are.</strong>
          </h2>
          <div className="story-copy">
            <p>
              SCON began in 1989 with a simple conviction: a home should be
              built with the same care a family puts into living in it. What
              started as a small, hands-on construction practice in Pune has
              grown into a developer trusted across the city.
            </p>
            <p>
              Today, together with Harsh Deshmukh Developers, SCON-HD brings
              decades of construction experience to residences and workplaces
              in some of Pune&apos;s most established neighbourhoods, always
              led by location, quality and an uncompromising commitment.
            </p>
          </div>
          <dl className="story-highlights">
            {storyHighlights.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <a className="button button-dark" href="/#developments">
            Our developments <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
