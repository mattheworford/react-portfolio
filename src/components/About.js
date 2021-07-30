import React from "react";

import Banner from "./Banner";

class About extends React.Component {
  render() {
    return (
      <div>
        <Banner title="About Me" />
        <AboutMeSection />
        <SkillsSection />
      </div>
    );
  }
}

const AboutMeSection = () => (
  <div>
    <section id="mt_about_me" className="darker-shaft">
      <div className="container darker">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="mt_about_me">
              <p>
                Until my sophomore year of college, the world of technology
                represented a daunting mystery I figured I would never
                understand. Fortunately, that fear turned into curiosity,
                leading me to sign up for a computer science class. The course
                introduced me to data structures and basic algorithms and was
                lead by a professor dead set on changing our perspective on
                programming. He urged us to look at it as an exercise in
                problem-solving and domain modeling that should be enjoyed
                rather than avoided. I guess that’s when I caught ‘the bug,’ and
                I never looked back.
              <br/><br/>
                Outside of school and work, which you can read about in my
                portfolio, I'm an avid skier and biker. As a result, much of my
                interest in technology stems from the ways it has been
                integrated into the world of outdoor sports. I still see a lot
                of potential for growth both inside and outside of that industry
                as countless companies could stand to learn from the
                adaptability it demands.
              </p>
              <a
                href="Matthew_Orford_Resume.pdf"
                className="mt_btn_color"
                download="Matthew_Orford_Resume.pdf"
              >
                Resume <i className="fa fa-download"></i>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-push-1 col-md-5">
            <div className="about_img">
              <img src="images/about.jpg" alt="About Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const SkillsSection = () => (
  <div>
    <section id="mt_experience_sec" className="darker-mine-shaft">
      <div className="container darker">
        <div className="row">
          <div className="col-sm-6">
            <div className="mt_experience">
              <h3>current work &amp; education</h3>
              <div className="mt_work_postion">
                <h4>Credit Karma <span>&#183;</span>{" "}<i>Software Engineer II</i></h4>
                <p>Building and maintaining backend microservices that power the company's mortgage-related products</p>
              </div>
              <div className="mt_work_postion">
                <h4>University of Southern California</h4>
                <p>
                  Received my B.S. in Computer Science from the Viterbi School of Engineering in the Spring of 2021
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mt_skills">
              <h3>top skills</h3>
              <div className="right mt_skill-progress animate move-fadeInUp">
                <div className="mt_skill-bar" data-percentage="80%">
                  <h4 className="progress-title-holder">
                    <span className="progress-title ">C++</span>
                    <span className="progress-wrapper">
                      <span className="progress-mark">
                        <span className="percent"></span>
                      </span>
                    </span>
                  </h4>
                  <div className="progress-outter">
                    <div className="progress-content"></div>
                  </div>
                </div>
                <div className="mt_skill-bar" data-percentage="85%">
                  <h4 className="progress-title-holder">
                    <span className="progress-title ">Python</span>
                    <span className="progress-wrapper">
                      <span className="progress-mark">
                        <span className="percent"></span>
                      </span>
                    </span>
                  </h4>
                  <div className="progress-outter">
                    <div className="progress-content"></div>
                  </div>
                </div>
                <div className="mt_skill-bar" data-percentage="65%">
                  <h4 className="progress-title-holder">
                    <span className="progress-title ">Scala</span>
                    <span className="progress-wrapper">
                      <span className="progress-mark">
                        <span className="percent"></span>
                      </span>
                    </span>
                  </h4>
                  <div className="progress-outter">
                    <div className="progress-content"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
