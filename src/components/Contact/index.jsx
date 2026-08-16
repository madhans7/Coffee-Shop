import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <main className="contact-page" id="contact">
      <section className="contact-hero">
        <div>
          <p>COME SAY HELLO</p>

          <h1>
            Let's make
            <br />
            <span>something memorable.</span>
          </h1>

          <p>
            Whether you're here for your morning coffee, a quick catch-up with
            friends, or a peaceful afternoon, we'd love to have you.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>
            We'd love to
            <br />
            <span>hear from you.</span>
          </h2>

          <p className="contact-description">
            Have a question, want to reserve a table, or simply want to know more
            about our coffee? Reach out to us anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">📍</div>

              <div>
                <h3>Visit Us</h3>
                <p>
                  Coffee Shop,
                  <br />
                  Main Street,
                  <br />
                  Erode, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">📞</div>

              <div>
                <h3>Call Us</h3>
                <p>+91 98765 4xxxx</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">✉️</div>

              <div>
                <h3>Email Us</h3>
                <p>hello@coffeeshop.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">🕐</div>

              <div>
                <h3>Opening Hours</h3>
                <p>
                  Monday – Sunday
                  <br />
                  7:00 AM – 10:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form">
            <p className="form-label">SEND US A MESSAGE</p>

            <h2>
              How can we
              <br />
              help you?
            </h2>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>

                  <input type="text" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>

                  <input type="tel" placeholder="+91" />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input type="email" placeholder="you@example.com" />
              </div>

              <div className="form-group">
                <label>Subject</label>

                <select>
                  <option value="">Select a subject</option>

                  <option value="general">General Enquiry</option>
                  <option value="reservation">Table Reservation</option>
                  <option value="feedback">Feedback</option>
                  <option value="event">Private Event</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Message</label>

                <textarea rows="5" placeholder="Tell us how we can help..."></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="location-content">
          <p>FIND YOUR WAY TO US</p>

          <h2>
            Your next coffee
            <br />
            <span>is closer than you think.</span>
          </h2>

          <p>
            Drop by, take a seat, and let the aroma of freshly brewed coffee do
            the rest.
          </p>

          <a
            href="https://maps.app.goo.gl/ML56nynavyKNGykA9"
            target="_blank"
            rel="noopener noreferrer"
            className="location-btn"
          >
            Open in Google Maps 📍
          </a>
        </div>

        <div className="location-map">
          <iframe
            title="Coffee Shop Location"
            src="https://www.google.com/maps?q=Bengaluru,Karnataka&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="contact-cta">
        <p>SEE YOU SOON</p>

        <h2>
          Come for the coffee.
          <br />
          <span>Stay for the experience.</span>
        </h2>
      </section>
    </main>
  );
};

export default Contact;