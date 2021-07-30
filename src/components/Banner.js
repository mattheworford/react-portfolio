import React from "react";

function Banner(props) {
  return (
    <div>
      <section id="mt_general_banner" className="darker-mine-shaft">
        <div className="container darker">
          <div className="row">
            <div className="col-xs-12">
              <div className="banner-wrapper">
                <div
                  className="banner-caption wow fadeInUp"
                  data-wow-delay="0.3"
                >
                  <h1>{props.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
