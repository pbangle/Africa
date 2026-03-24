import { useEffect, useState } from "react";
import {
  BedDouble,
  Car,
  ExternalLink,
  MapPin,
  Mountain,
  Plane,
  ShieldCheck,
  TreePalm,
  Waves,
} from "lucide-react";
import { itinerary, tripMeta } from "./data/itinerary";

const iconMap = {
  Car,
  Mountain,
  Plane,
  ShieldCheck,
  TreePalm,
  Waves,
};

function DetailSection({ title, children }) {
  return (
    <section className="detail-section">
      <h3 className="section-title">{title}</h3>
      {children}
    </section>
  );
}

export default function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("overlay-open", Boolean(selectedDay));

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedDay(null);
      }
    };

    if (selectedDay) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.classList.remove("overlay-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedDay]);

  return (
    <>
      <main className="page">
        <div className="container">
          <section className="hero">
            <h1 className="title">{tripMeta.title}</h1>
            <p className="subtitle">{tripMeta.subtitle}</p>

            <div className="top-summary">
              <span className="pill">{tripMeta.dateRange}</span>
              <span className="pill">{tripMeta.totalDays}</span>
            </div>
          </section>

          <div
            className="roadmap"
            aria-label="Trip roadmap"
            style={{ "--day-count": String(itinerary.length) }}
          >
            {itinerary.map((item) => {
              const Icon = iconMap[item.icon] || Car;
              const isActive = selectedDay?.day === item.day;

              return (
                <button
                  key={item.day}
                  type="button"
                  className={`roadmap-item ${isActive ? "active" : ""}`}
                  onClick={() => setSelectedDay(item)}
                  aria-label={`Obrir detalls del dia ${item.day}`}
                >
                  <span className="roadmap-dot" />
                  <span className="roadmap-date">{item.date}</span>

                  <span className="roadmap-main">
                    <span className="roadmap-label">{item.title}</span>
                    <span className="roadmap-sub">{item.region}</span>
                  </span>

                  <span className="roadmap-icon" aria-hidden="true">
                    <Icon size={14} />
                  </span>
                </button>
              );
            })}
          </div>

          <p className="footer-note">{tripMeta.footerNote}</p>
        </div>
      </main>

      <div
        className={`overlay ${selectedDay ? "open" : ""}`}
        aria-hidden={selectedDay ? "false" : "true"}
        onClick={() => setSelectedDay(null)}
      >
        <div
          className="overlay-panel"
          role="dialog"
          aria-modal="true"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="overlay-bar">
            <button
              id="closeOverlay"
              className="close-btn"
              type="button"
              onClick={() => setSelectedDay(null)}
            >
              ← Back
            </button>
            <span className="overlay-hint">Day details</span>
          </div>

          <div className="overlay-scroll">
            {selectedDay && (
              <>
                <section className="detail-hero">
                  <div className="detail-top-row">
                    <span className="date-badge">{selectedDay.date}</span>
                    <span className="mood">Dia {selectedDay.day}</span>
                  </div>

                  <h2 className="detail-title">{selectedDay.title}</h2>
                  <p className="detail-subtitle">{selectedDay.summary}</p>
                  <p className="city">{selectedDay.region}</p>
                </section>

                <div className="detail-content">
                  <DetailSection title="Overview">
                    <div className="tags-wrap">
                      <span className="tag">
                        <MapPin size={14} />
                        {selectedDay.region}
                      </span>
                      <span className="tag">
                        <BedDouble size={14} />
                        {selectedDay.stay}
                      </span>
                      <span className="tag">{selectedDay.status}</span>
                    </div>
                  </DetailSection>

                  <DetailSection title="Pla">
                    <ul className="transport-list">
                      {selectedDay.plan.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </DetailSection>

                  <DetailSection title="Allotjament">
                    <div className="sleep-box">
                      <div className="sleep-title">
                        <strong className="sleep-name">{selectedDay.stay}</strong>
                      </div>
                    </div>
                  </DetailSection>

                  <DetailSection title="Notes">
                    <p className="note">{selectedDay.notes}</p>
                  </DetailSection>

                  {selectedDay.flight && (
                    <DetailSection title={selectedDay.flight.label}>
                      <div className="flight-detail-grid">
                        <div className="sleep-box">
                          <div className="sleep-title">
                            <strong className="sleep-name">Ruta</strong>
                          </div>
                          <p className="note">{selectedDay.flight.details.route}</p>
                        </div>

                        <div className="sleep-box">
                          <div className="sleep-title">
                            <strong className="sleep-name">Tram 1</strong>
                          </div>
                          <p className="note">{selectedDay.flight.details.segment1}</p>
                        </div>

                        <div className="sleep-box">
                          <div className="sleep-title">
                            <strong className="sleep-name">Escala</strong>
                          </div>
                          <p className="note">{selectedDay.flight.details.layover}</p>
                        </div>

                        <div className="sleep-box">
                          <div className="sleep-title">
                            <strong className="sleep-name">Tram 2</strong>
                          </div>
                          <p className="note">{selectedDay.flight.details.segment2}</p>
                        </div>
                      </div>
                    </DetailSection>
                  )}

                  {selectedDay.links.length > 0 && (
                    <DetailSection title="Useful links">
                      <div className="options-list">
                        {selectedDay.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hotel-link"
                          >
                            {link.label}
                            <ExternalLink size={14} />
                          </a>
                        ))}
                      </div>
                    </DetailSection>
                  )}

                  <DetailSection title="Trip note">
                    <p className="note">{tripMeta.note}</p>
                  </DetailSection>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}