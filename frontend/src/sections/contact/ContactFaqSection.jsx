import React from "react";

const faqs = [
  {
    question: "How soon will I hear back after submitting an inquiry?",
    answer:
      "Our team typically responds within one business day. Inquiries received on Sundays are answered on Monday morning.",
  },
  {
    question: "Can I schedule a private site visit?",
    answer:
      "Yes. Site visits can be arranged on any day of the week, including Sundays, by appointment. Mention your preferred time in the inquiry form.",
  },
  {
    question: "Do I need an appointment to visit your office?",
    answer:
      "Walk-ins are welcome during business hours, but an appointment ensures the right team member is available to meet you.",
  },
  {
    question: "Who should I contact about redevelopment?",
    answer:
      "Select 'Redevelopment' in the inquiry form, or call our office. Our redevelopment team will arrange a meeting with your society committee.",
  },
  {
    question: "Can I request brochures and floor plans?",
    answer:
      "Of course. Share the residence you are interested in and we will send the brochure, floor plans and pricing details.",
  },
];

export default function ContactFaqSection() {
  return (
    <section className="cp-faq">
      <div className="cp-container cp-faq-inner">
        <div data-scroll-reveal="1">
          <p className="eyebrow cp-eyebrow">FAQs</p>
          <h2>
            Have
            <br />
            <strong>questions?</strong>
          </h2>
          <p className="cp-lead cp-faq-lead">
            Quick answers to what people most often ask before getting in touch.
          </p>
        </div>

        <div className="cp-faq-list" data-scroll-reveal="2">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                {faq.question}
                <span className="cp-faq-icon" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
