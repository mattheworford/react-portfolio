import React from "react";
import { experienceData } from "../data";

import Banner from "./Banner";

const workSkills = experienceData.work
  .map((item) => item.skills)
  .flat()
  .filter((v, i, a) => a.indexOf(v) === i);
const researchSkills = experienceData.research
  .map((item) => item.skills)
  .flat()
  .filter((v, i, a) => a.indexOf(v) === i);
const allSkills = workSkills.concat(researchSkills);

const Experience = () => (
  <div>
    <Banner title="Experience" />
    <section id="blog_main_sec" className="darker-shaft">
      <div className="container darker">
        <div className="row">
          <div className="col-md-8">
            <EducationSection />
            <WorkSection />
            <ResearchSection />
          </div>
          <aside className="col-md-4">
            <div className="widget widget_recent_entries">
              <div className="recent-posts">
                <h3 className="blog_heading_border"> HONORS & AWARDS </h3>
                {experienceData.honorsAndAwards.map((item) => (
                  <div className="recent-posts-block">
                    <p>{item.title}</p>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="clearfix"></div>
            <section className="widget widget_tag_cloud">
              <h3 className="blog_heading_border"> ALL SKILLS </h3>
              <ul>
                {allSkills.map((skill) => (
                  <li>
                    <a> {skill} </a>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </section>
  </div>
);

const EducationSection = () => (
  <div>
    <SectionHeader title="EDUCATION" />
    <div className="post_item">
      <div className="post_title">
        <h3>{experienceData.education.school}</h3>
        <ul className="list-inline list-unstyled">
          <li>
            <i className="fa fa-graduation-cap"></i>&nbsp;{" "}
            <i>{experienceData.education.degree}</i>
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-calendar"></i>
            &nbsp; <i>{experienceData.education.time}</i>
          </li>
        </ul>
      </div>
      <div className="post_body">
        <SectionDetail
          title="Courses"
          body={experienceData.education.courses}
        />
        <SectionDetail
          title="Activities"
          body={experienceData.education.activities}
        />
        <SectionDetail title="Honors" body={experienceData.education.honors} />
      </div>
    </div>
  </div>
);

const WorkSection = () => (
  <div className="work_section">
    <SectionHeader title="WORK" />
    {experienceData.work.map((item) => {
      return (
        <WorkExperience
          company={item.company}
          position={item.position}
          location={item.location}
          time={item.time}
          description={item.description}
          skills={item.skills}
        />
      );
    })}
  </div>
);

const ResearchSection = () => (
  <div className="research_section">
    <SectionHeader title="RESEARCH" />
    {experienceData.research.map((item) => {
      return (
        <ResearchExperience
          company={item.company}
          location={item.location}
          time={item.time}
          description={item.description}
          skills={item.skills}
        />
      );
    })}
  </div>
);

const SectionHeader = (props) => (
  <h2 className="blog_heading_border">{props.title}</h2>
);

const WorkExperience = (props) => (
  <div className="post_item">
    <div className="post_title">
      <h3>{props.company}</h3>
      <ul className="list-inline list-unstyled">
        <li>
          <i className="fa fa-user"></i>&nbsp; <i>{props.position}</i>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-map-marker"></i>
          &nbsp;&nbsp;
          <i>{props.location}</i>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-calendar"></i>
          &nbsp;&nbsp;
          <i>{props.time}</i>
        </li>
      </ul>
    </div>
    <div className="post_body">
      <p>{props.description}</p>
      <aside>
        <section className="widget widget_tag_cloud">
          <ul>
            <WidgetsList skills={props.skills} />
          </ul>
        </section>
      </aside>
    </div>
  </div>
);

const ResearchExperience = (props) => (
  <div className="post_item">
    <div className="post_title">
      <h3>{props.company}</h3>
      <ul className="list-inline list-unstyled">
        <li>
          <i className="fa fa-map-marker"></i>
          &nbsp;&nbsp;
          <i>{props.location}</i>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-calendar"></i>
          &nbsp;&nbsp;
          <i>{props.time}</i>
        </li>
      </ul>
    </div>
    <div className="post_body">
      <p>{props.description}</p>
      <aside>
        <section className="widget widget_tag_cloud">
          <ul>
            <WidgetsList skills={props.skills} />
          </ul>
        </section>
      </aside>
    </div>
  </div>
);

const WidgetsList = (props) =>
  props.skills.map((item) => (
    <li>
      <a href="/experience"> {item} </a>
    </li>
  ));

const SectionDetail = (props) => (
  <p>
    <b>{props.title}</b>&nbsp;&nbsp;&#8212;&nbsp;&nbsp;{props.body}
  </p>
);

export default Experience;
