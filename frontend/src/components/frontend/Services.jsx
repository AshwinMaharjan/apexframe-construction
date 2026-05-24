import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section-7">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Our Services</span>

                <h1>What We Build & Deliver</h1>

                <p>
                  We provide end-to-end construction services including
                  planning, design, and execution, delivering durable,
                  efficient, and high-quality structures tailored to residential
                  and commercial needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-10">
  <div className="container py-5">
    {/* Section Title */}
    <div className="section-title">
      <span>What We Do</span>
      <h2>Our Services</h2>
      <p>
        From groundbreaking to finishing touches, we offer a comprehensive
        range of construction services tailored to meet your every need
        with precision and expertise.
      </p>
    </div>

    {/* Services Grid */}
    <div className="row g-4">
      {[
        {
          img: "service-container1.png",
          title: "Residential Construction",
          content:
            "We build dream homes from the ground up — custom designs, quality materials, and expert craftsmanship that transforms your vision into a lasting residence.",
        },
        {
          img: "service-container2.png",
          title: "Commercial Projects",
          content:
            "From office complexes to retail spaces, our commercial construction team delivers large-scale projects on schedule and within budget without compromise.",
        },
        {
          img: "service-container3.png",
          title: "Structural Engineering",
          content:
            "Our certified engineers design and analyse robust structural frameworks, ensuring every build meets the highest safety codes and long-term durability standards.",
        },
        {
          img: "service-container4.png",
          title: "Interior Fit-Out",
          content:
            "We handle end-to-end interior fit-outs — from flooring and ceilings to bespoke joinery and lighting — delivering spaces that are both functional and inspiring.",
        },
        {
          img: "service-container5.png",
          title: "Renovation & Restoration",
          content:
            "Breathing new life into existing structures, our renovation specialists preserve the character of your property while upgrading it to modern standards.",
        },
        {
          img: "service-container6.png",
          title: "Project Management",
          content:
            "Our seasoned project managers oversee every phase — planning, procurement, scheduling, and handover — so your build runs smoothly from day one.",
        },
      ].map((service) => (
        <div className="col-12 col-md-6 col-lg-4" key={service.title}>
          <div className="service-card">
            {/* Image */}
            <div className="service-card__image">
              <img src={`/images/${service.img}`} alt={service.title} />
            </div>

            {/* Always-visible title bar */}
            <div className="service-card__title">
              <h3>{service.title}</h3>
            </div>

            {/* Hover overlay with full content */}
            <div className="service-card__overlay">
              <div className="service-card__overlay-inner">
                <span>Our Service</span>
                <h3>{service.title}</h3>
                <p>{service.content}</p>
                <a href="/services" className="service-card__link">
                  Learn More
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

export default Services;
