"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const ProjectMasonryIsotop = () => {
  // Masonry init
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-masonry-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: { columnWidth: ".item" },
      });
    }, 300);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilter = (key) => () => setFilterKey(key);
  const isActive = (key) => (filterKey === key ? "current" : "");

  return (
    <Fragment>
      <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
        <li className={`c-pointer ${isActive("*")}`} onClick={handleFilter("*")}>Show All</li>
        <li className={`c-pointer ${isActive("ai")}`} onClick={handleFilter("ai")}>AI &amp; IoT</li>
        <li className={`c-pointer ${isActive("vr")}`} onClick={handleFilter("vr")}>VR</li>
        <li className={`c-pointer ${isActive("backend")}`} onClick={handleFilter("backend")}>Back‑End</li>
      </ul>

      <div className="row project-masonry-active">
        {/* Smart Glove */}
        <div className="col-xl-4 col-md-6 item ai">
          <div className="project-item style-three wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img src="/assets/images/projects/glove.png" alt="Smart Glove" />
            </div>
            <div className="project-content">
              <Link href="/projects-masonry" className="project-btn">
                <i className="far fa-arrow-right" />
              </Link>
              <span className="sub-title">AI • Biomedical</span>
              <h4><Link href="/projects-masonry">Smart Glove for Parkinson’s</Link></h4>
            </div>
          </div>
        </div>

        {/* VR Intro */}
        <div className="col-xl-4 col-md-6 item vr">
          <div className="project-item style-three wow fadeInUp delay-0-3s">
            <div className="project-image">
              <img src="/assets/images/projects/vrintro.png" alt="VR Intro" />
            </div>
            <div className="project-content">
              <Link href="/projects-masonry" className="project-btn">
                <i className="far fa-arrow-right" />
              </Link>
              <span className="sub-title">VR • Oil &amp; Gas</span>
              <h4><Link href="/projects-masonry">Immersive VR Intro</Link></h4>
            </div>
          </div>
        </div>

        {/* CMS Backend */}
        <div className="col-xl-4 col-md-6 item backend">
          <div className="project-item style-three wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="/assets/images/projects/backend.png" alt="CMS Backend" />
            </div>
            <div className="project-content">
              <Link href="/projects-masonry" className="project-btn">
                <i className="far fa-arrow-right" />
              </Link>
              <span className="sub-title">.NET Core</span>
              <h4><Link href="/projects-masonry">Modular CMS Platform</Link></h4>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectMasonryIsotop;
