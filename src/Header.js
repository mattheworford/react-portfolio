import React from 'react';

class Header extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Header;
