import React from "react";
import AboutImg from "/images/about-us.png";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ServiceImg1 from "/images/services-1.png";
import ServiceImg2 from "/images/services-2.png";
import ServiceImg3 from "/images/services-3.png";
import ServiceImg4 from "/images/services-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Home = () => {
  const services = [
    {
      title: "Residential Construction",
      description:
        "We build durable and modern residential spaces designed for comfort, safety, and long-term value.",
      image: "/images/services-1.png",
    },
    {
      title: "Commercial Projects",
      description:
        "Our commercial construction services focus on functionality, efficiency, and high-quality execution.",
      image: "/images/services-2.png",
    },
    {
      title: "Renovation Works",
      description:
        "We transform outdated spaces with professional renovation solutions tailored to your vision and needs.",
      image: "/images/services-3.png",
    },
    {
      title: "Project Management",
      description:
        "We ensure smooth project execution through effective planning, coordination, and quality management.",
      image: "/images/services-4.png",
    },
  ];

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
  ];
  const blogs = [
    {
      title: "Modern Construction Trends in 2026",
      description:
        "Explore the latest construction innovations, smart building technologies, and sustainable practices transforming the modern construction industry.",
      image: "/images/blog-1.png",
    },
    {
      title: "How Quality Materials Improve Durability",
      description:
        "Learn why selecting high-quality construction materials plays a critical role in ensuring structural strength, safety, and long-term performance.",
      image: "/images/blog-2.png",
    },
    {
      title: "Essential Safety Practices on Construction Sites",
      description:
        "Discover the importance of workplace safety standards, protective equipment, and proper planning for successful construction project execution.",
      image: "/images/blog-3.png",
    },
  ];
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

        {/* Services Section */}
        <section className="section-2 py-5">
          <div className="container py-5">
            <div className="section-title">
              <span>Our Services</span>
              <h2>Our Construction Services</h2>
              <p>
                We provide innovative digital solutions including web
                development, UI/UX design, branding, and responsive applications
                tailored to your needs.
              </p>
            </div>
            <div className="row">
              {services.map((service, index) => (
                <div className="col-md-3 col-lg-3" key={index}>
                  <div className="item">
                    <div className="service-image">
                      <img
                        src={service.image}
                        className="w-100"
                        alt={service.title}
                      />
                    </div>
                    <div className="service-overlay">
                      <div className="overlay-title">{service.title}</div>
                      <div className="overlay-body">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <a href="" className="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end of services row, inside section-2 */}
          <div className="text-center mt-4">
            <a href="/services" className="btn btn-primary">
              View All Services
            </a>
          </div>
        </section>

        {/* Our Projects Section */}
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
            <div className="row">
              {projects.map((project, index) => (
                <div className="col-md-3 col-lg-3" key={index}>
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
                        <a href="" className="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* end of projects row, inside section-3 */}
          <div className="text-center mt-4">
            <a href="/projects" className="btn btn-primary">
              View All Projects
            </a>
          </div>
        </section>
        <section className="section-4">
          <div className="container">
            <div className="section-title">
              <span>Why Choose Us</span>
              <h2>Building with Quality and Trust</h2>
              <p>
                We combine experience, skilled craftsmanship, and modern
                techniques to deliver construction projects that are reliable,
                safe, and built to last.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <div className="feature-item">
                  <i className="feature-icon">🏗️</i>
                  <h3>Expert Engineering Team</h3>
                  <p>
                    Our skilled engineers ensure every project is designed and
                    executed with precision, safety, and industry standards.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="feature-item">
                  <i className="feature-icon">🧱</i>
                  <h3>Quality Construction Materials</h3>
                  <p>
                    We use only high-grade materials to guarantee durability,
                    strength, and long-lasting performance in every structure.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="feature-item">
                  <i className="feature-icon">📅</i>
                  <h3>On-Time Project Delivery</h3>
                  <p>
                    We follow strict planning and execution schedules to
                    complete projects efficiently without compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-5">
          <div className="container">
            <div className="section-title">
              <span>Testimonials</span>
              <h2>Built on Precision, Backed by Trust</h2>
              <p>
                We bring together hands-on experience, skilled engineering, and
                modern construction practices to deliver projects that are
                structurally sound, efficient, and made to endure real-world
                demands.
              </p>
            </div>
            <div className="row">
              <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="feature-item">
                    <div className="rating">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                    <small className="testimonial-text">
                      " The team delivered excellent construction work with
                      strong attention to detail and completed everything on
                      time with great professionalism. "
                    </small>
                    <div className="reviewer">
                      <div className="avatar">
                        <img src="/images/reviewer-1.png" alt="John Smith" />
                      </div>
                      <div className="reviewer-info">
                        <span className="name">John Smith</span>
                        <span className="role">Homeowner</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feature-item">
                    <div className="rating">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                    <small className="testimonial-text">
                      "We experienced highly professional service and quality
                      craftsmanship that made the entire project smooth,
                      efficient, and completely stress-free."
                    </small>
                    <div className="reviewer">
                      <div className="avatar">
                        <img src="/images/reviewer-2.png" alt="Sarah Johnson" />
                      </div>
                      <div className="reviewer-info">
                        <span className="name">Sarah Johnson</span>
                        <span className="role">Business Owner</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feature-item">
                    <div className="rating">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                    <small className="testimonial-text">
                      "Reliable communication, skilled execution, and consistent
                      focus on quality ensured our project was delivered beyond
                      expectations and truly impressive."
                    </small>
                    <div className="reviewer">
                      <div className="avatar">
                        <img src="/images/reviewer-3.png" alt="Michael Lee" />
                      </div>
                      <div className="reviewer-info">
                        <span className="name">Michael Lee</span>
                        <span className="role">Project Manager</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feature-item">
                    <div className="rating">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                    <small className="testimonial-text">
                      "Their experienced team handled every stage of the project
                      professionally while maintaining quality, safety, and
                      excellent communication throughout."
                    </small>
                    <div className="reviewer">
                      <div className="avatar">
                        <img src="/images/reviewer-4.png" alt="Michael Lee" />
                      </div>
                      <div className="reviewer-info">
                        <span className="name">Michael Carter</span>
                        <span className="role">Construction Consultant</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feature-item">
                    <div className="rating">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                    <small className="testimonial-text">
                      "From planning to final execution, the entire process was
                      organized, efficient, and completed with outstanding
                      attention to detail."
                    </small>
                    <div className="reviewer">
                      <div className="avatar">
                        <img src="/images/reviewer-5.png" alt="Michael Lee" />
                      </div>
                      <div className="reviewer-info">
                        <span className="name">Daniel Roberts</span>
                        <span className="role">Site Engineer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="section-6 py-5">
          <div className="container py-5">
            <div className="section-title">
              <span>Blogs and Articles</span>

              <h2>Latest Insights from the Construction Industry</h2>

              <p>
                Stay updated with expert articles, construction trends,
                innovative building techniques, and industry news shaping the
                future of modern construction and engineering.
              </p>
            </div>

            <div className="row g-4">
              {blogs.map((blog, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <article className="blog-card">
                    <div className="blog-image">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="img-fluid"
                      />
                    </div>

                    <div className="blog-content">
                      <span className="blog-category">Construction News</span>

                      <h3>{blog.title}</h3>

                      <p>{blog.description}</p>

                      <a href="#" className="read-more-btn">
                        Read Article
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <a href="/blogs" className="btn btn-primary">
                View All Articles
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
