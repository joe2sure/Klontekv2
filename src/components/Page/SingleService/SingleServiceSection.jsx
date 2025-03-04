/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import SingleServiceMenuCard from "~/components/Element/Cards/SingleServiceMenuCard";

const SingleServiceSection = () => {
    return (
        <div className="section tekup-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tekup-service-details-wrap">
                <img src="/images/service/service-deatils.png" alt=""/>
                <div className="tekup-service-details-item">
                  <h3>Overview</h3>
                  <p>A content management system helps you create, manage, and publish content on the web. It also keep content organized and accessible so it can be used and repurposed effectively. There are various kinds of content management systems available—from cloud-based to a headless CMS—to meet every audience need.</p>
                  <p>CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools that provide even more features for advanced functions. API CMS’s are built to have an excellent user-friendly interface that is easy to use.</p>
                </div>
                <div className="tekup-service-details-item">
                  <h3>Features</h3>
                  <p>A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates like a website.</p>
                  <div className="tekup-icon-list">
                    <ul>
                      <li><i className="ri-check-line"></i>Creating and editing content</li>
                      <li><i className="ri-check-line"></i>Workflows, reporting, and content organization</li>
                      <li><i className="ri-check-line"></i>User & role-based administration and security</li>
                      <li><i className="ri-check-line"></i>Flexibility, scalability, and performance and analysis</li>
                      <li><i className="ri-check-line"></i>Multilingual content capabilities</li>
                    </ul>
                  </div>
                </div>
                <div className="tekup-service-details-item">
                  <h3>Goal</h3>
                  <p>A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates like a website.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tekup-service-sidebar">
               <SingleServiceMenuCard/>
                <div className="tekup-service-contact" style={{backgroundImage:"url(/images/service/bg.png)"}}>
                  <img src="/images/service/icon.png" alt=""/>
                  <h3>Don't hesitate to contact us</h3>
                  <p>At our IT solution company, we are committed to exceptional</p>
                  <Link className="tekup-default-btn tekup-white-btn" href="contact-us">Get in Touch <i className="ri-arrow-right-up-line"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleServiceSection;