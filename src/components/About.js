import React from "react";

import Banner from "./Banner";

import { aboutData } from "../data";

const About = () => (
  <div>
    <Banner title="About Me" />
    <AboutMeSection />
    <SkillsSection />
  </div>
);

const AboutMeSection = () => (
  <div>
    <section id="mt_about_me" className="darker-shaft">
      <div className="container darker">
        <div className="row">
          <div className="col-xs-12 col-sm-6 mt_about_me">
            <p>
              {aboutData.bio.map(paragraph => {
                return (paragraph != aboutData.bio.lastItem ?
                  <div>{paragraph}<br /><br /></div> : <div>{paragraph}</div>);
              })}
            </p>
            <a
              href={aboutData.resumeLink}
              className="mt_btn_color"
              download={aboutData.resumeLink}
            >
              Resume <i className="fa fa-download"></i>
            </a>
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
              {aboutData.experience.map(position => {
                return (
                  <div className="mt_work_postion">
                    <h4>
                      {position.company} <span>&#183;</span> <i>{position.role}</i>
                    </h4>
                    <p>{position.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mt_skills">
              <h3>top skills</h3>
              <div className="right mt_skill-progress animate move-fadeInUp">
                {aboutData.skills.map(skill => {
                  return <SkillBar name={skill.name} percentage={skill.percentage} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const SkillBar = (props) => (
  <div className="mt_skill-bar" data-percentage={props.percentage}>
    <h4 className="progress-title-holder">
      <span className="progress-title ">{props.name}</span>
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
);

export default About;
