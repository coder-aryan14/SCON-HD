import React, { useState } from "react";
import ArrowIcon from "../../components/ArrowIcon.jsx";

const residences = [
  {
    name: "Emerald",
    location: "Law College Road",
    status: "Ongoing",
    configuration: "3 & 4 BHK",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The Grove",
    location: "Prabhat Road",
    status: "Completed",
    configuration: "3 BHK Premium",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Aurelia",
    location: "Koregaon Park",
    status: "Upcoming",
    configuration: "4 BHK Ultra-luxurious",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Verde",
    location: "Baner",
    status: "Ongoing",
    configuration: "3 BHK Premium",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The Address",
    location: "Model Colony",
    status: "Completed",
    configuration: "3 & 4 BHK",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Parkside",
    location: "Erandwane",
    status: "Upcoming",
    configuration: "3 BHK Premium",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=85",
  },
];

const filters = ["All", "Ongoing", "Completed", "Upcoming"];

export default function ResidencesListSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleResidences = residences.filter(
    (residence) => activeFilter === "All" || residence.status === activeFilter,
  );

  return (
    <section className="residences-list" id="residences-list">
      <div className="residences-container">
        <p className="eyebrow residences-eyebrow" data-scroll-reveal="1">
          Our residences
        </p>
        <div className="residences-split" data-scroll-reveal="2">
          <h2>
            Explore our
            <br />
            <strong>residential developments.</strong>
          </h2>
          <div
            className="development-categories residences-filters"
            role="group"
            aria-label="Filter residences by status"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                className={activeFilter === filter ? "is-active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="residences-grid" data-scroll-reveal="3">
          {visibleResidences.map((residence) => (
            <a
              className="residence-card"
              href="/contact#inquiry"
              key={residence.name}
            >
              <div className="residence-card-image">
                <img
                  src={residence.image}
                  alt={`${residence.name}, ${residence.location}`}
                  loading="lazy"
                />
                <span className="residence-status">{residence.status}</span>
              </div>
              <div className="residence-card-body">
                <div>
                  <h3>{residence.name}</h3>
                  <p>
                    {residence.location} · {residence.configuration}
                  </p>
                </div>
                <span className="residence-card-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
