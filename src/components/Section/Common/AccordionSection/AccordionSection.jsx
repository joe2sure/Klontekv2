
"use client"
import { Accordion } from "react-bootstrap";
const AccordionSection = () => {
    return (
        <div className="section bg-light1 tekup-section-padding accordion-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-lg-2">
                        <div className="tekup-thumb">
                            <img src="/images/v7/thumb1.png" alt="" />
                            <div className="tekup-thumb-card right">
                                <img src="/images/v3/Satisfaction.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">

                        <div className="tekup-default-content mr-60">
                            <h2>Proven Expertise in Complex IT Solutions</h2>
                            <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success dynamic</p>

                            <div className="tekup-extra-mt accordion-extra-style">
                                <Accordion defaultActiveKey="0" className="tekup-accordion-wrap2 init-wrap">
                                    <div className="tekup-accordion-item2 open">
                                        <div className="tekup-accordion-header2 init-header">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header ><h5><span><i className="ri-add-line"></i></span> Quick Research and Solutions</h5></Accordion.Header>
                                                <Accordion.Body >
                                                    <p>At our IT solution company, we are committed to exceptional customer service and support. If you are experiencing technical difficulties or need assistance with</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                    </div>
                                    <div className="tekup-accordion-item2">
                                        <div className="tekup-accordion-header2 init-header">
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header ><h5><span><i className="ri-add-line"></i></span> Dedicated Support 24/7</h5></Accordion.Header>
                                                <Accordion.Body >
                                                    <p>At our IT solution company, we are committed to exceptional customer service and support. If you are experiencing technical difficulties or need assistance with</p>
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