import React from "react";

import { generalData } from "../data";

const Footer = () => (
  <footer id="rt_footer" className="footer_dark">
    <div className="container darker">
      <div className="row">
        <div className="col-md-3 text-left">
          <div className="footer_address">
            <p>{generalData.location}</p>
            <span>
              <a href={"mailto:" + generalData.email}>{generalData.email}</a>
            </span>
            <div className="social_icons mb-110 mb-xs-60">
              {generalData.socials.map(social => {
                return (
                  <a title={social.title} href={social.link}>
                    <i className={social.icon}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="footer_logo">
            <a href="/">
              <img src="images/logo-icon-white.png" alt="Footer Logo" />
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="copyright text-left">
            <p>&copy; {generalData.firstName + " " + generalData.lastName + " 2021"}</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
