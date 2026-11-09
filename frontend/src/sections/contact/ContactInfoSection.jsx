import React from "react";
import ArrowIcon from "../../components/ArrowIcon.jsx";

const contactChannels = [
  {
    label: "Call us",
    value: "020 2544 1122 / 44",
    note: "Speak directly with our sales and redevelopment teams.",
    href: "tel:+912025441122",
    icon: (
      <path d="M5.5 3.5h2.4l1.3 3.4-1.7 1.1a8.5 8.5 0 0 0 4.5 4.5l1.1-1.7 3.4 1.3v2.4a1.5 1.5 0 0 1-1.6 1.5A12.6 12.6 0 0 1 4 5.1a1.5 1.5 0 0 1 1.5-1.6Z" />
    ),
  },
  {
    label: "Email us",
    value: "hello@scon.com",
    note: "Share your requirements and we will respond within a day.",
    href: "mailto:hello@scon.com",
    icon: (
      <>
        <rect x="3" y="5" width="14" height="10.5" rx="1.5" />
        <path d="m3.5 6 6.5 5 6.5-5" />
      </>
    ),
  },
  {
    label: "Visit us",
    value: "Padale Palace, Erandwane",
    note: "2nd Floor, Off Karve Road, Near Nal Stop, Pune – 411004.",
    href: "#office",
    icon: (
      <>
        <path d="M10 17.5s-5.5-5-5.5-9a5.5 5.5 0 0 1 11 0c0 4-5.5 9-5.5 9Z" />
        <circle cx="10" cy="8.5" r="2" />
      </>
    ),
  },
];

export default function ContactInfoSection() {
  return (
    <section className="cp-info">
      <div className="cp-container">
        <p className="eyebrow cp-eyebrow" data-scroll-reveal="1">
          Contact information
        </p>
        <div className="cp-split" data-scroll-reveal="2">
          <h2>
            Reach
            <br />
            <strong>our team.</strong>
          </h2>
          <p className="cp-lead">
            Choose whichever way suits you best. Every inquiry is answered by
            someone who knows our developments first-hand.
          </p>
        </div>

        <div className="cp-channels">
          {contactChannels.map((channel, index) => (
            <a
              className="cp-channel"
              href={channel.href}
              key={channel.label}
              data-scroll-reveal={String(index + 1)}
            >
              <span className="cp-channel-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20">{channel.icon}</svg>
              </span>
              <span className="cp-channel-label">{channel.label}</span>
              <strong>{channel.value}</strong>
              <span className="cp-channel-note">{channel.note}</span>
              <span className="cp-channel-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
