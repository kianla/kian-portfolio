"use client";

import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import { useState } from "react";



const ContactPage = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    const response = await fetch("https://formspree.io/f/mnnvalza", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (response.ok) {
      setStatus("success");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <NoxfolioLayout>
      <PageBanner pageName="Contact Me" />

      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            {/* اطلاعات تماس */}
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let’s Talk About <span>New Ideas</span>
                  </h2>
                  <p>
                    If you’ve got a challenge or just want to say hi, drop me a line.
                  </p>
                </div>
                <h6>Head Office</h6>
                <ul className="widget_contact_info mb-35">
                  <li>
                    <i className="far fa-map-marker-alt" /> Tehran, Iran
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    <a href="mailto:kianla9519@gmail.com">kianla9519@gmail.com</a>
                  </li>
                  <li>
                    <i className="far fa-phone" />
                    <a href="tel:+989194144395">+98 919 414 4395</a>
                  </li>
                </ul>
                <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
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

            {/* فرم تماس */}
            <div className="col-lg-8">
              <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          className="form-control"
                          placeholder="Project Idea"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone (optional)</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="form-control"
                          placeholder="+98 912 345 6789"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="form-control"
                          placeholder="Tell me a bit about your project…"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="theme-btn">
                        {status === "loading"
                          ? "Sending..."
                          : "Send Message"}{" "}
                        <i className="far fa-angle-right" />
                      </button>
                      {status === "success" && (
                        <p className="text-success mt-3">✅ Message sent successfully!</p>
                      )}
                      {status === "error" && (
                        <p className="text-danger mt-3">❌ Something went wrong. Try again.</p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-lines">
          {[...Array(10)].map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </section>
    </NoxfolioLayout>
  );
};

export default ContactPage;
