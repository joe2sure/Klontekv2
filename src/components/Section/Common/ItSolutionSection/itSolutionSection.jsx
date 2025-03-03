import Link from "next/link";

const ItSolutionSection = () => {
    return (
        <div className="section bg-light1 tekup-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tekup-thumb mr-30">
                            <img src="/images/v2/thumb1.png" alt="" />
                            <div className="tekup-thumb-card">
                                <img src="/images/v3/rating.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="tekup-default-content ml-60">
                            <h2>We are increasing business success with technology</h2>
                            <div className="tekup-extra-mt">
                                <div className="tekup-icon-list-wrap">
                                    <div className="tekup-icon-list-item">
                                        <div className="tekup-icon-list-icon">
                                            <img src="/images/v2/icon1.png" alt="" />
                                        </div>
                                        <div className="tekup-icon-list-data">
                                            <h5>Quality Solution for Business</h5>
                                            <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success dynamic</p>
                                        </div>
                                    </div>
                                    <div className="tekup-icon-list-item">
                                        <div className="tekup-icon-list-icon">
                                            <img src="/images/v2/icon2.png" alt="" />
                                        </div>
                                        <div className="tekup-icon-list-data">
                                            <h5>Amazing Expert Teams</h5>
                                            <p>Support company that will learn the intimate details of your business technology and process while also</p>
                                        </div>
                                    </div>
                                </div>
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

export default ItSolutionSection;