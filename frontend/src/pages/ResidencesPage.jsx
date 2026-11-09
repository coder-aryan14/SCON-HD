import React, { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal.js";
import AmenitiesSection from "../sections/residences/AmenitiesSection.jsx";
import DesignSection from "../sections/residences/DesignSection.jsx";
import FeaturedResidenceSection from "../sections/residences/FeaturedResidenceSection.jsx";
import GallerySection from "../sections/residences/GallerySection.jsx";
import LocationSection from "../sections/residences/LocationSection.jsx";
import ResidencesCtaSection from "../sections/residences/ResidencesCtaSection.jsx";
import ResidencesHeroSection from "../sections/residences/ResidencesHeroSection.jsx";
import ResidencesIntroSection from "../sections/residences/ResidencesIntroSection.jsx";
import ResidencesListSection from "../sections/residences/ResidencesListSection.jsx";
import SiteFooter from "../sections/SiteFooter.jsx";
import "../styles/residences.css";

export default function ResidencesPage() {
  useScrollReveal();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Residences by SCON-HD — Redefining the art of living";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main>
      <ResidencesHeroSection />
      <ResidencesIntroSection />
      <ResidencesListSection />
      <FeaturedResidenceSection />
      <DesignSection />
      <AmenitiesSection />
      <LocationSection />
      <GallerySection />
      <ResidencesCtaSection />
      <SiteFooter />
    </main>
  );
}
