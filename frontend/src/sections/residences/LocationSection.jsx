import React from "react";

const connections = [
  { place: "FC Road & Deccan", time: "5 min" },
  { place: "Pune Railway Station", time: "15 min" },
  { place: "Hinjawadi IT Park", time: "30 min" },
  { place: "Pune International Airport", time: "35 min" },
  { place: "Leading schools & hospitals", time: "Within 3 km" },
];

export default function LocationSection() {
  return (
    <section className="residences-location">
      <div className="residences-container residences-location-inner">
        <div data-scroll-reveal="1">
          <p className="eyebrow residences-location-eyebrow">
            Location &amp; connectivity
          </p>
          <h2>
            Live connected.
            <br />
            <strong>Live conveniently.</strong>
          </h2>
          <p className="residences-location-copy">
            Every SCON residence is sited in a neighbourhood with character,
            minutes from the city&apos;s cultural, commercial and educational
            centres.
          </p>
        </div>

        <ul className="residences-connections" data-scroll-reveal="2">
          {connections.map((connection) => (
            <li key={connection.place}>
              <span>{connection.place}</span>
              <strong>{connection.time}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
