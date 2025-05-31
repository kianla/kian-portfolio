"use client";
import Link from "next/link";

const items = [
  { id: 1, name: ".NET Core",   image: "assets/images/skills/skill1.png",   value: 90 },
  { id: 2, name: "C#",         image: "assets/images/skills/skill2.png",   value: 88 },
  { id: 3, name: "Python",     image: "assets/images/skills/skill3.png",   value: 80 },
  { id: 4, name: "SQL",        image: "assets/images/skills/skill4.png",      value: 85 },
  { id: 7, name: "Arduino",    image: "assets/images/skills/skill7.png",  value: 90 },
  { id: 5, name: "React", image: "assets/images/skills/skill6.png",       value: 70 },
  { id: 6, name: "JavaScript",      image: "assets/images/skills/skill5.png",    value: 75 },
  { id: 8, name: "TensorFlow", image: "assets/images/skills/skill8.png",   value: 65 },
];

const Skill = () => (
  <section id="skills" className="skill-area rel z-1">
    <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
      <div className="container">
        <div className="row gap-100">
          {/* Intro */}
          <div className="col-lg-5">
            <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">My Skills</span>
                <h2>
                  Core <span>Tech&nbsp;Stack</span> & Experience
                </h2>
                <p>
                  Ten years of coding, four in .NET. Solid back‑end engineering
                  with a growing focus on AI, data, and hardware prototyping.
                </p>
              </div>
              <Link href="/about" className="theme-btn">
                Learn More <i className="far fa-angle-right" />
              </Link>
            </div>
          </div>

          {/* Skill cards */}
          <div className="col-lg-7">
            <div className="skill-items-wrap">
              <div className="row">
                {items.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                    <div className="skill-item wow fadeInUp delay-0-2s">
                      <img src={item.image} alt={item.name} />
                      <h5>{item.name}</h5>
                      <span className="percent">{item.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Decorative lines */}
    <div className="bg-lines">{[...Array(10)].map((_, i) => <span key={i} />)}</div>
  </section>
);

export default Skill;
