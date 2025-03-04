import Link from "next/link";


const AboutSection = () => {
    return (
        <div className="section tekup-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tekup-thumb">
                <img src="/images/v1/thumb1.png" alt=""/>
                <div className="tekup-thumb-card">
                  <img src="/images/v3/Satisfaction.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
              <div className="tekup-default-content">
                <h2>Exclusive technology to provide IT solutions</h2>
                <p>We are architect of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization</p>
                <div className="tekup-icon-list">
                  <ul>
                    <li><i className="ri-check-line"></i>Easily Build Custom Reports And Dashboards</li>
                    <li><i className="ri-check-line"></i>Legacy Software Modernization</li>
                    <li><i className="ri-check-line"></i>Software For The Open Enterprise</li>
                  </ul>
                </div>
                <div className="tekup-extra-mt">
                  <Link className="tekup-default-btn" href="about-us">More About <i className="ri-arrow-right-up-line"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutSection;