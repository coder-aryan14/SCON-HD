import React, { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal.js";
import BenefitsSection from "../sections/redevelopment/BenefitsSection.jsx";
import CommitmentsSection from "../sections/redevelopment/CommitmentsSection.jsx";
import ExpertiseSection from "../sections/redevelopment/ExpertiseSection.jsx";
import FaqSection from "../sections/redevelopment/FaqSection.jsx";
import ProcessSection from "../sections/redevelopment/ProcessSection.jsx";
import RedevelopmentCtaSection from "../sections/redevelopment/RedevelopmentCtaSection.jsx";
import RedevelopmentHeroSection from "../sections/redevelopment/RedevelopmentHeroSection.jsx";
import RedevelopmentIntroSection from "../sections/redevelopment/RedevelopmentIntroSection.jsx";
import WhyRedevelopmentSection from "../sections/redevelopment/WhyRedevelopmentSection.jsx";
import SiteFooter from "../sections/SiteFooter.jsx";
import "../styles/redevelopment.css";

export default function RedevelopmentPage() {
  useScrollReveal();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Redevelopment by SCON-HD — Reimagining spaces";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main>
      <RedevelopmentHeroSection />
      <RedevelopmentIntroSection />
      <WhyRedevelopmentSection />
      <ExpertiseSection />
      <ProcessSection />
      <BenefitsSection />
      <CommitmentsSection />
      <FaqSection />
      <RedevelopmentCtaSection />
      <SiteFooter />
    </main>
  );
}
