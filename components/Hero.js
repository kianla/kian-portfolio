import Link from "next/link";
import Counter from "./Counter";

const counterData = [
  { id: 1, text: "Years Of Experience", value: "10", valueType: "plus" },
  { id: 2, text: "Projects Completed", value: "50", valueType: "plus" },
  { id: 3, text: "Client Satisfaction", value: "99", valueType: "percent" },
];

const Hero = () => {
  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center">
          {/* --------- Left text -------------- */}
          <div className="col-lg-4 col-sm-7">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">Hello, I’m</span>
              <h1>
                <b>Kian&nbsp;Laghaei</b> Backend&nbsp;Engineer
              </h1>
              <p>
                Passionate about AI, automation and building scalable systems
                that power immersive digital experiences.
              </p>
              <div className="hero-btns">
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Hire Me <i className="far fa-angle-right" />
                  </a>
                </Link>
                <a href="/assets/docs/Kian_Laghaei_CV.pdf" className="read-more" download>
                  Download Resume <i className="far fa-angle-right" />
                </a>
              </div>
            </div>
          </div>

          {/* --------- Counters -------------- */}
          <div className="col-lg-3 col-sm-5 order-lg-3">
            <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
              {counterData.map((count) => (
                <div className="counter-item counter-text-wrap" key={count.id}>
                  <Counter end={count.value} extraClass={count.valueType} />
                  <span className="counter-title">{count.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --------- Avatar image -------------- */}
          <div className="col-lg-5">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img src="/assets/images/hero/kian.png" alt="Kian Laghaei" />
              <div className="progress-shape">
                <img src="/assets/images/hero/progress-shape.png" alt="Progress" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* decorative background lines */}
      <div className="bg-lines">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </section>
  );
};


// -----------------------------------------------------------------------------
// Variant Hero2 (if needed)
// -----------------------------------------------------------------------------
export const Hero2 = () => (
  <div id="home" className="hero-area-two pt-150 rel z-2">
    <div className="container rel z-3">
      <div className="hero-two-content text-center">
        <span className="sub-title wow fadeInLeft delay-0-1s">
          <i className="flaticon-asterisk-1" /> Backend Engineer
        </span>
        <span className="title wow fadeInLeft delay-0-2s">Hello <small>I’m</small></span>
        <span className="name wow fadeInRight delay-0-4s">Kian Laghaei</span>
        <span className="designations wow fadeInLeft delay-0-6s">
          <span>AI</span> Explorer
        </span>
      </div>

      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7">
          <div className="author-image-part wow fadeIn delay-0-3s">
            <div className="bg-circle" />
            <img src="assets/images/hero/hero-two.png" alt="Kian Laghaei" />
          </div>
        </div>
      </div>
    </div>

    <a href="#about" className="scroll-down">
      <img src="/assets/images/hero/scroll-down.png" alt="scroll down" />
    </a>

    <div className="bg-lines">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  </div>
);
export default Hero2;