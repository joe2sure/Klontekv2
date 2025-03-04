"use client"

import Link from "next/link";

const SingleTeamSection = () => {
    return (
        <div className="section tekup-section-padding">
        <div className="container">
          <div className="tekup-team-single-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="tekup-team-single-thumb">
                  <img src="/images/team/team-single.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center">
                <div className="tekup-team-single-content">
                  <h2>Marvin McKinney</h2>
                  <span>CEO & Founder</span>
                  <p>A content management system helps you create, manage, and publish content on the web. It also keep content organized and accessible so it can be used and repurposed effectively.</p>
                  <div className="tekup-footer-info dark-color">
                    <ul>
                      <li><Link href="tel:123"><i className="ri-phone-fill"></i>518-564-3200</Link></li>
                      <li><Link href="mailto:name@email.com"><i className="ri-mail-fill"></i>mthemeus@example.com</Link></li>
                    </ul>
                  </div>
                  <div className="tekup-extra-mt">
                    <div className="tekup-social-icon-box style-three">
                      <ul>
                        <li>
                          <Link href="https://www.facebook.com/">
                            <i className="ri-facebook-fill"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/">
                            <i className="ri-linkedin-fill"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com/">
                            <i className="ri-twitter-fill"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/">
                            <i className="ri-instagram-fill"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tekup-team-form">
            <h2>Fill The Contact Form</h2>
            <p>Feel free to contact with us, we don’t spam your email</p>
            <form action="#">
              <div className="row">
                <div className="col-lg-6">
                  <div className="tekup-main-field">
                    <input type="text" placeholder="Your name"/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tekup-main-field">
                    <input type="number" placeholder="Phone number"/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="tekup-main-field">
                    <input type="email" placeholder="Email address"/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="tekup-main-field">
                    <textarea name="textarea" placeholder="Write your message"></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button id="tekup-main-form-btn" type="button">Send Message <i className="ri-arrow-right-up-line"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
    
      </div>
    );
};

export default SingleTeamSection;