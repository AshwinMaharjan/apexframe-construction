import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { services } from "../common/serviceData";

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
                  We provide end-to-end construction services including planning,
                  design, and execution, delivering durable, efficient, and
                  high-quality structures tailored to residential and commercial needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-10">
          <div className="container py-5">
            <div className="section-title">
              <span>What We Do</span>
              <h2>Our Services</h2>
              <p>
                From groundbreaking to finishing touches, we offer a comprehensive
                range of construction services tailored to meet your every need
                with precision and expertise.
              </p>
            </div>

            <div className="row g-4">
              {services.map((service) => (
                <div className="col-12 col-md-6 col-lg-4" key={service.slug}>
                  <div className="service-card">
                    <div className="service-card__image">
                      <img src={`/images/${service.img}`} alt={service.title} />
                    </div>
                    <div className="service-card__title">
                      <h3>{service.title}</h3>
                    </div>
                    <div className="service-card__overlay">
                      <div className="service-card__overlay-inner">
                        <span>{service.category}</span>
                        <h3>{service.title}</h3>
                        <p>{service.tagline}</p>
                        <Link to={`/services/${service.slug}`} className="service-card__link">
                          Learn More
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

export default Services;