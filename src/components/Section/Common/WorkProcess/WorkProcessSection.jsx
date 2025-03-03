"use client"

import Link from "next/link";

const WorkProcessSection = () => {
    return (
<div className="section tekup-section-padding2">
    <div className="container">
      <div className="tekup-section-title center">
        <h2>Our working process on how to grow your business</h2>
      </div>
      <div className="tekup-iconbox-line" style={{backgroundImage:"url(/images/v1/line.png)"}}>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="tekup-iconbox-wrap2">
              <div className="tekup-iconbox-icon2">
                <img src="/images/iconbox/icon5.png" alt=""/>
                <div className="tekup-iconbox-count">
                  01
                </div>
              </div>
              <div className="tekup-iconbox-data2">
                <Link href="single-service">
                  <h5>Initiation & Planning</h5>
                </Link>
                <p>We are architects innovation trailblazers of technological advancement</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tekup-iconbox-wrap2">
              <div className="tekup-iconbox-icon2">
                <img src="/images/iconbox/icon6.png" alt=""/>
                <div className="tekup-iconbox-count">
                  02
                </div>
              </div>
              <div className="tekup-iconbox-data2">
                <Link href="single-service">
                  <h5>Execution & Development</h5>
                </Link>
                <p>We are architects innovation trailblazers of technological advancement</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="tekup-iconbox-wrap2">
              <div className="tekup-iconbox-icon2">
                <img src="/images/iconbox/icon7.png" alt=""/>
                <div className="tekup-iconbox-count">
                  03
                </div>
              </div>
              <div className="tekup-iconbox-data2">
                <Link href="single-service">
                  <h5>Testing & Maintenance</h5>
                </Link>
                <p>We are architects innovation trailblazers of technological advancement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default WorkProcessSection;