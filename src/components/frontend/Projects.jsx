import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { projects } from "../common/projectData";

const Projects = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section-7">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Our Projects</span>
                <h2>Building Excellence Through Every Project</h2>
                <p>
                  We take pride in delivering diverse construction projects that
                  combine innovation, durability, and precision. From residential
                  developments to large-scale commercial spaces, each project
                  reflects our commitment to quality and engineering excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-3 py-5">
          <div className="container py-5">
            <div className="section-title">
              <span>Our Projects</span>
              <h2>Building Excellence Through Every Project</h2>
              <p>
                Explore our completed construction projects showcasing quality
                workmanship, innovative designs, and trusted engineering solutions.
              </p>
            </div>

            <div className="row g-4">
              {projects.map((project) => (
                <div className="col-12 col-sm-6 col-lg-3" key={project.slug}>
                  <div className="item">
                    <div className="service-image">
                      <img
                        src={project.image}
                        className="w-100"
                        alt={project.title}
                      />
                    </div>
                    <div className="service-overlay">
                      <div className="overlay-title">{project.title}</div>
                      <div className="overlay-body">
                        <h3>{project.category}</h3>
                        <p>{project.description}</p>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="btn-primary"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;