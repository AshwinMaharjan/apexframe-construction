import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Blogs = () => {
  const blogs = [
    {
      category: "Industry Trends",
      title: "Modern Construction Trends in 2026",
      description:
        "Explore the latest construction innovations, smart building technologies, and sustainable practices transforming the modern construction industry.",
      image: "/images/blog-1.png",
    },
    {
      category: "Materials & Quality",
      title: "How Quality Materials Improve Durability",
      description:
        "Learn why selecting high-quality construction materials plays a critical role in ensuring structural strength, safety, and long-term performance.",
      image: "/images/blog-2.png",
    },
    {
      category: "Site Safety",
      title: "Essential Safety Practices on Construction Sites",
      description:
        "Discover the importance of workplace safety standards, protective equipment, and proper planning for successful construction project execution.",
      image: "/images/blog-3.png",
    },
    {
      category: "Sustainable Building",
      title: "Green Construction: Building for the Future",
      description:
        "An in-depth look at eco-friendly building methods, energy-efficient designs, and how the industry is reducing its environmental footprint.",
      image: "/images/blog-4.png",
    },
    {
      category: "Project Management",
      title: "How Effective Planning Delivers Projects on Time",
      description:
        "From initial scope to final handover, learn how structured project management frameworks keep complex construction builds running on schedule.",
      image: "/images/blog-5.png",
    },
    {
      category: "Engineering",
      title: "Structural Engineering Innovations Shaping Modern Builds",
      description:
        "Discover how advances in structural engineering — from modular systems to smart materials — are redefining what is possible in contemporary construction.",
      image: "/images/blog-6.png",
    },
  ];

  return (
    <>
      <Header />
      <section className="section-7">
        <div className="hero d-flex align-items-center">
          <div className="container-fluid">
            <div className="text-center">
              <span>Blogs & Articles</span>
              <h2>Insights from the Construction Industry</h2>
              <p>
                Explore expert insights, industry trends, and modern
                construction practices. Our articles share knowledge on
                engineering innovations, design strategies, and the evolving
                future of construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-6 py-5">
        <div className="container py-5">
          <div className="section-title">
            <span>Blogs and Articles</span>
            <h2>Latest Insights from the Construction Industry</h2>
            <p>
              Stay updated with expert articles, construction trends, innovative
              building techniques, and industry news shaping the future of
              modern construction and engineering.
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
                    <span className="blog-category">{blog.category}</span>

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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;