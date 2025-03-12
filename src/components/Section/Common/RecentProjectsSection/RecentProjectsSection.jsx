import Link from "next/link";

const RecentProjectsSection = () => {
    return (
        <div className="section bg-light1 tekup-section-padding">
            <div className="container">
                <div className="tekup-section-title center">
                    <h2>Explore our recent projects</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-portfolio-wrap2">
                            <div className="tekup-portfolio-thumb2">
                                <img src="/images/p2/AI_app_2.jpg" alt="" />
                                <div className="tekup-portfolio-data2">
                                    <Link href="single-portfolio">
                                        <h5>kortex.ai</h5>
                                    </Link>
                                    <p>AI Multi-agent App</p>
                                    <Link className="tekup-portfolio-btn2" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-portfolio-wrap2">
                            <div className="tekup-portfolio-thumb2">
                                <img src="/images/p2/Elearning_phone2.jpg" alt="" />
                                <div className="tekup-portfolio-data2">
                                    <Link href="single-portfolio">
                                        <h5> Kloncept</h5>
                                    </Link>
                                    <p>Elearning platform</p>
                                    <Link className="tekup-portfolio-btn2" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-portfolio-wrap2">
                            <div className="tekup-portfolio-thumb2">
                                <img src="/images/p2/crypto_site_1.jpg" alt="" />
                                <div className="tekup-portfolio-data2">
                                    <Link href="single-portfolio">
                                        <h5>Crypto Analysis Web App</h5>
                                    </Link>
                                    <p>Blockchain</p>
                                    <Link className="tekup-portfolio-btn2" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-portfolio-wrap2">
                            <div className="tekup-portfolio-thumb2">
                                <img src="/images/p2/grocery_1.jpg" alt="" />
                                <div className="tekup-portfolio-data2">
                                    <Link href="single-portfolio">
                                        <h5>noHungerApp</h5>
                                    </Link>
                                    <p>E-Grocery App</p>
                                    <Link className="tekup-portfolio-btn2" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-md-12">
                        <div className="tekup-portfolio-wrap2">
                            <div className="tekup-portfolio-thumb2">
                                <img src="/images/p2/estate_webiste.jpg" alt="" />
                                <div className="tekup-portfolio-data2">
                                    <Link href="single-portfolio">
                                        <h5>Real Estate Web App</h5>
                                    </Link>
                                    <p>Product</p>
                                    <Link className="tekup-portfolio-btn2" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tekup-center-btn">
                    <Link className="tekup-default-btn" href="portfolio-01">View All Projects <i className="ri-arrow-right-up-line"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default RecentProjectsSection;