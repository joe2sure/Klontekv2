import Link from "next/link";

const RecentBlogSection = () => {
    return (
        <div className="section tekup-section-padding2 dark-bg">
            <div className="container">
                <div className="tekup-section-title center light-color">
                    <h2>Our recent blog &amp; articles</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-5">
                        <div className="tekup-blog-wrap bg-white border-0">
                            <Link href="single-blog">
                                <div className="tekup-blog-thumb">
                                    <img src="/images/blog/blog7.png" alt />
                                </div>
                            </Link>
                            <div className="tekup-blog-content content-large">
                                <div className="tekup-blog-meta">
                                    <ul>
                                        <li><Link href="single-blog">Technology</Link></li>
                                        <li><Link href="single-blog">26 June 2023</Link></li>
                                    </ul>
                                </div>
                                <Link href="single-blog">
                                    <h3>Technology support allows erie non-profit to serve</h3>
                                </Link>
                                <p>We are architects of innovation, trailblazers of advancement partners in your success. As a dynamic and forward-thinking</p>
                                <Link className="tekup-blog-btn" href="single-blog">Read More <i className="ri-arrow-right-up-line" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="tekup-blog-wrap blog-grid bg-white border-0">
                            <Link href="single-blog">
                                <div className="tekup-blog-thumb">
                                    <img src="/images/blog/blog1.png" alt />
                                </div>
                            </Link>
                            <div className="tekup-blog-content">
                                <div className="tekup-blog-meta">
                                    <ul>
                                        <li><Link href="">Branding</Link></li>
                                        <li><Link href="">12 August 2023</Link></li>
                                    </ul>
                                </div>
                                <Link href="">
                                    <h3>The act of knowledge &amp; the act of design thinking</h3>
                                </Link>
                                <Link className="tekup-blog-btn" href="single-blog">Read More <i className="ri-arrow-right-up-line" /></Link>
                            </div>
                        </div>
                        <div className="tekup-blog-wrap blog-grid bg-white border-0">
                            <Link href="single-blog">
                                <div className="tekup-blog-thumb">
                                    <img src="/images/blog/blog2.png" alt />
                                </div>
                            </Link>
                            <div className="tekup-blog-content">
                                <div className="tekup-blog-meta">
                                    <ul>
                                        <li><Link href="">Branding</Link></li>
                                        <li><Link href="">12 August 2023</Link></li>
                                    </ul>
                                </div>
                                <Link href="">
                                    <h3>The act of knowledge &amp; the act of design thinking</h3>
                                </Link>
                                <Link className="tekup-blog-btn" href="single-blog">Read More <i className="ri-arrow-right-up-line" /></Link>
                            </div>
                        </div>
                        <div className="tekup-blog-wrap blog-grid bg-white border-0">
                            <Link href="single-blog">
                                <div className="tekup-blog-thumb">
                                    <img src="/images/blog/blog3.png" alt />
                                </div>
                            </Link>
                            <div className="tekup-blog-content">
                                <div className="tekup-blog-meta">
                                    <ul>
                                        <li><Link href="">Branding</Link></li>
                                        <li><Link href="">12 August 2023</Link></li>
                                    </ul>
                                </div>
                                <Link href="">
                                    <h3>Data backup and recovery best practices small</h3>
                                </Link>
                                <Link className="tekup-blog-btn" href="single-blog">Read More <i className="ri-arrow-right-up-line" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RecentBlogSection;