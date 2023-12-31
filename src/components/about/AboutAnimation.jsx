import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me-me.png" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Web Developer</p>
                  <h3>Humberto Alonso</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                  <p>
                    I'm a Freelancer Web Developer with over 3 years of
                    experience. I'm from México I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
                  </p>
                 {/*} <p>
                    I'm a Freelancer Front-end Developer with over 3 years of
                    experience. I'm from San Francisco. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
  </p>*/}
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Humberto Alonso</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>4th June 2000</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>23 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Aguascalientes, México</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+52) 449 124 5952</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>alonso.humberto0401@gmail.com</span>
                        </li>
                       {/*} <li>
                          <label>Skype: </label>
                          <span>nairob.40</span>
</li>*/}
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
         {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>*/}
          {/* End separated */}
          {  /*
          <div className="title">
            <h3>Awards.</h3>
          </div>

        <Awards />*/}
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
{/*}
          <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials />*/}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
