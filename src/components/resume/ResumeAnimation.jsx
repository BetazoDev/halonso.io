import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Jr. Web Developer`,
    jobType: `Developer | Remote`,
    jobDuration: `March 2022 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "DUDE Agency",
    jobDescription: `As a proficient Web Developer at Dude Agency, 
    I specialize in comprehensive website construction using leading CMS platforms such as WordPress, Duda, and HubSpot. 
    My role encompasses the entire project lifecycle, including plugin and theme development, ensuring clients receive tailored and highly functional websites. 
    I excel in creating custom themes to enhance user experience and adeptly crafting plugins to optimize site performance. With a keen eye for detail, 
    I manage updates, maintenance, and swiftly address client inquiries through our task management system, consistently showcasing the team's unwavering 
    commitment to top-notch customer support and satisfaction. My contributions significantly streamline workflows, while my dedication to innovation 
    and excellence underscores my role in driving Dude Agency's success.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Jr. Web Developer`,
    jobType: `Developer | Face-to-face`,
    jobDuration: `December 2021 - March 2022`,
    timeDuraton: `Full Time`,
    compnayName: "Fundacion Acuerdo UVTC",
    jobDescription: `As a self-employed Freelance Web Developer, 
    I specialize in comprehensive end-to-end website construction and design projects using WordPress, 
    shaping seamless online platforms through meticulous build outs, intricate web design, and continuous updates for optimal performance. 
    Operating individually, I manage all aspects of the WordPress websites, from inception to completion, ensuring each project is a testament to precision 
    and creativity that goes beyond client expectations. My expertise extends to ongoing optimizations, analyzing user experiences, 
    and refining navigation to achieve unparalleled visitor satisfaction, showcasing my commitment to excellence and autonomy in WordPress development.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Web Programmer`,
    jobType: `MERN Developer | Face-to-face`,
    jobDuration: `May 2021 - December 2021`,
    timeDuraton: `Full Time`,
    compnayName: "Compu Depot",
    jobDescription: `As a dedicated MERN Stack Developer, I led the design and development of front-end components for dynamic web applications, 
    seamlessly bridging the gap between user interfaces and back-end functionality. Through my expertise in MongoDB, Express.js, React, and Node.js, 
    I crafted visually appealing and responsive interfaces, collaborating seamlessly with back-end developers to ensure optimal data synchronization 
    and application performance. By translating design concepts into functional components, implementing best coding practices, 
    and actively engaging in debugging and troubleshooting, I played a pivotal role in delivering high-quality, user-centric 
    applications that underscored Compudepot's commitment to innovation and excellence in MERN technology utilization.`,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "2021-2023",
    degreeTitle: "Enginnering Software Development & Management",
    instituteName: "Universidad Tecnológica El Retoño",
  },
  {
    passingYear: "2018-2020",
    degreeTitle: "TSU Software Multiplatform Development",
    instituteName:"Universidad Tecnológica El Retoño",
  },
  {
    passingYear: "2015-2018",
    degreeTitle: "Bachellor degree in tourist hospitallity",
    instituteName: "Conalep Aguascalientes IV",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
