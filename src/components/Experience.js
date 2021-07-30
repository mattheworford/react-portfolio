import React from "react";

import Banner from "./Banner";

class Experience extends React.Component {
  render() {
    return (
      <div>
        <Banner title="Experience" />
        <section id="blog_main_sec" className="darker-shaft">
          <div className="container darker">
            <div className="row">
              <div className="col-md-8">
                <EducationSection />
                <WorkSection />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const EducationSection = () => (
  <div>
    <SectionHeader title="EDUCATION" />
    <div className="post_item">
      <div className="post_title">
        <h3>University of Southern California</h3>
        <ul className="list-inline list-unstyled">
          <li>
            <i className="fa fa-graduation-cap"></i>&nbsp;{" "}
            <i>B.S. Computer Science</i>
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-calendar"></i>
            &nbsp; Fall 2017 - Spring 2021
          </li>
        </ul>
      </div>
      <div className="post_body">
        <SectionDetail
          title="Courses"
          body="Artificial
                Intelligence, Operating Systems, Theory of Computing,
                Professional C++, iOS App Development, Computer Systems,
                Algorithms, Software Engineering, Embedded Systems, Data
                Structures, Object-Oriented Design, Discrete Methods & Writing"
        />
        <SectionDetail
          title="Activities"
          body="HackSC, Data
                Science Club, Trojan Scholars Society, Ski and Snowboard Club &
                Pi Kappa Alpha"
        />
        <SectionDetail
          title="Honors"
          body="Presidential Scholar & Dean's List"
        />
      </div>
    </div>
  </div>
);

function WorkSection() {
  const creditKarmaSweSkills = ["Scala", "GraphQL", "TypeScript"];
  const itpSkills = ["C++", "Xcode", "TravisCI"];

  return (
    <div>
      <SectionHeader title="WORK" />
      <WorkExperience
        company="Credit Karma"
        position="Software Engineer II"
        location="Charlotte, NC"
        time="Present"
        description="Building and maintaining the backend services that power Credit Karma's Home product"
        skills={creditKarmaSweSkills}
      />
      <WorkExperience
        company="USC Viterbi School of Engineering"
        position="Teaching Assistant"
        location="Los Angeles, CA"
        time="Spring 2021"
        description="Grade programming assignments, host office hours and make myself available as a resource to help students in Prof. Nathan Greenfield's course: ITP 365 (Managing Data in C++)"
        skills={itpSkills}
      />
    </div>
  );
}

function SectionHeader(props) {
  return <h2 className="blog_heading_border">{props.title}</h2>;
}

function WorkExperience(props) {
  const skills = props.skills;
  const widgetsList = skills.map((item) => (
    <li>
      <a href="/experience"> {item} </a>
    </li>
  ));
  return (
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
            {props.location}
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-calendar"></i>
            &nbsp;&nbsp;
            {props.time}
          </li>
        </ul>
      </div>
      <div className="post_body">
        <p>{props.description}</p>
        <aside>
          <section className="widget widget_tag_cloud">
            <ul>{widgetsList}</ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

function SectionDetail(props) {
  return (
    <p>
      <b>{props.title}</b>&nbsp;&nbsp;&#8212;&nbsp;&nbsp;{props.body}
    </p>
  );
}

export default Experience;
