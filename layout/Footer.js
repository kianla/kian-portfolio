import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    case 2:
      return <Footer2 />;

    default:
      return <Footer1 />;
  }
};

export default Footer;

const Footer1 = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer className="main-footer rel z-1">
      <div className="footer-top-wrap bgc-black pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <div className="footer-widget widget_logo wow fadeInUp delay-0-2s">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/logos/logo.png" alt="Logo" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  {/* <li>
                    <Link legacyBehavior href="services">
                      Service
                    </Link>
                  </li> */}
                  <li>
                    <Link legacyBehavior href="projects">
                      Projects
                    </Link>
                  </li>
                  {/* <li>
                    <Link legacyBehavior href="services#pricing">
                      Pricing
                    </Link>
                  </li> */}
                  <li>
                    <Link legacyBehavior href="about#faqs">
                      Faqs
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-widget widget_newsletter wow fadeInUp delay-0-4s">
                <form action="#">
                  <label htmlFor="email-address">
                    <i className="far fa-envelope" />
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    placeholder="Email Address"
                    required=""
                  />
                  <button>
                    Sign Up <i className="far fa-angle-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-5">
              <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                <h6 className="footer-title">Address</h6>
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt" /> Tehran
                  </li>
                  <li>
                    <i className="far fa-envelope" />{" "}
                    <a
                href="mailto:kianla9519@gmail.com"
                className="underline hover:text-white"
              >
                kianla9519@gmail.com
              </a>
                  </li>
                  <li>
                    <i className="far fa-phone" />{" "}
                    <a href="tel:+989194144395" className="underline hover:text-white">
                <span dir="ltr">+98 919 414 4395</span>
              </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5 rpt-25">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              
              <div className="mt-16 border-t border-zinc-700 py-6 text-center text-xs text-zinc-400">
               <span className="text-white">Kian Laghaei</span>. All rights reserved.
               </div>
            </div>
            
            <div className="col-lg-6 text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="https://www.kianlaghaei.com">Website</a>
                </li>
                <li>
                  <a href="https://github.com/kianla9519">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kian-laghaei">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <a href="#" className="scroll-top scroll-to-target d-inline-block">
            <span className="fas fa-angle-double-up" />
          </a>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </footer>
  );
};


