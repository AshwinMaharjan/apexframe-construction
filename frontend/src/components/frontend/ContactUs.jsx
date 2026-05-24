import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const ContactUs = () => {
  return (
    <>
    <Header />
    <main>
      <section className="section-7">
        <div className="hero d-flex align-items-center">
          <div className="container-fluid">
            <div className="text-center">
<span>Contact Us</span>

<h2>Let’s Build Something Together</h2>

<p>
Have a project in mind or need expert guidance? Get in touch with our team today. We’re here to answer your questions, discuss your requirements, and help bring your construction ideas to life.
</p>
          </div>
          </div>
        </div>
      </section>

      <section className="section-11">
  <div className="container py-5">
    {/* Section Title */}
    <div className="section-title">
      <span>Get In Touch</span>
      <h2>Contact Us</h2>
      <p>
        Have a project in mind or need expert construction advice? Reach out
        to our team — we're ready to help you build something exceptional.
      </p>
    </div>

    <div className="row g-5 align-items-stretch">

      {/* ── Left — Contact Information ── */}
      <div className="col-lg-5">
        <div className="contact-info">
          <h3>Let's Start a Conversation</h3>
          <p className="contact-info__intro">
            Whether you have a question, a project brief, or just want to
            explore what's possible — our doors are always open.
          </p>

          {/* Call Us */}
          <div className="contact-info__item">
            <div className="contact-info__icon">
              <i>📞</i>
            </div>
            <div className="contact-info__detail">
              <span>Call Us</span>
              <a href="tel:+9779800000000">+977 98-0000-0000</a>
              <a href="tel:+9779811111111">+977 98-1111-1111</a>
            </div>
          </div>

          {/* Write Us */}
          <div className="contact-info__item">
            <div className="contact-info__icon">
              <i>✉️</i>
            </div>
            <div className="contact-info__detail">
              <span>Write Us</span>
              <a href="mailto:info@apexframe.com">info@apexframe.com</a>
              <a href="mailto:support@apexframe.com">support@apexframe.com</a>
            </div>
          </div>

          {/* Address */}
          <div className="contact-info__item">
            <div className="contact-info__icon">
              <i>📍</i>
            </div>
            <div className="contact-info__detail">
              <span>Our Address</span>
              <p>Nayabazar, Kathmandu</p>
              <p>Bagmati Province, Nepal</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="contact-info__item">
            <div className="contact-info__icon">
              <i>🕐</i>
            </div>
            <div className="contact-info__detail">
              <span>Working Hours</span>
              <p>Sunday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right — Contact Form ── */}
      <div className="col-lg-7">
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <p className="contact-form__intro">
            Fill in the details below and one of our team members will get
            back to you within 24 hours.
          </p>

          <div className="row g-3">
            {/* Name */}
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="form-control"
                />
              </div>
            </div>

            {/* Email */}
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="form-control"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+977 98-0000-0000"
                  className="form-control"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Enquiry"
                  className="form-control"
                />
              </div>
            </div>

            {/* Message */}
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project or enquiry..."
                  className="form-control"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="col-12">
              <button type="submit" className="contact-form__submit">
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </main>
    <Footer />
    </>
  )
}

export default ContactUs