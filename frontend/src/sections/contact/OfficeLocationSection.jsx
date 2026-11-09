import React from "react";
import ArrowIcon from "../../components/ArrowIcon.jsx";

const officeQuery = encodeURIComponent(
  "Padale Palace, Karve Road, Nal Stop, Erandwane, Pune 411004",
);

export default function OfficeLocationSection() {
  return (
    <section className="cp-office" id="office">
      <div className="cp-container cp-office-inner">
        <div data-scroll-reveal="1">
          <p className="eyebrow cp-office-eyebrow">Office location</p>
          <h2>
            Find <strong>us.</strong>
          </h2>
          <address className="cp-office-address">
            SCON-HD Developers
            <br />
            2nd Floor, Padale Palace, C.T.S. No. 11/B/2,
            <br />
            Off Karve Road, Near Nal Stop, Above Domino&apos;s,
            <br />
            Erandwane, Pune – 411004.
          </address>
          <ul className="cp-office-notes">
            <li>
              <span>Landmark</span>
              <strong>Nal Stop, Karve Road</strong>
            </li>
            <li>
              <span>Parking</span>
              <strong>Visitor parking available</strong>
            </li>
          </ul>
          <a
            className="button button-light"
            href={`https://www.google.com/maps/dir/?api=1&destination=${officeQuery}`}
            target="_blank"
            rel="noreferrer"
          >
            Get directions <ArrowIcon />
          </a>
        </div>

        <div className="cp-map" data-scroll-reveal="2">
          <iframe
            title="SCON-HD office on Google Maps"
            src={`https://maps.google.com/maps?q=${officeQuery}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
