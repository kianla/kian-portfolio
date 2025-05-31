"use client";

import { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mnnvalza", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: form,
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-area py-115 rpy-100 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-8">
            <div className="contact-two-content pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> let’s work together
                </span>
                <h2>Let’s Work Together</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-8">
                  <h3>I'm available at</h3>
                  <h5>
                    <i className="far fa-envelope" /> kianla9519@gmail.com
                  </h5>
                  <h5>
                    <i className="far fa-phone" /> +98 919 414 4395
                  </h5>
                </div>
                <div className="col-sm-4">
                  <div className="arrow">
                    <i className="fal fa-arrow-right" />
                  </div>
                </div>
              </div>
              <div className="social-flow">
                <h4>Follow :</h4>
                <div className="social-style-one">
                  <a href="https://github.com/kianla9519" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://linkedin.com/in/kian-laghaei" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="https://instagram.com/kianlaghaei" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="mailto:kianla9519@gmail.com">
                    <i className="far fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="contact-form-two form-style-one wow fadeInUp delay-0-4s">
              <form onSubmit={handleSubmit} className="contactForm">
                <div className="form-group">
                  <label className="for-title" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                    placeholder="you@example.com"
                  />
                  <label htmlFor="email" className="for-icon">
                    <i className="far fa-envelope" />
                  </label>
                </div>

                <div className="form-group">
                  <label className="for-title" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required
                    placeholder="Your Name"
                  />
                  <label htmlFor="name" className="for-icon">
                    <i className="far fa-user" />
                  </label>
                </div>

                <div className="form-group">
                  <label className="for-title" htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={6}
                    placeholder="Write Message..."
                    required
                  />
                </div>

                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    <i className="far fa-paper-plane" />{" "}
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                  {status === "success" && (
                    <p className="text-success mt-2">✅ Message sent successfully!</p>
                  )}
                  {status === "error" && (
                    <p className="text-danger mt-2">❌ Failed to send message. Try again.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
