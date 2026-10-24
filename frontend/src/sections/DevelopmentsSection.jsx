import React, { useState } from "react";
import ArrowIcon from "../components/ArrowIcon.jsx";

const developments = {
  Residential: [
    {
      name: "Emerald",
      location: "Law College Road",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "The Grove",
      location: "Prabhat Road",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Aurelia",
      location: "Koregaon Park",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Verde",
      location: "Baner",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "The Address",
      location: "Model Colony",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Parkside",
      location: "Erandwane",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Willow",
      location: "Aundh",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "The Courtyard",
      location: "Shivajinagar",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    },
  ],
  Commercial: [
    {
      name: "One Central",
      location: "Senapati Bapat Road",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "The Exchange",
      location: "Baner Road",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Westworks",
      location: "Hinjawadi",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Meridian",
      location: "Kalyani Nagar",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Business Bay",
      location: "Yerawada",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "The Foundry",
      location: "Pimpri",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Summit",
      location: "Magarpatta",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Workplace",
      location: "Viman Nagar",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    },
  ],
};

export default function DevelopmentsSection() {
  const [category, setCategory] = useState("Residential");
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = developments[category];
  const activeProject = projects[activeIndex];
  const visibleProjects = [1, 2, 3].map(
    (offset) => projects[(activeIndex + offset) % projects.length],
  );

  function changeCategory(nextCategory) {
    setCategory(nextCategory);
    setActiveIndex(0);
  }

  function changeProject(offset) {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + offset + projects.length) % projects.length,
    );
  }

  return (
    <section className="developments" id="developments">
      <div className="developments-inner">
        <p
          className="eyebrow developments-eyebrow"
          data-scroll-reveal="1"
        >
          Selected developments
        </p>
        <div className="developments-intro" data-scroll-reveal="2">
          <h2>
            Distinctive addresses.
            <br />
            Considered residences.
          </h2>
          <p>
            Explore a portfolio of {category.toLowerCase()} developments in
            some of Pune&apos;s most established neighbourhoods.
          </p>
        </div>

        <div className="development-gallery" data-scroll-reveal="3">
          <article className="featured-development">
            <img src={activeProject.image} alt={activeProject.name} />
            <div className="featured-shade" />
            <div className="featured-caption">
              <div>
                <h3>{activeProject.name}</h3>
                <p>{activeProject.location}</p>
              </div>
              <button
                className="featured-next"
                type="button"
                aria-label="View next development"
                onClick={() => changeProject(1)}
              >
                <ArrowIcon />
              </button>
            </div>
          </article>
          {visibleProjects.map((project, index) => (
            <button
              className="development-thumb"
              key={`${category}-${activeIndex}-${index}`}
              type="button"
              onClick={() => changeProject(index + 1)}
              aria-label={`View ${project.name}, ${project.location}`}
            >
              <img src={project.image} alt="" />
            </button>
          ))}
        </div>

        <div className="developments-controls" data-scroll-reveal="4">
          <div className="development-pagination" aria-label="Gallery controls">
            <button
              className="round-control"
              type="button"
              aria-label="Previous development"
              onClick={() => changeProject(-1)}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              className="round-control"
              type="button"
              aria-label="Next development"
              onClick={() => changeProject(1)}
            >
              <span aria-hidden="true">›</span>
            </button>
            <span className="development-count" aria-live="polite">
              {activeIndex + 1} / {projects.length}
            </span>
          </div>
          <div className="development-categories" aria-label="Development type">
            {Object.keys(developments).map((type) => (
              <button
                className={`category-pill${category === type ? " is-active" : ""}`}
                type="button"
                key={type}
                aria-pressed={category === type}
                onClick={() => changeCategory(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
