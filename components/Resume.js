"use client";

const Resume = () => {
  return (
    <section id="resume" className="resume-area pt-130 rpt-100 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s">
              <i className="flaticon-asterisk-1" />
            </div>
          </div>
          <div className="col-lg-9">
            {/* Header */}
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">My Resume</span>
                  <h2>
                    Real <span>Problem&nbsp;Solutions</span> Experience
                  </h2>
                </div>
              </div>
            </div>

            {/* Work & Education Items */}
            <div className="resume-items-wrap">
              <div className="row justify-content-between">
                {/* Backend Engineer */}
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon"><i className="far fa-arrow-right" /></div>
                    <div className="content">
                      <span className="years">2023 – Now</span>
                      <h4>Backend Engineer</h4>
                      <span className="company">Industrial Engineering Firm</span>
                    </div>
                  </div>
                </div>

                {/* Freelance AI Developer */}
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon"><i className="far fa-arrow-right" /></div>
                    <div className="content">
                      <span className="years">2022 – Now</span>
                      <h4>Freelance AI Developer</h4>
                      <span className="company">Remote</span>
                    </div>
                  </div>
                </div>

                {/* VR Content Creator */}
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-2s">
                    <div className="icon"><i className="far fa-arrow-right" /></div>
                    <div className="content">
                      <span className="years">2020 – 2022</span>
                      <h4>VR Content Creator</h4>
                      <span className="company">Freelance</span>
                    </div>
                  </div>
                </div>

                {/* Student Researcher */}
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon"><i className="far fa-arrow-right" /></div>
                    <div className="content">
                      <span className="years">2019 – 2020</span>
                      <h4>Student Researcher</h4>
                      <span className="company">Khwarizmi Project</span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-2s">
                    <div className="icon"><i className="far fa-arrow-right" /></div>
                    <div className="content">
                      <span className="years">2021 – 2025</span>
                      <h4>B.Sc. Computer Engineering</h4>
                      <span className="company">Tehran</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background lines */}
      <div className="bg-lines">
        {Array.from({ length: 10 }).map((_, i) => <span key={i} />)}
      </div>
    </section>
  );
};

export default Resume;
