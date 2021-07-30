import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <section
          id="mt_banner_simple"
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
                recently-graduated software engineer currently based in salt
                lake city, ut with a wide array of interests ranging from
                servers to ski slopes
              </h1>
              <a href="/contact" className="mt_btn_color">
                contact me
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
