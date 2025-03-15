"use client"

import Link from "next/link";

const SingleTeamSection = ({ teamMember }) => {
  return (
    <div className="section tekup-section-padding">
      <div className="container">
        <div className="tekup-team-single-wrap">
          <div className="row">
            <div className="col-lg-5">
              <div className="tekup-team-single-thumb">
                <img src={teamMember?.image} alt={teamMember?.name} />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="tekup-team-single-content">
                <h2>{teamMember?.name}</h2>
                <span>{teamMember?.position}</span>
                <p>
                  {teamMember?.position === "CEO & Founder"
                    ? "A visionary leader with a passion for innovation and technology."
                    : teamMember?.position === "Managing Director"
                    ? "Dr. Emmanuel is an entrepreneur and AI advocate with over a decade of experience in technology innovation. He is passionate about bridging the gap between education and technology, empowering youth with skills to succeed in the AI-driven world. <br/> He holds a doctorate in Computer Science and specializes in AI integration, consultancy, and fostering partnerships with educational institutions."
                    : teamMember?.position === "CTO"
                    ? "Dr. Uche Igboeli is a seasoned computer science senior lecturer at the University of Abuja with extensive expertise in programming, Software development, and database management. As a former team leader who developed the University of Abuja portal, he is renowned for mentoring numerous students, helping them cultivate advanced programming skills that have enabled many to succeed professionally worldwide. Beyond his teaching responsibilities, Dr. Igboeli actively supervises both undergraduate and postgraduate students, demonstrating a strong commitment to academic and professional development in the field of computer science. He is married and has children."
                    : teamMember?.position === "Product Manager"
                    ? "A creative mind ensuring seamless product delivery."
                    : teamMember?.position === "Lead Backend Engineer"
                    ? "A backend expert building robust and scalable systems."
                    : teamMember?.position === "Lead Software Engineer"
                    ? "A software architect crafting elegant and efficient code."
                    : teamMember?.position === "Lead UI/UX Designer"
                    ? "A design maestro creating intuitive and user-friendly interfaces."
                    : teamMember?.position === "HR Klontek"
                    ? "A people person fostering a positive and productive work environment."
                    : "A dedicated professional contributing to the team's success."}
                </p>
                <div className="tekup-footer-info dark-color">
                  <ul>
                    <li>
                      <Link href="tel:123">
                        <i className="ri-phone-fill"></i>+234 701 700 6937<br/>+44 748 218 7549
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:name@email.com">
                        <i className="ri-mail-fill"></i>hrklontek@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tekup-extra-mt">
                  <div className="tekup-social-icon-box style-three">
                    <ul>
                      <li>
                        <Link href={teamMember?.socialMedia?.linkedin}>
                          <i className="ri-facebook-fill"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href={teamMember?.socialMedia?.twitter}>
                          <i className="ri-linkedin-fill"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href={teamMember?.socialMedia?.instagram}>
                          <i className="ri-twitter-fill"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tekup-team-form">
          <h2>Fill The Contact Form</h2>
          <p>Feel free to contact with us, we don’t spam your email</p>
          <form action="#">
            <div className="row">
              <div className="col-lg-6">
                <div className="tekup-main-field">
                  <input type="text" placeholder="Your name" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tekup-main-field">
                  <input type="number" placeholder="Phone number" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tekup-main-field">
                  <input type="email" placeholder="Email address" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tekup-main-field">
                  <textarea name="textarea" placeholder="Write your message"></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <button id="tekup-main-form-btn" type="button">
                  Send Message <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SingleTeamSection;