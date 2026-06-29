import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { blogs } from "../common/blogData";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  // 404 fallback
  if (!blog) {
    return (
      <>
        <Header />
        <div className="blog-detail-404 container">
          <h2>Blog not found</h2>
          <p>The article you're looking for doesn't exist or may have been moved.</p>
          <Link to="/blogs" className="blog-detail__back">
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Split sections — everything except last is body, last is conclusion
  const bodySections = blog.content.sections.slice(0, -1);
  const conclusion = blog.content.sections[blog.content.sections.length - 1];

  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <section className="section-7">
        <div className="hero d-flex align-items-center">
          <div className="container-fluid">
            <div className="text-center">
              <span>{blog.category}</span>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="section-6 py-5">
        <div className="container py-5">
          <div className="blog-detail__wrapper">

            {/* Back */}
            <Link to="/blogs" className="blog-detail__back">
              Back to Blogs
            </Link>

            {/* Featured Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-detail__image"
            />

            {/* Category + Title */}
            <span className="blog-detail__category">{blog.category}</span>
            <h1 className="blog-detail__title">{blog.title}</h1>

            {/* Intro */}
            <p className="blog-detail__intro">{blog.content.intro}</p>

            {/* Body Sections */}
            {bodySections.map((section, i) => (
              <div key={i} className="blog-detail__section">
                <h4 className="blog-detail__section-heading">
                  {section.heading}
                </h4>
                <p className="blog-detail__section-body">{section.body}</p>
              </div>
            ))}

            {/* Conclusion */}
            <div className="blog-detail__conclusion">
              <h4>{conclusion.heading}</h4>
              <p>{conclusion.body}</p>
            </div>

          </div>

          {/* ── Related Articles ── */}
          <hr className="blog-detail__divider" />

          <div className="blog-detail__related">
            <h3>Related Articles</h3>
            <div className="row g-4">
              {relatedBlogs.map((related) => (
                <div className="col-lg-4 col-md-6" key={related.slug}>
                  <article className="blog-card">
                    <div className="blog-image">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="img-fluid"
                      />
                    </div>
                    <div className="blog-content">
                      <span className="blog-category">{related.category}</span>
                      <h3>{related.title}</h3>
                      <p>{related.description}</p>
                      <Link
                        to={`/blogs/${related.slug}`}
                        className="read-more-btn"
                      >
                        Read Article
                      </Link>
                    </div>
                  </article>
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

export default BlogDetail;