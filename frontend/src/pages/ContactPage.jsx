import React, { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal.js";
import BusinessHoursSection from "../sections/contact/BusinessHoursSection.jsx";
import ContactCtaSection from "../sections/contact/ContactCtaSection.jsx";
import ContactFaqSection from "../sections/contact/ContactFaqSection.jsx";
import ContactHeroSection from "../sections/contact/ContactHeroSection.jsx";
import ContactInfoSection from "../sections/contact/ContactInfoSection.jsx";
import ContactIntroSection from "../sections/contact/ContactIntroSection.jsx";
import InquiryFormSection from "../sections/contact/InquiryFormSection.jsx";
import OfficeLocationSection from "../sections/contact/OfficeLocationSection.jsx";
import SiteFooter from "../sections/SiteFooter.jsx";
import "../styles/contact-page.css";

export default function ContactPage() {
  useScrollReveal();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Contact SCON-HD — Let's start a conversation";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main>
      <ContactHeroSection />
      <ContactIntroSection />
      <ContactInfoSection />
      <InquiryFormSection />
      <OfficeLocationSection />
      <BusinessHoursSection />
      <ContactFaqSection />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
