import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="tekup-hero-section7" style={{ backgroundImage: 'url(/images/v7/hero-thumb.png)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tekup-hero-content white-color">
                            <h1>We provide best tech solutions</h1>
                            <p>We are architects of innovation, trailblazers technological advancement, and partners in your success.</p>
                            <div className="tekup-extra-mt">
                                <div className="tekup-hero-btn-wrap">
                                    <Link className="tekup-default-btn tekup-white-btn" href="">Start a Project <i className="ri-arrow-right-up-line"></i></Link>
                                    <Link className="tekup-default-btn outline-btn-white" href="">Our Works <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;