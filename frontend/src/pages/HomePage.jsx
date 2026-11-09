import React from "react";
import useScrollReveal from "../hooks/useScrollReveal.js";
import AboutSection from "../sections/AboutSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";
import DevelopmentsSection from "../sections/DevelopmentsSection.jsx";
import HeroSection from "../sections/HeroSection.jsx";
import RedevelopmentSection from "../sections/RedevelopmentSection.jsx";
import SiteFooter from "../sections/SiteFooter.jsx";

export default function HomePage() {
  useScrollReveal();

  return (
    <main>
      <HeroSection />
      <div className="about-developments">
        <AboutSection />
        <DevelopmentsSection />
      </div>
      <RedevelopmentSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
