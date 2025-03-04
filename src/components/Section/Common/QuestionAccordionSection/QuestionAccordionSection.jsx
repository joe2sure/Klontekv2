"use client"

import Link from "next/link";
import { Accordion } from "react-bootstrap";

const QuestionAccordionSection = () => {
    return (
        <div className="section bg-light1 tekup-section-padding accordion-one price-accordion">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tekup-default-content mr-60">
                            <h2>Have any questions? here some answers for you</h2>
                            <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success</p>
                            <div className="tekup-extra-mt">
                                <Link className="tekup-default-btn" href="faq">Ask Any Question <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <Accordion defaultActiveKey="0" >
              <div className='tekup-accordion-column'>
                  <div className='tekup-accordion-wrap mt-0 init-wrap'>
                      <Accordion.Item eventKey="0">
                          <Accordion.Header > <span>Q1. </span> What Is The Design Process For Branding?</Accordion.Header>
                          <Accordion.Body >
                         <p> At our IT solution company, we are committed to exceptional customer service and support. If you are experiencing technical difficulties or need assistance with</p>
                          </Accordion.Body>
                      </Accordion.Item>
                  </div>
              </div>
              <div className='tekup-accordion-column'>
                  <div className='tekup-accordion-wrap mt-0 init-wrap'>
                      <Accordion.Item eventKey="2">
                          <Accordion.Header > <span>Q2. </span> How Much Does Logo Design Services Cost?</Accordion.Header>
                          <Accordion.Body >
                          <p> At our IT solution company, we are committed to exceptional customer service and support. If you are experiencing technical difficulties or need assistance with</p>
                          </Accordion.Body>
                      </Accordion.Item>
                  </div>
              </div>
              <div className='tekup-accordion-column'>
                  <div className='tekup-accordion-wrap mt-0 init-wrap'>
                      <Accordion.Item eventKey="3">
                          <Accordion.Header > <span>Q3. </span> How Long Will It Take To Complete My Project?</Accordion.Header>
                          <Accordion.Body >
                          <p> At our IT solution company, we are committed to exceptional customer service and support. If you are experiencing technical difficulties or need assistance with</p>
                          </Accordion.Body>
                      </Accordion.Item>
                  </div>
              </div>
              <div className='tekup-accordion-column'>
                  <div className='tekup-accordion-wrap mt-0 init-wrap'>
                      <Accordion.Item eventKey="4">
                          <Accordion.Header > <span>Q4. </span> What Is Included In A Round Of Revisions?</Accordion.Header>
                          <Accordion.Body >
                          <p> At our IT solution company, we are committed to exceptional customer service and support. If you are experiencing technical difficulties or need assistance with</p>
                          </Accordion.Body>
                      </Accordion.Item>
                  </div>
              </div>
             
            
          </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAccordionSection;