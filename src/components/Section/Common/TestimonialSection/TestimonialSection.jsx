"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonial from '~/db/homeSevenTestimonial.json'
import TestimonialsCard from "~/components/Element/Cards/TestimonialsCard";
const TestimonialSection = () => {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className="section dark-bg tekup-section-padding">
            <div className="container">
                <div className="tekup-section-title center light-color">
                    <h2>Trusted by more than 200+ client’s around the world</h2>
                </div>
                <div className="tekup-t-two-column-slider-wrap border-0">
                    <Slider {...settings} className="tekup-t-two-column-slider">
                        {
                            testimonial?.map((item, idx) => <TestimonialsCard item={item} key={idx}></TestimonialsCard>)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;