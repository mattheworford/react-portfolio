import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Preloader />
        <div id="home"></div>
        <Header />
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
        <Footer />
      </div>
    );
  }
}

export default App;
