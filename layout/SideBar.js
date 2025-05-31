"use client";

import { Fragment } from "react";

const SideBar = () => {
  const toggleSidebar = () => {
    document.body.classList.remove("side-content-visible");
  };

  return (
    <Fragment>
      {/* Backdrop */}
      <div className="form-back-drop" onClick={toggleSidebar} />
      {/* Sidebar Content */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          {/* Close Button */}
          <button
            className="cross-icon"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <span className="fa fa-times" />
          </button>

          {/* Title & Subtitle */}
          <div className="title">
            <h4>Contact Kian Laghaei</h4>
            <p>Backend Engineer | AI Explorer | Game Developer (VR/Unreal)</p>
          </div>

          {/* Contact Form */}
          <div className="appointment-form">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                toggleSidebar();
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Social Icons */}
          <div className="social-style-one">
            <a
              href="https://www.kianlaghaei.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <i className="fas fa-globe" />
            </a>
            <a
              href="https://github.com/kianla9519"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/kian-laghaei"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="mailto:kianla9519@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </section>
      {/* End Sidebar */}
    </Fragment>
  );
};

export default SideBar;
