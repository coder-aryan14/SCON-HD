import React, { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal.js";
import AboutHeroSection from "../sections/about/AboutHeroSection.jsx";
import FinalCtaSection from "../sections/about/FinalCtaSection.jsx";
import JourneySection from "../sections/about/JourneySection.jsx";
import PurposeSection from "../sections/about/PurposeSection.jsx";
import StorySection from "../sections/about/StorySection.jsx";
import TeamSection from "../sections/about/TeamSection.jsx";
import ValuesSection from "../sections/about/ValuesSection.jsx";
import SiteFooter from "../sections/SiteFooter.jsx";
import "../styles/about.css";

export default function AboutPage() {
  useScrollReveal();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "About SCON-HD — Beyond structures";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main>
      <AboutHeroSection />
      <StorySection />
      <PurposeSection />
      <ValuesSection />
      <TeamSection />
      <JourneySection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
