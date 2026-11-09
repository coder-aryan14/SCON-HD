import React, { useEffect, useState } from "react";

// Hours are in IST, as [opening hour, closing hour] or null when closed.
const businessHours = [
  { day: "Monday", hours: [10, 19] },
  { day: "Tuesday", hours: [10, 19] },
  { day: "Wednesday", hours: [10, 19] },
  { day: "Thursday", hours: [10, 19] },
  { day: "Friday", hours: [10, 19] },
  { day: "Saturday", hours: [10, 18] },
  { day: "Sunday", hours: null },
];

function formatHour(hour) {
  const suffix = hour >= 12 ? "pm" : "am";
  return `${hour % 12 || 12}:00 ${suffix}`;
}

function getPuneTime() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());

  return {
    day: parts.find((part) => part.type === "weekday").value,
    hour: Number(parts.find((part) => part.type === "hour").value),
  };
}

export default function BusinessHoursSection() {
  const [puneTime, setPuneTime] = useState(getPuneTime);

  useEffect(() => {
    const intervalId = window.setInterval(
      () => setPuneTime(getPuneTime()),
      60000,
    );
    return () => window.clearInterval(intervalId);
  }, []);

  const today = businessHours.find((entry) => entry.day === puneTime.day);
  const isOpen =
    today?.hours != null &&
    puneTime.hour >= today.hours[0] &&
    puneTime.hour < today.hours[1];

  return (
    <section className="cp-hours">
      <div className="cp-container cp-split">
        <div data-scroll-reveal="1">
          <p className="eyebrow cp-eyebrow">Business hours</p>
          <h2>
            When we&apos;re
            <br />
            <strong>available.</strong>
          </h2>
          <p className="cp-lead cp-hours-lead">
            Site visits on Sundays and outside office hours can be arranged by
            appointment.
          </p>
          <span className={`cp-status${isOpen ? " is-open" : ""}`}>
            {isOpen ? "Open now" : "Closed now"}
          </span>
        </div>

        <ul className="cp-hours-list" data-scroll-reveal="2">
          {businessHours.map((entry) => (
            <li
              key={entry.day}
              className={entry.day === puneTime.day ? "is-today" : undefined}
            >
              <span>{entry.day}</span>
              <strong>
                {entry.hours
                  ? `${formatHour(entry.hours[0])} – ${formatHour(entry.hours[1])}`
                  : "By appointment"}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
