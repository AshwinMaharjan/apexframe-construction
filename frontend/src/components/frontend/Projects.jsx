import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Luxury Villa Construction",
      description:
        "Elegant and durable villa construction designed with modern architecture and premium finishing.",
      image: "/images/projects-1.png",
    },
    {
      title: "Modern Office Complex",
      description:
        "Professional office space development focused on functionality, efficiency, and contemporary design.",
      image: "/images/projects-2.png",
    },
    {
      title: "Commercial Shopping Center",
      description:
        "Large-scale commercial project built to support modern businesses and customer convenience.",
      image: "/images/projects-3.png",
    },
    {
      title: "Interior Renovation Project",
      description:
        "Complete interior transformation with stylish renovations and high-quality craftsmanship.",
      image: "/images/projects-4.png",
    },
    {
      title: "Residential Apartment Block",
      description:
        "Multi-storey residential development delivering comfortable, well-designed living spaces built to last.",
      image: "/images/projects-5.png",
    },
    {
      title: "Industrial Warehouse Facility",
      description:
        "Purpose-built warehouse with reinforced structure, wide-span interiors, and efficient logistics layout.",
      image: "/images/projects-6.png",
    },
    {
      title: "Rooftop Terrace & Landscaping",
      description:
        "Transforming unused rooftop space into a stunning outdoor terrace with premium landscaping and finishes.",
      image: "/images/projects-7.png",
    },
    {
      title: "School & Education Campus",
      description:
        "Safe, modern, and inspiring educational facilities built with community needs and long-term use in mind.",
      image: "/images/projects-8.png",
    },
  ];

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
                  combine innovation, durability, and precision. From
                  residential developments to large-scale commercial spaces,
                  each project reflects our commitment to quality and
                  engineering excellence.
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
                workmanship, innovative designs, and trusted engineering
                solutions.
              </p>
            </div>

            <div className="row g-4">
              {projects.map((project, index) => (
                <div className="col-12 col-sm-6 col-lg-3" key={index}>
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
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href="" className="btn-primary">
                          Read More
                        </a>
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