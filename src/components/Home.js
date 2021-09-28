import React from "react";
import { generalData } from "../data";

const Home = () => (
  <div>
    <section id="mt_banner_simple" className="darker-mine-shaft">
      <div className="container darker">
        <div className="row">
          <div className="banner-wrapper">
            <div className="banner-caption">
              <h2>
                <span className="rt_animated">
                  {generalData.firstName.toLowerCase() +
                    " " +
                    generalData.middleName.toLowerCase()}
                </span>
                <span className="rt_animated">
                  {generalData.lastName.toLowerCase()}
                </span>
              </h2>
              <p className="subtitle">
                {generalData.jobTitle}
                <span className="border_banner"></span>
              </p>
            </div>
            <div className="banner_img">
              <img src="images/banner-img-black.png" alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact_me" className="contact_me_dark">
      <div className="container darker">
        <div className="row">
          <h1 className="text-center">{generalData.bio}</h1>
          <a href="/contact" className="mt_btn_color">
            contact me
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
