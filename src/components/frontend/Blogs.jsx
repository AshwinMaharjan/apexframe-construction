import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { blogs } from "../common/blogData";

// import { blogs } from "../data/blogData";

const Blogs = () => {
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
                Explore expert insights, industry trends, and modern construction
                practices. Our articles share knowledge on engineering innovations,
                design strategies, and the evolving future of construction.
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
              building techniques, and industry news shaping the future of modern
              construction and engineering.
            </p>
          </div>

          <div className="row g-4">
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6" key={blog.slug}>
                <article className="blog-card">
                  <div className="blog-image">
                    <img src={blog.image} alt={blog.title} className="img-fluid" />
                  </div>
                  <div className="blog-content">
                    <span className="blog-category">{blog.category}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <Link to={`/blogs/${blog.slug}`} className="read-more-btn">
                      Read Article
                    </Link>
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