"use client";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AccordionSection = () => {
  // Configuration for the carousel
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Auto-scroll interval (3 seconds)
    arrows: false, // Hide navigation arrows
  };

  return (
    <div className="section bg-light1 tekup-section-padding accordion-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <div className="tekup-thumb">
              {/* Replace static image with a carousel */}
              <Slider {...settings}>
                <div>
                  <img src="/images/v3/man_teach_2.jpg" alt="Thumbnail 1" />
                </div>
                <div>
                  <img src="/images/v3/man_teach.jpg" alt="Thumbnail 2" />
                </div>
                <div>
                  <img src="/images/v3/woman_teach.jpg" alt="Thumbnail 3" />
                </div>
              </Slider>
              <div className="tekup-thumb-card right">
                <img src="/images/v3/Satisfaction.png" alt="Satisfaction" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content mr-60">
              <h2>Proven Expertise in Complex IT Solutions</h2>
              <p>
                We are architects of innovation, trailblazers of technological
                advancement, and partners in your success dynamic
              </p>

              <div className="tekup-extra-mt accordion-extra-style">
                <Accordion
                  defaultActiveKey="0"
                  className="tekup-accordion-wrap2 init-wrap"
                >
                  <div className="tekup-accordion-item2 open">
                    <div className="tekup-accordion-header2 init-header">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <h5>
                            <span>
                              <i className="ri-add-line"></i>
                            </span>{" "}
                            Quick Research and Solutions
                          </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            At our IT solution company, we are committed to
                            exceptional customer service and support. If you are
                            experiencing technical difficulties or need
                            assistance with
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </div>
                  </div>
                  <div className="tekup-accordion-item2">
                    <div className="tekup-accordion-header2 init-header">
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <h5>
                            <span>
                              <i className="ri-add-line"></i>
                            </span>{" "}
                            Dedicated Support 24/7
                          </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            At our IT solution company, we are committed to
                            exceptional customer service and support. If you are
                            experiencing technical difficulties or need
                            assistance with
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;



// "use client"
// import { Accordion } from "react-bootstrap";
// const AccordionSection = () => {
//     return (
//         <div className="section bg-light1 tekup-section-padding accordion-two">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6 order-lg-2">
//                         <div className="tekup-thumb">
//                             <img src="/images/v7/thumb1.png" alt="" />
//                             <div className="tekup-thumb-card right">
//                                 <img src="/images/v3/Satisfaction.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 d-flex align-items-center">

//                         <div className="tekup-default-content mr-60">
//                             <h2>Proven Expertise in Complex IT Solutions</h2>
//                             <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success dynamic</p>

//                             <div className="tekup-extra-mt accordion-extra-style">
//                                 <Accordion defaultActiveKey="0" className="tekup-accordion-wrap2 init-wrap">
//                                     <div className="tekup-accordion-item2 open">
//                                         <div className="tekup-accordion-header2 init-header">
//                                             <Accordion.Item eventKey="0">
//                                                 <Accordion.Header ><h5><span><i className="ri-add-line"></i></span> Quick Research and Solutions</h5></Accordion.Header>
//                                                 <Accordion.Body >
//                                                     <p>At our IT solution company, we are committed to exceptional customer service and support. If you are experiencing technical difficulties or need assistance with</p>
//                                                 </Accordion.Body>
//                                             </Accordion.Item>
//                                         </div>
//                                     </div>
//                                     <div className="tekup-accordion-item2">
//                                         <div className="tekup-accordion-header2 init-header">
//                                             <Accordion.Item eventKey="2">
//                                                 <Accordion.Header ><h5><span><i className="ri-add-line"></i></span> Dedicated Support 24/7</h5></Accordion.Header>
//                                                 <Accordion.Body >
//                                                     <p>At our IT solution company, we are committed to exceptional customer service and support. If you are experiencing technical difficulties or need assistance with</p>
//                                                 </Accordion.Body>
//                                             </Accordion.Item>
//                                         </div>
//                                     </div>
//                                 </Accordion>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AccordionSection;