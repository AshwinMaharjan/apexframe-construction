import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>ApexFrame</h3>
              <p>
                We are a modern construction company delivering reliable,
                high-quality building solutions with safety, precision, and
                trust.
              </p>
            </div>

            <div className="col-md-3">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Residential Construction</a>
                </li>
                <li>
                  <a href="#">Commercial Projects</a>
                </li>
                <li>
                  <a href="#">Renovation Works</a>
                </li>
                <li>
                  <a href="#">Project Management</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="#">Kathmandu, Nepal</a>
                </li>
                <li>
                  <a href="#">+977 98XXXXXXXX</a>
                </li>
                <li>
                  <a href="#">info@apexframe.com</a>
                </li>
                <li>
                  <a href="#">Mon - Sat: 9AM - 6PM</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 ApexFrame Construction. All rights reserved - Ashwin Maharjan</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer