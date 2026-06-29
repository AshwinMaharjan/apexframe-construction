import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { services } from "../common/serviceData";

/* ── Inline-styled related card (avoids SCSS specificity issues) ── */
const RelatedCard = ({ service }) => (
  <div style={{
    background: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid rgba(0,0,0,0.08)",
    height: "100%",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  }}>
    <div style={{ overflow: "hidden" }}>
      <img
        src={`/images/${service.img}`}
        alt={service.title}
        style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
      />
    </div>
    <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>
      <span style={{
        display: "inline-block",
        marginBottom: "0.6rem",
        padding: "4px 12px",
        background: "rgba(217,119,6,0.12)",
        border: "1px solid rgba(217,119,6,0.25)",
        color: "#d97706",
        fontSize: "0.72rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        borderRadius: "50px",
      }}>
        {service.category}
      </span>
      <h3 style={{
        fontSize: "1rem",
        fontWeight: 700,
        color: "#374151",
        marginBottom: "0.6rem",
        lineHeight: 1.4,
      }}>
        {service.title}
      </h3>
      <p style={{
        fontSize: "0.88rem",
        lineHeight: 1.7,
        color: "#6b7280",
        marginBottom: "1rem",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        {service.tagline}
      </p>
      <Link
        to={`/services/${service.slug}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          color: "#d97706",
          fontSize: "0.82rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          textDecoration: "none",
        }}
      >
        Learn More →
      </Link>
    </div>
  </div>
);

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Header />
        <div className="service-detail-404 container">
          <h2>Service not found</h2>
          <p>The service page you're looking for doesn't exist or may have been moved.</p>
          <Link to="/services" className="service-detail__back">Back to Services</Link>
        </div>
        <Footer />
      </>
    );
  }

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <section className="section-7">
        <div className="hero d-flex align-items-center">
          <div className="container-fluid">
            <div className="text-center">
              <span>{service.category}</span>
              <h2>{service.title}</h2>
              <p>{service.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Content ── */}
      <section className="section-6 py-5">
        <div className="container py-5">

          {/* Back */}
          <Link to="/services" className="service-detail__back">
            Back to Services
          </Link>

          {/* Featured Image */}
          <img
            src={`/images/${service.img}`}
            alt={service.title}
            className="service-detail__image"
          />

          <div className="service-detail__layout">

            {/* ── Main Content ── */}
            <div className="service-detail__main">
              <span className="service-detail__category">{service.category}</span>
              <h1 className="service-detail__title">{service.title}</h1>
              <p className="service-detail__overview">{service.content.overview}</p>

              {service.content.sections.map((section, i) => (
                <div key={i} className="service-detail__section">
                  <h4 className="service-detail__section-heading">{section.heading}</h4>
                  <p className="service-detail__section-body">{section.body}</p>
                </div>
              ))}
            </div>

            {/* ── Sidebar ── */}
            <aside className="service-detail__sidebar">
              <div className="service-info-card">
                <h4>What's Included</h4>
                <ul className="service-info-card__features">
                  {service.content.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="service-info-card__divider" />
                <h4>Get Started</h4>
                <p className="service-info-card__note">
                  Interested in this service? Get in touch with our team to discuss your project requirements.
                </p>
                <Link to="/contact-us" className="service-info-card__cta">
                  Request a Quote
                </Link>
                <Link to="/projects" className="service-info-card__secondary">
                  View Related Projects
                </Link>
              </div>
            </aside>

          </div>

          {/* ── Related Services ── */}
          <hr className="service-detail__divider" />

          <div className="service-detail__related">
            <h3>Other Services</h3>
            <div className="row g-4">
              {relatedServices.map((related) => (
                <div className="col-12 col-sm-6 col-lg-4" key={related.slug}>
                  <RelatedCard service={related} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetail;