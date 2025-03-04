"use client"

import Link from "next/link";
import CategoryCard from "~/components/Element/Cards/CategoryCard";
import RecentPostCard from "~/components/Element/Cards/RecentPostsCard";
import TagCard from "~/components/Element/Cards/TagCard";

const SingleBlogSection = () => {
    return (
        <div className="section tekup-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tekup-blog-thumb single-blog">
                <img src="/images/blog/blog14.png" alt=""/>
              </div>
              <div className="tekup-single-post-content-wrap">
                <div className="tekup-single-post-meta">
                  <ul>
                    <li><Link href="blog"><i className="ri-calendar-fill"></i> 26 June 2023</Link></li>
                    <li><Link href="blog"><i className="ri-bookmark-fill"></i> Technology</Link></li>
                    <li><Link href=""><i className="ri-chat-2-fill"></i> 2 Comments</Link></li>
                  </ul>
                </div>
                <div className="entry-content">
                  <p>Vast numbers of employees now work remotely, and it’s too late to develop a set of remote-work policies if you didn’t already have one. But there are ways to make the remote-work experience productive and engaging for employees</p>
    
                  <p>Use both direct conversations and indirect observations to get visibility into employees’ challenges and concerns. Use every opportunity to make clear to employees that you support and care them. To facilitate regular conversations between managers and employees, provide managers with guidance on how best to broach sensitive subjects arising from the COVID-19 pandemic, including alternative work models, job security and prospects, impact on staffing</p>
    
                  <div className="tekup-single-thumb">
                    <div className="row">
                      <div className="col-lg-6">
                        <img src="/images/blog/blog1.png" alt=""/>
                      </div>
                      <div className="col-lg-6">
                        <img src="/images/blog/blog2.png" alt=""/>
                      </div>
                    </div>
                  </div>
    
                  <p>The third Monday of January is supposed to be the most depressing day of the year. Whether you believe that or not, the long nights, cold weather, and trying to keep to new year resolutions are all probably getting to you a little by now. To make matters worse many will still be recovering from their Christmas spending. So how can you make today</p>
    
                  <blockquote>“ We appreciate the consistent high-quality service provided by their team goes above and beyond concerns promptly ”</blockquote>
    
                  <p>You can make some quick cash by switching your bank account to one with a bonus. Some banks are giving away £150 for moving your custom, while others offer cashback or high interest. Of course, it’s worth checking you won’t lose out in other.</p>
                  <p>What’s up in the loft? Or under the bed? If you aren’t sure it probably means you don’t that’s a sign you should try to sell it. If there’s the potential for it to be rare or part of a collection</p>
    
    
                  <div className="tekup-single-post-tag-wrap">
                    <div className="tekup-blog-tags">
                      <ul>
                        <li><Link href="">IT Solution</Link></li>
                        <li><Link href="">Technology</Link></li>
                        <li><Link href="">Cyber Security</Link></li>
                        <li><Link href="">Software</Link></li>
                      </ul>
                    </div>
                  </div>
    
                  <div className="tekup-post-navigation">
                    <Link href="single-blog" className="nav-previous">
                      <i className="ri-arrow-left-up-line"></i> Perv
                      <h5>Data backup and recovery best practices small</h5>
                    </Link>
                    <Link href="single-blog" className="nav-next">
                      Next <i className="ri-arrow-right-up-line"></i>
                      <h5>Proactive customer experience in the business</h5>
                    </Link>
                  </div>
    
                  <div className="tekup-post-comment">
                    <h3>Comments:</h3>
                    <ul>
                      <li>
                        <div className="tekup-post-comment-wrap">
                          <div className="tekup-post-comment-thumb">
                            <img src="/images/team/team5.png" alt=""/>
                          </div>
                          <div className="tekup-post-comment-data">
                            <Link className="tekup-comment-reply" href="">
                              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0846 15.3332L0.917969 7.99984L10.0846 0.666504V5.24984C15.1472 5.24984 19.2513 9.35394 19.2513 14.4165C19.2513 14.6667 19.2413 14.9145 19.2216 15.1596C17.8401 12.5375 15.0878 10.7498 11.918 10.7498H10.0846V15.3332Z" fill="#0D0E1D" />
                              </svg>
                              Reply</Link>
                            <p>Legal expertise and is client focused we enhance entrepreneurial environment flexible supportive, allowing our lawyers introduced</p>
                            <strong>Ricky Smith</strong>
                            <span>June 21, 2023</span>
                          </div>
                        </div>
                      </li>
                      <li className="children">
                        <div className="tekup-post-comment-wrap">
                          <div className="tekup-post-comment-thumb">
                            <img src="/images/team/team6.png" alt=""/>
                          </div>
                          <div className="tekup-post-comment-data">
                            <Link className="tekup-comment-reply" href="">
                              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0846 15.3332L0.917969 7.99984L10.0846 0.666504V5.24984C15.1472 5.24984 19.2513 9.35394 19.2513 14.4165C19.2513 14.6667 19.2413 14.9145 19.2216 15.1596C17.8401 12.5375 15.0878 10.7498 11.918 10.7498H10.0846V15.3332Z" fill="#0D0E1D" />
                              </svg>
    
                              Reply</Link>
                            <p>Legal expertise and is client focused we enhance entrepreneurial environment flexible supportive, allowing our lawyers</p>
                            <strong>Brooklyn Simmons</strong>
                            <span>September 22, 2023</span>
                          </div>
                        </div>
                      </li>
    
                    </ul>
                  </div>
    
    
                  <div className="tekup-comment-box">
                    <h3>Leave a comments:</h3>
                    <form action="#">
                      <div className="tekup-comment-box-form">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="tekup-comment-form">
                              <input type="text" placeholder="Your Name*"/>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="tekup-comment-form">
                              <input type="email" placeholder="Email Address*"/>
                            </div>
                          </div>
                        </div>
                        <div className="tekup-comment-form">
                          <textarea name="textarea" placeholder="Write us your comment"></textarea>
                        </div>
                        <div className="tekup-check">
                          <input type="checkbox" id="css"/>
                          <label for="css">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <button id="tekup-default-btn" type="submit">Post comment <i className="ri-arrow-right-up-line"></i></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tekup-blog-sidebar">
                <div className="tekup-blog-widgets">
                  <h5>Search</h5>
                  <form action="#">
                    <div className="tekup-search-box">
                      <input type="search" placeholder="Type to search..."/>
                      <button id="tekup-search-btn" type="button"><i className="ri-search-line"></i></button>
                    </div>
                  </form>
                </div>
                <CategoryCard hrefs="blog"/>
                <RecentPostCard/>
               <TagCard hrefs="blog"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleBlogSection;