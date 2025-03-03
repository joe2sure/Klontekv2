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
                                <img src="/images/p2/p_1.png" alt="" />
                                <div className="tekup-portfolio-data2">
                                    <Link href="single-portfolio">
                                        <h5>Design of the year</h5>
                                    </Link>
                                    <p>UI/UX Design</p>
                                    <Link className="tekup-portfolio-btn2" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-portfolio-wrap2">
                            <div className="tekup-portfolio-thumb2">
                                <img src="/images/p2/p_2.png" alt="" />
                                <div className="tekup-portfolio-data2">
                                    <Link href="single-portfolio">
                                        <h5> Ways to level up your brand</h5>
                                    </Link>
                                    <p>Branding</p>
                                    <Link className="tekup-portfolio-btn2" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-portfolio-wrap2">
                            <div className="tekup-portfolio-thumb2">
                                <img src="/images/p2/p_3.png" alt="" />
                                <div className="tekup-portfolio-data2">
                                    <Link href="single-portfolio">
                                        <h5>Cyber Security Analysis</h5>
                                    </Link>
                                    <p>Technology</p>
                                    <Link className="tekup-portfolio-btn2" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-portfolio-wrap2">
                            <div className="tekup-portfolio-thumb2">
                                <img src="/images/p2/p_4.png" alt="" />
                                <div className="tekup-portfolio-data2">
                                    <Link href="single-portfolio">
                                        <h5>Design Discussion</h5>
                                    </Link>
                                    <p>Design</p>
                                    <Link className="tekup-portfolio-btn2" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-md-12">
                        <div className="tekup-portfolio-wrap2">
                            <div className="tekup-portfolio-thumb2">
                                <img src="/images/p2/p_5.png" alt="" />
                                <div className="tekup-portfolio-data2">
                                    <Link href="single-portfolio">
                                        <h5>Product Security Analysis</h5>
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