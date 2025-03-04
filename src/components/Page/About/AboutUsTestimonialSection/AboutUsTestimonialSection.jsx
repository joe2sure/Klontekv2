"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutUsTestimonialSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };
    return (
        <div className="section bg-light1 tekup-section-padding">
        <div className="container">
          <div className="tekup-section-title center">
            <h2>Trusted by more than 200+ client’s around the world</h2>
          </div>
          <Slider {...settings} className="tekup-testimonial-slider">
            <div className="tekup-testimonial-data">
              <div className="tekup-testimonial-rating">
                <ul>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                </ul>
              </div>
              <p>“ If you’re looking for a rewarding career and a chance to make an impact, you’ve come to the right place We will transform your business through our techniques! ”</p>
              <div className="tekup-testimonial-author">
                <img src="/images/team/team1.png" alt=""/>
                <h5>Alexander Cameron</h5>
                <span>Lead Developer</span>
              </div>
            </div>
            <div className="tekup-testimonial-data">
              <div className="tekup-testimonial-rating">
                <ul>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                  <li><i className="ri-star-s-fill"></i></li>
                </ul>
              </div>
              <p>“ If you’re looking for a rewarding career and a chance to make an impact, you’ve come to the right place We will transform your business through our techniques! ”</p>
              <div className="tekup-testimonial-author">
                <img src="/images/team/team1.png" alt=""/>
                <h5>Alexander Cameron</h5>
                <span>Lead Developer</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
};

export default AboutUsTestimonialSection;