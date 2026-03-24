import { useEffect, useMemo, useState } from "react";
import {
  BedDouble,
  Car,
  Clock3,
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

function FlightModal({ flight, onClose }) {
  if (!flight) return null;

  return (
    <div className="flight-modal" onClick={onClose}>
      <div
        className="flight-panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={flight.label}
      >
        <div className="flight-panel-top">
          <div>
            <div className="mini-badge">Detalls del vol</div>
            <h3 className="flight-title">{flight.label}</h3>
          </div>

          <button type="button" className="close-button" onClick={onClose}>
            Tancar
          </button>
        </div>

        <div className="flight-grid">
          <div className="flight-box">
            <p className="flight-label">Ruta</p>
            <p>{flight.details.route}</p>
          </div>

          <div className="flight-box">
            <p className="flight-label">Tram 1</p>
            <p>{flight.details.segment1}</p>
          </div>

          <div className="flight-box">
            <p className="flight-label">Escala</p>
            <p>{flight.details.layover}</p>
          </div>

          <div className="flight-box">
            <p className="flight-label">Tram 2</p>
            <p>{flight.details.segment2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function FlipCard({ item, flipped, onToggle, onOpenFlight }) {
  const Icon = iconMap[item.icon] || Car;

  return (
    <div
      className="flip-card"
      style={{ "--card-gradient": item.gradient }}
      role="button"
      tabIndex={0}
      aria-label={`Gira la targeta del dia ${item.day}`}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }
      }}
    >
      <div className={`card-inner ${flipped ? "is-flipped" : ""}`}>
        <article className="card-face card-front">
          <div className="card-top">
            <div>
              <div className="day-badge">Dia {item.day}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-summary">{item.summary}</p>
            </div>

            <div className="icon-pill">
              <Icon size={20} />
            </div>
          </div>

          <div className="card-meta">
            <div className="meta-row">
              <MapPin size={15} />
              <span>{item.region}</span>
            </div>

            <div className="meta-row">
              <BedDouble size={15} />
              <span>{item.stay}</span>
            </div>
          </div>

          <div className="plan-box">
            <p className="plan-label">Pla destacat</p>

            <ul className="plan-list">
              {item.plan.slice(0, 3).map((step) => (
                <li key={step}>
                  <span className="dot" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-footer">
            <div className="card-footer-top">
              {item.flight ? (
                <button
                  type="button"
                  className="flight-button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onOpenFlight(item.flight);
                  }}
                >
                  <Plane size={13} />
                  Veure vol
                </button>
              ) : (
                <span />
              )}
            </div>

            <div className="card-footer-bottom">
              <span className="status-pill">{item.status}</span>
              <span className="hint-inline">
                <Clock3 size={13} />
                Toca per girar
              </span>
            </div>
          </div>
        </article>

        <article className="card-face card-back">
          <div className="card-top">
            <div>
              <div className="day-badge subtle">Dia {item.day}</div>
              <h3 className="card-title back">{item.title}</h3>
            </div>

            <div className="icon-pill soft">
              <Icon size={20} />
            </div>
          </div>

          <div className="back-scroll">
            <div className="plan-box soft-box">
              <p className="plan-label">Pla complet</p>

              <ul className="plan-list">
                {item.plan.map((step) => (
                  <li key={step}>
                    <span className="dot" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-grid">
              <div className="info-box">
                <p className="info-title">Allotjament</p>
                <p>{item.stay}</p>
              </div>

              <div className="info-box">
                <p className="info-title">Nota</p>
                <p>{item.notes}</p>
              </div>
            </div>

            {item.links.length > 0 && (
              <div className="links-box">
                <p className="info-title">Enllaços útils</p>

                <div className="links-wrap">
                  {item.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="chip-link"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {link.label}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="back-footer">
            <span>{item.region}</span>
            <span className="back-hint">Torna a tocar per tancar</span>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function App() {
  const [flipped, setFlipped] = useState(new Set());
  const [activeFlight, setActiveFlight] = useState(null);

  const tripStats = useMemo(() => {
    const uniqueStays = new Set(
      itinerary
        .map((day) => day.stay)
        .filter((stay) => stay && stay !== "En trànsit")
    );

    const coastalDays = itinerary.filter((day) =>
      /Walvis|Swakopmund|Skeleton|Cape Cross/i.test(day.region)
    ).length;

    return {
      days: itinerary.length,
      stays: uniqueStays.size,
      coastalDays,
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(activeFlight));

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveFlight(null);
      }
    };

    if (activeFlight) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeFlight]);

  const toggleCard = (day) => {
    setFlipped((previous) => {
      const next = new Set(previous);

      if (next.has(day)) next.delete(day);
      else next.add(day);

      return next;
    });
  };

  return (
    <div className="page-shell">
      <main className="page-container">
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-flag" aria-hidden="true">
              <div className="flag-blue" />
              <div className="flag-red" />
              <div className="flag-green" />
              <div className="flag-white-line" />
              <div className="flag-yellow-line" />
            </div>

            <h1 className="hero-title">{tripMeta.title}</h1>
            <p className="hero-subtitle">{tripMeta.subtitle}</p>

            <div className="top-summary">
              <span className="pill">{tripMeta.dateRange}</span>
              <span className="pill">{tripMeta.summaryPill}</span>
            </div>
          </div>

          <div className="stats-grid">
            <StatCard value={tripStats.days} label="Dies" />
            <StatCard value={tripStats.stays} label="Allotjaments" />
            <StatCard value={tripStats.coastalDays} label="Costa" />
          </div>
        </section>

        <section className="note-banner">
          <strong>Nota del viatge:</strong> al teu full també s’indica que
          Damaraland es veu dins la part de Spitzkoppe, i que es descarta el
          jaciment arqueològic de Twyfelfontein.
        </section>

        <p className="cards-hint">Toca cada targeta per veure el pla complet</p>

        <section className="cards-grid">
          {itinerary.map((item) => (
            <FlipCard
              key={item.day}
              item={item}
              flipped={flipped.has(item.day)}
              onToggle={() => toggleCard(item.day)}
              onOpenFlight={setActiveFlight}
            />
          ))}
        </section>
      </main>

      <FlightModal flight={activeFlight} onClose={() => setActiveFlight(null)} />
    </div>
  );
}