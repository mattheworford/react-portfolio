import React from "react";

import { projectsData } from "../data";

const ProjectDetails = (props) => {
  console.log(props.name);
  const currIndex = projectsData.projects.findIndex(
    (item) => item.key === props.name
  );
  console.log(currIndex);
  const currProject = projectsData.projects[currIndex];
  const nextIndex =
    currIndex === projectsData.projects.length - 1 ? 0 : currIndex + 1;
  const nextProject = projectsData.projects[nextIndex];
  const prevIndex =
    currIndex === 0 ? projectsData.projects.length - 1 : currIndex - 1;
  const prevProject = projectsData.projects[prevIndex];

  return (
    <div>
      <section
        id="rt_banner_slider"
        // style="background: url(http://via.placeholder.com/1600x1080); "
      >
        <div
          class="slide-inner"
          style={{
            backgroundImage:
              'url("images/portfolio/' + currProject.headerImage + '")',
          }}
        ></div>
      </section>
      <section id="portfolio_detail" className="darker-mine-shaft">
        <div className="container darker">
          <div className="row">
            <div className="col-xs-12">
              <div className="portfolio_description">
                <h1>{currProject.name}</h1>
                <p>{currProject.description}</p>
                <div className="portfolio_other_detail">
                  <ul>
                    <li>
                      <div className="mt_sidebar_tx">
                        <i className="fa fa-calendar"></i>
                        <span>&nbsp; {currProject.time}</span>
                      </div>
                    </li>
                    <li>
                      <div className="mt_sidebar_tx">
                        <i className="fa fa-wrench"></i>
                        <span>&nbsp; {currProject.skills.join(", ")}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <a
                  href={currProject.externalLink}
                  className="mt_btn_color visit_button"
                >
                  visit
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="portfolio_pagination">
                <div className="col-md-5 col-xs-5">
                  <div className="prev_post">
                    <a href={prevProject.link}>
                      <div className="prev_txt">
                        <span className="left_icon">
                          <i className="ion-ios-arrow-thin-left"></i>
                        </span>
                        <em>Previous</em>
                        <p>{prevProject.name}</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xs-2">
                  <div className="all_portfolio">
                    <a href="/projects">
                      <i className="ion-ios-keypad-outline"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-5 col-xs-5">
                  <div className="next">
                    <a href={nextProject.link}>
                      <div className="nxt_txt">
                        <span className="next_icon">
                          <i className="ion-ios-arrow-thin-right"></i>
                        </span>
                        <em>Next</em>
                        <p>{nextProject.name}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
