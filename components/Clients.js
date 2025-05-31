"use client";
import Link from "next/link";

const Clients = () => {
  return (
    <div className="client-logo-area rel z-1 pt-190 rpt-100 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-15">
            <div className="section-title text-center pt-5 mb-65 wow fadeInUp delay-0-2s">
              <h6>
                Trusted by <span>Real Teams & Partners</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="client-logo-wrap justify-content-center">
          <Link href="http://www.nargan.com/" className="client-logo-item wow fadeInUp delay-0-2s">
            <img
              src="/assets/images/client-logos/client-logo1.png"
              alt="Nargan"
             
            />
          </Link>
          <Link href="https://www.youtube.com/@OrbitNauts" className="client-logo-item wow fadeInUp delay-0-2s">
            <img
              src="/assets/images/client-logos/client-logo2.png"
              alt="OrbitNauts"
            />
          </Link>
        </div>
      </div>
      <div className="bg-lines">
        {[...Array(10)].map((_, i) => <span key={i} />)}
      </div>
    </div>
  );
};

export default Clients;
