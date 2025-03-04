"use client"

import Link from "next/link";
import CategoryCard from "~/components/Element/Cards/CategoryCard";
import RecentPostCard from "~/components/Element/Cards/RecentPostsCard";
import TagCard from "~/components/Element/Cards/TagCard";

const BlogSection = () => {
    return (
        <div className="section tekup-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tekup-blog-wrap bg-white">
                <Link href="single-blog">
                  <div className="tekup-blog-thumb">
                    <img src="/images/blog/blog14.png" alt=""/>
                  </div>
                </Link>
                <div className="tekup-blog-content blog-page-content">
                  <div className="tekup-blog-meta">
                    <ul>
                      <li><Link href="single-blog">Technology</Link></li>
                      <li><Link href="single-blog">26 June 2023</Link></li>
                    </ul>
                  </div>
                  <Link href="single-blog">
                    <h2>Technology support allows erie non-profit to serve</h2>
                  </Link>
                  <p>Different companies have been using the OpenAI API to power their products example, Duolingo uses OpenAI’s GPT-3 to provide French grammar corrections on</p>
                  <Link className="tekup-blog-btn" href="single-blog">Read More <i className="ri-arrow-right-up-line"></i></Link>
                </div>
              </div>
              <div className="tekup-blog-wrap bg-white">
                <Link href="single-blog">
                  <div className="tekup-blog-thumb">
                    <img src="/images/blog/blog15.png" alt=""/>
                  </div>
                </Link>
                <div className="tekup-blog-content blog-page-content">
                  <div className="tekup-blog-meta">
                    <ul>
                      <li><Link href="single-blog">Technology</Link></li>
                      <li><Link href="single-blog">26 June 2023</Link></li>
                    </ul>
                  </div>
                  <Link href="single-blog">
                    <h2>The act of knowledge & the act of design thinking</h2>
                  </Link>
                  <p>Different companies have been using the OpenAI API to power their products example, Duolingo uses OpenAI’s GPT-3 to provide French grammar corrections on</p>
                  <Link className="tekup-blog-btn" href="single-blog">Read More <i className="ri-arrow-right-up-line"></i></Link>
                </div>
              </div>
              <div className="tekup-blog-wrap bg-white">
                <Link href="single-blog">
                  <div className="tekup-blog-thumb">
                    <img src="/images/blog/blog16.png" alt=""/>
                  </div>
                </Link>
                <div className="tekup-blog-content blog-page-content">
                  <div className="tekup-blog-meta">
                    <ul>
                      <li><Link href="single-blog">Technology</Link></li>
                      <li><Link href="single-blog">26 June 2023</Link></li>
                    </ul>
                  </div>
                  <Link href="single-blog">
                    <h2>Core on web vitals, a smas magazine case study</h2>
                  </Link>
                  <p>Different companies have been using the OpenAI API to power their products example, Duolingo uses OpenAI’s GPT-3 to provide French grammar corrections on</p>
                  <Link className="tekup-blog-btn" href="single-blog">Read More <i className="ri-arrow-right-up-line"></i></Link>
                </div>
              </div>
              <div className="tekup-blog-wrap bg-white">
                <Link href="single-blog">
                  <div className="tekup-blog-thumb">
                    <img src="/images/blog/blog17.png" alt=""/>
                  </div>
                </Link>
                <div className="tekup-blog-content blog-page-content">
                  <div className="tekup-blog-meta">
                    <ul>
                      <li><Link href="single-blog">Technology</Link></li>
                      <li><Link href="single-blog">26 June 2023</Link></li>
                    </ul>
                  </div>
                  <Link href="single-blog">
                    <h2>Data backup and recovery best practices small</h2>
                  </Link>
                  <p>Different companies have been using the OpenAI API to power their products example, Duolingo uses OpenAI’s GPT-3 to provide French grammar corrections on</p>
                  <Link className="tekup-blog-btn" href="single-blog">Read More <i className="ri-arrow-right-up-line"></i></Link>
                </div>
              </div>
              <div className="tekup-blog-wrap bg-white">
                <Link href="single-blog">
                  <div className="tekup-blog-thumb">
                    <img src="/images/blog/blog18.png" alt=""/>
                  </div>
                </Link>
                <div className="tekup-blog-content blog-page-content">
                  <div className="tekup-blog-meta">
                    <ul>
                      <li><Link href="single-blog">Technology</Link></li>
                      <li><Link href="single-blog">26 June 2023</Link></li>
                    </ul>
                  </div>
                  <Link href="single-blog">
                    <h2>Proactive customer experience in the business</h2>
                  </Link>
                  <p>Different companies have been using the OpenAI API to power their products example, Duolingo uses OpenAI’s GPT-3 to provide French grammar corrections on</p>
                  <Link className="tekup-blog-btn" href="single-blog">Read More <i className="ri-arrow-right-up-line"></i></Link>
                </div>
              </div>
              <div className="tekup-navigation">
                <nav className="navigation pagination" aria-label="Posts">
                  <div className="nav-links">
                    <Link className="next page-numbers" href="">
                      <i className="ri-arrow-left-s-line"></i>
                    </Link>
                    <span aria-current="page" className="page-numbers current">1</span>
                    <Link className="page-numbers" href="">2</Link>
                    <Link className="page-numbers" href="">3</Link>
                    <Link className="next page-numbers" href="">
                      <i className="ri-arrow-right-s-line"></i>
                    </Link>
                  </div>
                </nav>
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

export default BlogSection;