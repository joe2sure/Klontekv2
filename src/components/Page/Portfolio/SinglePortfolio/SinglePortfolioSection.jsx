import Link from "next/link";


const SinglePortfolioSection = () => {
    return (
        <div className="section tekup-section-padding">
        <div className="container">
          <div className="tekup-pd-thumb">
            <img src="/images/p1/p_details.png" alt=""/>
          </div>
          <div className="tekup-pd-wrap">
            <div className="row">
              <div className="col-lg-8">
                <div className="tekup-pd-content-wrap">
                  <div className="tekup-pd-content-item">
                    <h3>Project overview</h3>
                    <p>A content management system helps you create, manage, and publish content on the web. It also keep content organized and accessible so it can be used and repurposed effectively. There are various kinds of content management systems available—from cloud-based to a headless CMS—to meet every audience need.</p>
                    <p>CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools that provide even more features for advanced functions. API CMS’s are built to have an excellent user-friendly interface that is easy to use.</p>
                  </div>
                  <div className="tekup-pd-content-item">
                    <h3>The challenge of project</h3>
                    <p>A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates like a website.</p>
                  </div>
                  <div className="tekup-pd-content-item">
                    <div className="row">
                      <div className="col-lg-6">
                        <img src="/images/p2/p_1.png" alt=""/>
                      </div>
                      <div className="col-lg-6">
                        <img src="/images/p2/p_3.png" alt=""/>
                      </div>
                    </div>
                  </div>
                  <div className="tekup-pd-content-item">
                    <p>CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools that provide even more features for advanced functions. API CMS’s are built to have an excellent user-friendly interface that is easy to use.</p>
                  </div>
                  <div className="tekup-icon-list">
                    <ul>
                      <li><i className="ri-check-line"></i>Creating and editing content</li>
                      <li><i className="ri-check-line"></i>Workflows, reporting, and content organization</li>
                      <li><i className="ri-check-line"></i>User & role-based administration and security</li>
                      <li><i className="ri-check-line"></i>Flexibility, scalability, and performance and analysis</li>
                      <li><i className="ri-check-line"></i>Multilingual content capabilities</li>
                    </ul>
                  </div>
                  <div className="tekup-pd-content-item">
                    <h3>Final results</h3>
                    <p>Having a content management system for your website allows you to have control of your content. It means having the ability to update, change or delete any images, text, video, or audio. It allows you to keep your site organized, up to date and looking.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="tekup-pd-sidebar">
                  <div className="tekup-pd-sidebar-item">
                    <h5>Project Details</h5>
                    <span>Client:</span>
                    <p>Porter Victoria</p>
                  </div>
                  <div className="tekup-pd-sidebar-item">
                    <span>Web Development</span>
                    <p>Category:</p>
                  </div>
                  <div className="tekup-pd-sidebar-item">
                    <span>Date:</span>
                    <p>20 January, 2023</p>
                  </div>
                  <div className="tekup-pd-sidebar-item">
                    <span>Website Link::</span>
                    <Link href="mailto:name@email.com">example@gmail.com</Link>
                  </div>
                  <div className="tekup-social-icon-box style-four">
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
          <div className="tekup-post-navigation border-bottom-0 pb-0">
            <Link href="portfolio-01" className="nav-previous">
              <i className="ri-arrow-left-up-line"></i> Perv Project
              <h5>CMS Software Solution</h5>
            </Link>
            <Link href="portfolio-02" className="nav-next">
              NextProject <i className="ri-arrow-right-up-line"></i>
              <h5>Health App Development</h5>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SinglePortfolioSection;