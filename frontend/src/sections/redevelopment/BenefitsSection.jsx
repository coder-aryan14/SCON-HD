import React, { useState } from "react";

const stakeholderBenefits = {
  "Society members": [
    "A larger, modern home at no construction cost",
    "Monthly rent and shifting support during the build",
    "Corpus fund for long-term maintenance",
    "Lifts, parking and contemporary amenities",
  ],
  "Housing societies": [
    "A single, accountable development partner",
    "Transparent agreements approved by the general body",
    "Regular progress reporting to the committee",
    "Reduced maintenance burden in a new structure",
  ],
  "Property owners": [
    "Unlock the full potential of your land",
    "Joint development or area-sharing options",
    "Legal and approval processes handled end to end",
    "Lasting value in an established neighbourhood",
  ],
};

export default function BenefitsSection() {
  const stakeholders = Object.keys(stakeholderBenefits);
  const [activeStakeholder, setActiveStakeholder] = useState(stakeholders[0]);

  return (
    <section className="redev-benefits">
      <div className="redev-container">
        <p className="eyebrow redev-eyebrow" data-scroll-reveal="1">
          Benefits
        </p>
        <div className="redev-split" data-scroll-reveal="2">
          <h2>
            A better tomorrow for
            <br />
            <strong>every stakeholder.</strong>
          </h2>
          <div
            className="development-categories redev-tabs"
            role="group"
            aria-label="Choose a stakeholder"
          >
            {stakeholders.map((stakeholder) => (
              <button
                key={stakeholder}
                type="button"
                aria-pressed={activeStakeholder === stakeholder}
                className={activeStakeholder === stakeholder ? "is-active" : ""}
                onClick={() => setActiveStakeholder(stakeholder)}
              >
                {stakeholder}
              </button>
            ))}
          </div>
        </div>

        <ul className="redev-benefit-list" data-scroll-reveal="3">
          {stakeholderBenefits[activeStakeholder].map((benefit, index) => (
            <li key={benefit}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
