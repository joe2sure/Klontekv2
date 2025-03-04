"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandSection = () => {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        infinite: true,
        swipeToSlide: true,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="section bg-light1 tekup-section-padding">
            <div className="container">
                <div className="tekup-section-title center">
                    <p>Empowered professionals to connect with top-tier opportunities</p>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/v3/b_1.png" alt="" />
                        </div>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/v3/b_2.png" alt="" />
                        </div>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/v3/b_3.png" alt="" />
                        </div>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/v3/b_4.png" alt="" />
                        </div>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/v3/b_5.png" alt="" />
                        </div>
                        <div className="tekup-brand-slider-item">
                            <img src="/images/v3/b_3.png" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;