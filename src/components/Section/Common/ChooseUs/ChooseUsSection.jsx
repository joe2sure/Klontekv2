"use client";

import Link from "next/link";

const ChooseUsSection = ({ className }) => {
  return (
      <div className={className}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/images/iconbox/icon8.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Expert Team Members</h4>
                  <p>
                    We are architects of innovation, trailblazers technological
                    advancement partners
                  </p>
                  <Link className="tekup-iconbox-btn" href="single-service">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/images/iconbox/icon9.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Fastest Customer Service</h4>
                  <p>
                    We are architects of innovation, trailblazers technological
                    advancement partners
                  </p>
                  <Link className="tekup-iconbox-btn" href="single-service">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/images/iconbox/icon10.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Competitive Pricing Plan</h4>
                  <p>
                    We are architects of innovation, trailblazers technological
                    advancement partners
                  </p>
                  <Link className="tekup-iconbox-btn" href="single-service">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChooseUsSection;
