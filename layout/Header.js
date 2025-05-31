"use client";

import { noxfolioUtilits } from "@/utility";
import Link from "next/link";
import { useEffect, useState } from "react";
import MultiMenu from "./Menu";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    noxfolioUtilits.stickyNav();
  }, []);

  const toggleSidebar = () => {
    document.querySelector("body").classList.add("side-content-visible");
  };

  return (
    <header className="main-header header-two menu-absolute">
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Kian Laghaei Logo"
                      title="Kian Laghaei"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Kian Laghaei Logo"
                          title="Kian Laghaei"
                        />
                      </a>
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="navbar-toggle me-4"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                    onClick={() => setToggle(!toggle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${
                    toggle ? "show" : ""
                  }`}
                >
                  <MultiMenu />
                </div>
              </nav>
            </div>
            <div className="menu-btns">
             
              <Link legacyBehavior href="/contact">
                <a className="theme-btn">Let’s Talk</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
