import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { projects } from "../common/projectData";

const RelatedCard = ({ project }) => (
  <div style={{
    background: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid rgba(0,0,0,0.08)",
    height: "100%",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  }}>
    <div style={{ overflow: "hidden", position: "relative" }}>
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          display: "block",
        }}
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
        {project.category}
      </span>
      <h3 style={{
        fontSize: "1rem",
        fontWeight: 700,
        color: "#374151",
        marginBottom: "0.6rem",
        lineHeight: 1.4,
      }}>
        {project.title}
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
        {project.description}
      </p>
      <Link
        to={`/projects/${project.slug}`}
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
        View Project →
      </Link>
    </div>
  </div>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Header />
        <div className="project-detail-404 container">
          <h2>Project not found</h2>
          <p>The project you're looking for doesn't exist or may have been moved.</p>
          <Link to="/projects" className="project-detail__back">Back to Projects</Link>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <section className="section-7">
        <div className="hero d-flex align-items-center">
          <div className="container-fluid">
            <div className="text-center">
              <span>{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Content ── */}
      <section className="section-6 py-5">
        <div className="container py-5">

          <Link to="/projects" className="project-detail__back">
            Back to Projects
          </Link>

          <img
            src={project.image}
            alt={project.title}
            className="project-detail__image"
          />

          <div className="project-detail__layout">

            {/* ── Main Content ── */}
            <div className="project-detail__main">
              <span className="project-detail__category">{project.category}</span>
              <h1 className="project-detail__title">{project.title}</h1>
              <p className="project-detail__overview">{project.content.overview}</p>

              {project.content.sections.map((section, i) => (
                <div key={i} className="project-detail__section">
                  <h4 className="project-detail__section-heading">{section.heading}</h4>
                  <p className="project-detail__section-body">{section.body}</p>
                </div>
              ))}
            </div>

            {/* ── Sidebar ── */}
            <aside className="project-detail__sidebar">
              <div className="project-info-card">
                <h4>Project Details</h4>
                <div className="project-info-card__item">
                  <span className="project-info-card__label">Category</span>
                  <span className="project-info-card__value">{project.category}</span>
                </div>
                <div className="project-info-card__item">
                  <span className="project-info-card__label">Location</span>
                  <span className="project-info-card__value">{project.location}</span>
                </div>
                <div className="project-info-card__item">
                  <span className="project-info-card__label">Year</span>
                  <span className="project-info-card__value">{project.year}</span>
                </div>
                <div className="project-info-card__item">
                  <span className="project-info-card__label">Status</span>
                  <span className="project-info-card__value project-info-card__status">{project.status}</span>
                </div>
                <div className="project-info-card__item">
                  <span className="project-info-card__label">Area</span>
                  <span className="project-info-card__value">{project.content.details.area}</span>
                </div>
                <div className="project-info-card__item">
                  <span className="project-info-card__label">Duration</span>
                  <span className="project-info-card__value">{project.content.details.duration}</span>
                </div>
                <div className="project-info-card__item">
                  <span className="project-info-card__label">Floors</span>
                  <span className="project-info-card__value">{project.content.details.floors}</span>
                </div>
                <Link to="/contact" className="project-info-card__cta">
                  Enquire About This Project
                </Link>
              </div>
            </aside>

          </div>

          {/* ── Related Projects ── */}
          <hr className="project-detail__divider" />

          <div className="project-detail__related">
            <h3>Other Projects</h3>
            <div className="row g-4">
              {relatedProjects.map((related) => (
                <div className="col-12 col-sm-6 col-lg-3" key={related.slug}>
                  <RelatedCard project={related} />
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

export default ProjectDetail;