import React from "react";
import AboutImg from "/images/about-us.png";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <>
    <Header />
      <main>
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Trusted Construction Company</span>
                <h1>
                  Building Strong Foundations
                  <br /> for a Better Future
                </h1>
                <p>
                  We deliver high-quality construction services with precision,
                  safety, and reliability. From residential buildings to
                  large-scale commercial projects, we turn your vision into
                  reality with expert engineering and skilled craftsmanship.
                </p>
                <a href="#" className="btn btn-primary">
                  Contact Now
                </a>
                <a href="#" className="btn btn-secondary ms-2">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* About Us */}
        <section className="section-2 py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <img src={AboutImg} alt="About Us Image" />
              </div>
              <div className="col-md-6">
                <span>About Our Company</span>

                <h2>
                  Delivering Reliable Construction Solutions with Precision and
                  Trust
                </h2>

                <p>
                  We are a modern construction company focused on building safe,
                  durable, and high-quality structures. With a team of
                  experienced engineers and skilled workers, we ensure every
                  project is completed with attention to detail and strong
                  technical standards.
                </p>

                <p>
                  From planning and design to execution and final delivery, we
                  manage every stage of construction with professionalism and
                  efficiency. Our goal is to create structures that stand the
                  test of time while meeting client expectations and industry
                  standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
