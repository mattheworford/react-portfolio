import React from "react";
import { projectsData } from "../data";

import Banner from "./Banner";

const tags = projectsData.projects
  .map((project) => project.tags)
  .flat()
  .filter((v, i, a) => a.indexOf(v) === i);

const Projects = () => (
  <div>
    <Banner title="Projects" />
    <section
      id="mt_portfolio"
      className="gallery-section gallery-page darker-shaft"
    >
      <div className="container darker">
        <div className="row">
          <div className="col-md-12">
            <div className="mt_filter">
              <ul className="list-inline filter">
                <li>
                  <a className="active" href="#" data-filter="*">
                    All
                  </a>
                </li>
                {tags.map((tag) => {
                  return (
                    <li>
                      <a href="#" data-filter={"." + tag.replace(/\s/g, "-")}>
                        {tag}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row portfolio_row">
          <div className="isotopeContainer">
            {projectsData.projects.map((project) => {
              return (
                <Project
                  name={project.name}
                  image={project.image}
                  link={project.link}
                  tags={project.tags
                    .map((tag) => {
                      tag.replace(/\s/g, "-");
                    })
                    .join(" ")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
    <div className="clearfix"></div>
  </div>
);

const Project = (props) => (
  <div
    className={
      "portfolio_grid grid no-padding isotopeSelector grid-item " + props.tags
    }
  >
    <figure className="effect-chico">
      <img src={"images/portfolio/" + props.image} alt={props.name} />
      <figcaption>
        <h3>
          <a href="/projects/showpa" className="view_proj">
            {props.name}
          </a>
          <span>
            <a
              href={"images/portfolio/" + props.image}
              className="fancybox open_img"
            >
              <i className="ion-ios-plus-empty"></i>
            </a>
          </span>
        </h3>
      </figcaption>
    </figure>
  </div>
);

export default Projects;
