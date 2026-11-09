import React from "react";

const faqs = [
  {
    question: "How do we know if our building is eligible for redevelopment?",
    answer:
      "Buildings that are typically 30 years or older, or structurally weak, are good candidates. Our free feasibility study assesses your plot, title and FSI potential before any commitment.",
  },
  {
    question: "What percentage of members must agree?",
    answer:
      "As per current regulations, a resolution passed by at least 51% of society members in a general body meeting is required. We help you plan and document this process.",
  },
  {
    question: "Where will members live during construction?",
    answer:
      "Members receive monthly rent for alternate accommodation along with shifting allowances, as agreed in the development agreement.",
  },
  {
    question: "How long does a redevelopment project take?",
    answer:
      "Most projects take 30 to 36 months from approvals to possession, depending on the size of the building. The committed timeline is written into the agreement.",
  },
  {
    question: "Will members get a larger home?",
    answer:
      "In most cases, yes. Additional area depends on the available FSI and is clearly specified for every member in the proposal.",
  },
  {
    question: "Are there any costs to the society members?",
    answer:
      "Construction costs are borne by the developer. Any optional upgrades or extra area purchased by a member are discussed transparently upfront.",
  },
];

export default function FaqSection() {
  return (
    <section className="redev-faq">
      <div className="redev-container redev-faq-inner">
        <div className="redev-faq-intro" data-scroll-reveal="1">
          <p className="eyebrow redev-eyebrow">FAQs</p>
          <h2>
            Everything you
            <br />
            <strong>need to know.</strong>
          </h2>
          <p className="redev-lead">
            Have a question that isn&apos;t answered here? Our team is happy to
            meet your committee in person.
          </p>
          <a className="redev-faq-link" href="#redev-cta">
            Ask a question <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="redev-faq-list" data-scroll-reveal="2">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                {faq.question}
                <span className="redev-faq-icon" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
