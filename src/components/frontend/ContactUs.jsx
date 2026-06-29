import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

/* ── Toast Component ── */
const Toast = ({ message, type, onClose }) => {
  if (!message) return null

  const styles = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 1.25rem',
    borderRadius: '0.5rem',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    background: type === 'success' ? '#1a7a4a' : '#c0392b',
    color: '#fff',
    fontSize: '0.95rem',
    fontWeight: 500,
    minWidth: '280px',
    maxWidth: '380px',
    animation: 'slideUp 0.3s ease',
  }

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div style={styles} role="alert">
        <span style={{ fontSize: '1.2rem' }}>
          {type === 'success' ? '✅' : '❌'}
        </span>
        <span style={{ flex: 1 }}>{message}</span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '1.1rem',
            lineHeight: 1,
            opacity: 0.8,
            padding: 0,
          }}
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </>
  )
}

/* ── Main Component ── */
const ContactUs = () => {
  const FORMSPREE_URL = 'https://formspree.io/f/xwvdbqzw'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [toast, setToast] = useState({ message: '', type: '' })

  const showToast = (message, type) => {
    setToast({ message, type })
    setTimeout(() => setToast({ message: '', type: '' }), 5000)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        showToast('Message sent! We\'ll get back to you within 24 hours.', 'success')
      } else {
        throw new Error('Server error')
      }
    } catch {
      setStatus('error')
      showToast('Something went wrong. Please try again or email us directly.', 'error')
    } finally {
      setStatus('idle')
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="section-7">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Contact Us</span>
                <h2>Let's Build Something Together</h2>
                <p>
                  Have a project in mind or need expert guidance? Get in touch with our team
                  today. We're here to answer your questions, discuss your requirements, and
                  help bring your construction ideas to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section className="section-11">
          <div className="container py-5">
            <div className="section-title">
              <span>Get In Touch</span>
              <h2>Contact Us</h2>
              <p>
                Have a project in mind or need expert construction advice? Reach out to our
                team — we're ready to help you build something exceptional.
              </p>
            </div>

            <div className="row g-5 align-items-stretch">

              {/* ── Left — Contact Information ── */}
              <div className="col-lg-5">
                <div className="contact-info">
                  <h3>Let's Start a Conversation</h3>
                  <p className="contact-info__intro">
                    Whether you have a question, a project brief, or just want to explore
                    what's possible — our doors are always open.
                  </p>

                  <div className="contact-info__item">
                    <div className="contact-info__icon"><i>📞</i></div>
                    <div className="contact-info__detail">
                      <span>Call Us</span>
                      <a href="tel:+9779800000000">+977 98-0000-0000</a>
                      <a href="tel:+9779811111111">+977 98-1111-1111</a>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon"><i>✉️</i></div>
                    <div className="contact-info__detail">
                      <span>Write Us</span>
                      <a href="mailto:info@apexframe.com">info@apexframe.com</a>
                      <a href="mailto:support@apexframe.com">support@apexframe.com</a>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon"><i>📍</i></div>
                    <div className="contact-info__detail">
                      <span>Our Address</span>
                      <p>Nayabazar, Kathmandu</p>
                      <p>Bagmati Province, Nepal</p>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon"><i>🕐</i></div>
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
                    Fill in the details below and one of our team members will get back to
                    you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            placeholder="your_email@example.com"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            placeholder="+977 98-0000-0000"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="subject">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            placeholder="Project Enquiry"
                            className="form-control"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea
                            id="message"
                            rows={5}
                            placeholder="Tell us about your project or enquiry..."
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="contact-form__submit"
                          disabled={status === 'submitting'}
                          style={{ opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
                        >
                          {status === 'submitting' ? 'Sending…' : 'Send Message →'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* ── Toast ── */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: '' })}
      />
    </>
  )
}

export default ContactUs