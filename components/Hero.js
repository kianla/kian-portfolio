import Link from "next/link";
import Counter from "./Counter";

export const Hero = () => (
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
export default Hero;