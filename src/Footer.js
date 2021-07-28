import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer id="rt_footer" className="footer_dark">
        <div className="container darker">
          <div className="row">
            <div className="col-md-3 text-left">
              <div className="footer_address">
                <p>Los Angeles, CA</p>
                <span>
                  <a href="mailto:mattorford9@gmail.com">
                    mattorford9@gmail.com
                  </a>
                </span>
                <div className="social_icons mb-110 mb-xs-60">
                  <a
                    href="https://twitter.com/mattjorford"
                    title="Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/matthew-orford/"
                    title="LinkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/mjorford"
                    title="GitHub"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    href="https://hackerrank.com/mattorford"
                    title="HackerRank"
                  >
                    <i className="fa fa-code"></i>
                  </a>
                  <a
                    href="https://usc-csm.symplicity.com/profiles/matthew.orford"
                    title="ConnectSC"
                  >
                    <i className="fa fa-graduation-cap"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="footer_logo">
                <a href="youtube.com">
                  <img src="images/logo-icon-white.png" alt="Footer Logo" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="copyright text-left">
                <p>&copy; Matthew Orford 2021</p>
                <p>All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
