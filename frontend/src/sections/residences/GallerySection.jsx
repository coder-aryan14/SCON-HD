import React from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    alt: "Living room with natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=85",
    alt: "Kitchen detail",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=85",
    alt: "Exterior at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=85",
    alt: "Bedroom interior",
  },
  {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=85",
    alt: "Open-plan living space",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85",
    alt: "Residential tower facade",
  },
];

export default function GallerySection() {
  return (
    <section className="residences-gallery">
      <div className="residences-container">
        <p className="eyebrow residences-eyebrow" data-scroll-reveal="1">
          Gallery
        </p>
        <div className="residences-split" data-scroll-reveal="2">
          <h2>
            Experience
            <br />
            <strong>the details.</strong>
          </h2>
          <p className="residences-lead">
            A closer look at the materials, light and spaces that make a SCON
            residence feel like home.
          </p>
        </div>

        <div className="residences-gallery-grid" data-scroll-reveal="3">
          {galleryImages.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
