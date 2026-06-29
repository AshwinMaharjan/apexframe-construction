import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section-7">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Quality, Integrity, Value</span>
                <h1>About Us</h1>
                <p>
                  We deliver high-quality construction services with precision,
                  safety, and reliability, turning your vision into reality
                  through expert engineering and skilled craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-8">
  <div className="container py-5">
    <div className="row align-items-center g-5">
      {/* Left — Image */}
      <div className="col-md-6 section-8__image-col">
        <img src="/images/about-us.png" alt="About ApexFrame" />
      </div>

      {/* Right — Content */}
      <div className="col-md-6 section-8__content-col">
        <span>Who We Are</span>
        <h2>Building Excellence, <br />One Project at a Time</h2>
        <p>
          Founded on a commitment to quality and craftsmanship, ApexFrame has
          been delivering outstanding construction solutions for over a decade.
          We combine modern engineering techniques with time-tested building
          practices to create structures that stand the test of time.
        </p>
        <p>
          Our team of certified engineers, skilled tradespeople, and dedicated
          project managers work in unison to ensure every project is completed
          on time, within budget, and to the highest safety standards.
        </p>

        <a href="/contact-us" className="btn-primary">
          Get In Touch <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
</section>
<section className="section-9">
  <div className="container py-5">
    {/* Section Title */}
    <div className="section-title">
      <span>Our People</span>
      <h2>Meet the Team</h2>
      <p>
        The skilled professionals behind every project, united by a passion
        for quality craftsmanship and a commitment to delivering results.
      </p>
    </div>

    {/* Row 1 */}
    <div className="row g-4 mb-4">
      {[
        { img: "team-1.jpg", name: "James Harlow",    role: "Founder & CEO"          },
        { img: "team-2.jpg", name: "Sarah Mitchell",  role: "Head of Engineering"    },
        { img: "team-3.jpg", name: "David Okafor",    role: "Senior Project Manager" },
        { img: "team-4.jpg", name: "Priya Nair",      role: "Lead Architect"         },
      ].map((member) => (
        <div className="col-6 col-md-3" key={member.name}>
          <div className="team-card">
            <div className="team-card__image">
              <img src={`/images/${member.img}`} alt={member.name} />
            </div>
            <div className="team-card__info">
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Row 2 */}
    <div className="row g-4">
      {[
        { img: "team-5.jpg", name: "Liam Forsythe",   role: "Site Safety Officer"    },
        { img: "team-6.jpg", name: "Angela Torres",   role: "Interior Design Lead"   },
        { img: "team-7.jpg", name: "Marcus Webb",     role: "Structural Engineer"    },
        { img: "team-8.jpg", name: "Nina Petrov",     role: "Client Relations Manager"},
      ].map((member) => (
        <div className="col-6 col-md-3" key={member.name}>
          <div className="team-card">
            <div className="team-card__image">
              <img src={`/images/${member.img}`} alt={member.name} />
            </div>
            <div className="team-card__info">
              <h3>{member.name}</h3>
              <span>{member.role}</span>
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

export default About;
