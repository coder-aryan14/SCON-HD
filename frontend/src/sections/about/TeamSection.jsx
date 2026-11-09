import React from "react";

const teamMembers = [
  {
    name: "Rajiv Kulkarni",
    role: "Founder & Chairman",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Ananya Deshpande",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Vikram Joshi",
    role: "Head of Construction",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Meera Patil",
    role: "Principal Architect",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=700&q=85",
  },
];

export default function TeamSection() {
  return (
    <section className="team" id="team">
      <div className="team-inner">
        <p className="eyebrow team-eyebrow" data-scroll-reveal="1">
          Our team
        </p>
        <div className="team-intro" data-scroll-reveal="2">
          <h2>
            Meet <strong>our experts.</strong>
          </h2>
          <p>
            Architects, engineers and builders who share a single standard: a
            home worthy of the trust placed in it.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article
              className="team-card"
              key={member.name}
              data-scroll-reveal={String(index + 1)}
            >
              <div className="team-photo">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
