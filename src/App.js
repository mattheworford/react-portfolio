import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="loading">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
        <div id="home"></div>
        <header id="rt_header">
          <nav className="darker">
            <div className="navbar-wrapper" id="navigation">
              <div
                className="navbar navbar-default navbar-fixed-top reveal-menu-home darker-mine-shaft"
                role="navigation"
              >
                <div className="container nav-container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="navbar-header">
                        <button
                          type="button"
                          className="navbar-toggle"
                          data-toggle="collapse"
                          data-target=".navbar-collapse"
                        >
                          <span className="sr-only">toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                        <div className="logo">
                          <a href="index.html">
                            <img src="images/logo-white.png" alt="Logo" />
                          </a>
                        </div>
                      </div>
                      <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                          <li>
                            <a href="index.html">home</a>
                          </li>
                          <li>
                            <a href="about.html">about</a>
                          </li>
                          <li className="dropdown">
                            <a
                              href="youtube.com"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              portfolio <i className="ion-ios-arrow-down"></i>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="resume.html">experience</a>
                              </li>
                              <li>
                                <a href="projects.html">projects</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section
          id="mt_banner_simple"
          style={{background: "url('./public/images/banner-bg-dark.png');"}}
          className="darker-mine-shaft"
        >
          <div className="container darker">
            <div className="row">
              <div className="banner-wrapper">
                <div className="banner-caption">
                  <h2>
                    <span className="rt_animated">
                      <span>matthew john</span>
                    </span>
                    <span className="rt_animated">
                      <span>orford</span>
                    </span>
                  </h2>
                  <p className="subtitle">
                    backend software engineer
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
              <h1 className="text-center">
                a computer science student currently based in l.a. with
                experience in native app development, natural language
                processing, various web technologies and much more
              </h1>
              <a href="contact.html" className="mt_btn_color">
                contact me
              </a>
            </div>
          </div>
        </section>
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
      </div>
    );
  }
}

export default App;
