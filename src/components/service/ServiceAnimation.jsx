import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Web Design",
    descriptions: `Attractive and functional website design that reflects your style and goals. 
    Modern and professional design that captures the essence of your business in the digital world.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `Turn your ideas into functional and dynamic websites. 
    Build an interactive website that meets your requirements and goals.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "E-commerce",
    descriptions: `Establish and expand your online store effectively. 
    Develop an e-commerce platform that is attractive, easy to use and secure.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
