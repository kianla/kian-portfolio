"use client";
import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";



const About = () => (
  <NoxfolioLayout>
    {/* Page Banner */}
    <PageBanner pageName="About Me" />

    {/* Hero image */}
    <div className="about-main-image-area pt-40">
      <div className="container">
        <div className="about-main-image wow fadeInUp delay-0-5s">
          <img src="/assets/images/about/kian.png" alt="About Kian" />
        </div>
      </div>
    </div>

    {/* About Section */}
    <section className="about-page-area py-130 rpy-100 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Text */}
          <div className="col-lg-6">
            <div className="about-page-content-part rel z-2 rmb-55">
              <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">About Me</span>
                <h2>
                  Crafting <span>Efficient Back-Ends</span> & Intelligent Solutions
                </h2>
                <p>
                  I’m Kian — a back-end engineer with 10 years of coding, 4 years
                  deep in .NET Core, and a growing passion for AI and automation.
                  From building industrial APIs and VR demos to winning
                  Khwarizmi Festival with a smart glove, I love turning complex
                  challenges into elegant code.
                </p>
              </div>

              <ul className="list-style-one two-column pb-30 wow fadeInUp delay-0-2s">
                <li>Back-End Development (.NET Core, C#)</li>
                <li>AI &amp; Data (Python, TensorFlow)</li>
                <li>Process Automation &amp; DevOps</li>
                <li>3-D &amp; VR Prototyping (Unreal, Three.js)</li>
              </ul>

              <Link href="/projects-masonry" className="theme-btn wow fadeInUp delay-0-2s">
                Explore Projects <i className="far fa-angle-right" />
              </Link>
            </div>
          </div>

          {/* Fun stats & buttons */}
          <div className="col-xl-5 col-lg-6">
            <div className="about-right-part wow fadeInLeft delay-0-3s">
              <div className="experience-years">
                <b>10+</b>
                <h5>Years of Coding</h5>
              </div>

              <div className="about-btn one wow fadeInRight delay-0-4s">
                <img src="/assets/images/about/btn-image1.png" alt="Back-End" />
                <h6>.NET / C# Expert</h6>
                <i className="fas fa-arrow-right" />
              </div>

              <div className="about-btn two wow fadeInRight delay-0-5s">
                <img src="/assets/images/about/btn-image2.png" alt="AI" />
                <h6>AI &amp; ML Dev</h6>
                <i className="fas fa-arrow-right" />
              </div>

              <div className="about-btn three wow fadeInRight delay-0-4s">
                <img src="/assets/images/about/btn-image3.png" alt="VR" />
                <h6>VR / 3-D Creator</h6>
                <i className="fas fa-arrow-right" />
              </div>

              {/* Decorative dots */}
              <div className="dot-shape one">
                <img src="/assets/images/shape/about-dots-two.png" alt="Shape" />
              </div>
              <div className="dot-shape two">
                <img src="/assets/images/shape/about-dots-two.png" alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background grid */}
      <div className="bg-lines">{[...Array(10)].map((_, i) => <span key={i} />)}</div>
    </section>

    {/* Services
    <Services extraClass="bgc-black" /> */}

    {/* FAQs
    <section id="faqs" className="faqs-area py-130 rpy-100 rel z-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-image-part rmb-55 wow fadeInUp delay-0-2s">
              <div className="image-one">
                <img src="/assets/images/faqs/faq-one.jpg" alt="FAQ" />
              </div>
              <div className="image-two">
                <img src="/assets/images/faqs/faq-two.jpg" alt="FAQ" />
              </div>
              <div className="square-shape" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content-part rel z-2">
              <div className="section-title mb-40 wow fadeInUp delay-0-4s">
                <h2>
                  Answers to Your <span>Burning Questions</span>
                </h2>
              </div>
              <Faq />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">{[...Array(10)].map((_, i) => <span key={i} />)}</div>
    </section> */}

    {/* Client Logos */}
    <Clients />
  </NoxfolioLayout>
);

export default About;
