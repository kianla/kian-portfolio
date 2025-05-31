"use client";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="portfolio" className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Explore My Popular <span>Projects</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Project 1 */}
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="/assets/images/projects/glove.png" alt="Smart Glove" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">IoT / Health Tech</span>
              <h2>
                <Link href="/projects">Smart Glove for Parkinson’s</Link>
              </h2>
              <p>
                A wearable assistive device designed with Arduino and Processing
                to stabilize hand tremors and provide feedback. Finalist at Khwarizmi Festival.
              </p>
              {/* <Link href="/projects/glove" className="details-btn">
                <i className="far fa-arrow-right" />
              </Link> */}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="/assets/images/projects/vrintro.png" alt="VR Intro" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">VR / Unreal Engine</span>
              <h2>
                <Link href="/projects-masonry">Interactive VR Intro</Link>
              </h2>
              <p>
                A VR introduction scene built for a commercial engineering firm
                using Unreal Engine and spatial audio design.
              </p>
              {/* <Link href="/projects/vrintro" className="details-btn">
                <i className="far fa-arrow-right" />
              </Link> */}
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="/assets/images/projects/backend.png" alt="CMS Backend" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">.NET Core</span>
              <h2>
                <Link href="/projects-masonry">Modular CMS Platform</Link>
              </h2>
              <p>
                Designed and implemented a clean, extensible CMS backend for a corporate client,
                including API management and admin dashboard.
              </p>
              {/* <Link href="/projects/backend" className="details-btn">
                <i className="far fa-arrow-right" />
              </Link> */}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link href="/projects-masonry" className="theme-btn">
            View More Projects <i className="far fa-angle-right" />
          </Link>
        </div>
      </div>

      <div className="bg-lines">
        {[...Array(10)].map((_, i) => <span key={i} />)}
      </div>
    </section>
  );
};

export default Projects;
