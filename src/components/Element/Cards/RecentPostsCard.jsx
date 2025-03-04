"use client"

import Link from "next/link";

const RecentPostCard = () => {
    return (
<div className="tekup-blog-widgets">
                  <h5>Recent Posts</h5>
                  <Link className="tekup-recent-post-item" href="single-blog">
                    <div className="tekup-recent-post-thumb">
                      <img src="/images/blog/recent-post1.png" alt=""/>
                    </div>
                    <div className="tekup-recent-post-data">
                      <p>Planning your online business goals with a specialist </p>
                      <span>26 June 2023</span>
                    </div>
                  </Link>
                  <Link className="tekup-recent-post-item" href="single-blog">
                    <div className="tekup-recent-post-thumb">
                      <img src="/images/blog/recent-post2.png" alt=""/>
                    </div>
                    <div className="tekup-recent-post-data">
                      <p>Boost your startup business with our digital agency </p>
                      <span>26 June 2023</span>
                    </div>
                  </Link>
                  <Link className="tekup-recent-post-item" href="single-blog">
                    <div className="tekup-recent-post-thumb">
                      <img src="/images/blog/recent-post3.png" alt=""/>
                    </div>
                    <div className="tekup-recent-post-data">
                      <p>The importance of a strong digital for strategy </p>
                      <span>26 June 2023</span>
                    </div>
                  </Link>
                </div>
    );
};

export default RecentPostCard;