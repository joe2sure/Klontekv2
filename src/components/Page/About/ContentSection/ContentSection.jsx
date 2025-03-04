const ContentSection = () => {
    const successRate1 = 86;
    const successRate2 = 72;
    const successRate3 = 95;
      return (
          <div className="section bg-light1 tekup-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <div className="tekup-thumb ml-30">
                  <img src="/images/v3/thumb2.png" alt=""/>
                  <div className="tekup-thumb-card right">
                    <img src="/images/v3/project-done.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="tekup-default-content mr-60">
                  <h2>We are increasing business success with technology</h2>
                  <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization</p>
                  <div className="tekup-extra-mt">
                    <div className="skillbar" data-percent="86">
                      <p className="skillbar-lable">
                        <span className="skill-bar-title">Business Security</span>
                        <span className="skill-bar-percent">{successRate1}%</span>
                      </p>
                      <div className="skillbar-box">
                        <p className="skillbar-bar progressbar-one" style={{ width: `${successRate1}%` }}></p>
                      </div>
                    </div>
                    <div className="skillbar" data-percent="72">
                      <p className="skillbar-lable">
                        <span className="skill-bar-title">Career Development</span>
                        <span className="skill-bar-percent">{successRate2}%</span>
                      </p>
                      <div className="skillbar-box">
                        <p className="skillbar-bar  progressbar-two"style={{ width: `${successRate2}%` }}></p>
                      </div>
                    </div>
                    <div className="skillbar" data-percent="95">
                      <p className="skillbar-lable">
                        <span className="skill-bar-title">Business Innovation</span>
                        <span className="skill-bar-percent">{successRate3}%</span>
                      </p>
                      <div className="skillbar-box">
                        <p className="skillbar-bar  progressbar-three"style={{ width: `${successRate3}%` }}></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  };
  
  export default ContentSection;