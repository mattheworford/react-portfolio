import React from "react";

import Banner from "./Banner";

const Projects = () => (
  <div>
    <Banner title="Projects" />
    <section id="mt_portfolio" className="gallery-section gallery-page darker-shaft">
      <div className="container darker">
        <div className="row">
          <div className="col-md-12">
            <div className="mt_filter">
              <ul className="list-inline filter">
                <li>
                  <a className="active" href="#" data-filter="*">All</a>
                </li>&nbsp;&nbsp;
                <li>
                  <a href="#" data-filter=".ml">Machine Learning</a>
                </li>&nbsp;&nbsp;
                <li>
                  <a href="#" data-filter=".design">Design</a>
                </li>&nbsp;&nbsp;
                <li>
                  <a href="#" data-filter=".webdevelopment">Web Development</a>
                </li>&nbsp;&nbsp;
                <li>
                  <a href="#" data-filter=".ling">Linguistics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row portfolio_row">
          <div className="isotopeContainer">
            <Project 
              name="Showpa" 
              image="showpa-1.jpg" 
              link="showpa.html" 
              tags="design webdevelopment" 
            />
            <Project
              name="NLP Research - USC Inst. for Creative Technologies"
              image="ict-1.png"
              link="showpa.html"
              tags="ml"
            />
            <Project
              name="RNA Research - USC Dept. of Linguistics" 
              image="ling-1.jpg" 
              link="showpa.html" 
              tags="ml ling" 
            />
            <Project
              name="WussOpen" 
              image="wussopen.jpeg" 
              link="showpa.html" 
              tags="webdevelopment" 
            />
            <Project
              name="Personal Site" 
              image="personal-site.png" 
              link="showpa.html" 
              tags="design webdevelopment" 
            />
          </div>
        </div>
      </div>
    </section>
    <div className="clearfix"></div>
  </div>
);

const Project = (props) => (
  <div className={"portfolio_grid grid no-padding isotopeSelector grid-item " + props.tags}>
    <figure className="effect-chico">
      <img src={"images/portfolio/" + props.image} alt={props.name} />
      <figcaption>
        <h3>
          <a href="/projects/showpa" className="view_proj">{props.name}</a>
          <span>
            <a href={"images/portfolio/" + props.image} className="fancybox open_img"><i className="ion-ios-plus-empty"></i></a>
          </span>
        </h3>
      </figcaption>
    </figure>
  </div>
);

export default Projects;
