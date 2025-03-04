"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import projects from '~/db/recentProjectsThree.json'
import ElearningCard from "~/components/Element/Cards/ElearningCard";

const ElearningSection = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1398,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }

        ]
    }
    return (
        <div className="tekup-portfolio-section bg-light1 tekup-section-padding-top">
            <div className="container">
                <div className="tekup-section-title center light-color">
                    <h2>Explore our recent projects</h2>
                </div>
                <Slider  {...settings} >
                    {
                        projects?.map((item, idx) => <ElearningCard key={idx} item={item}></ElearningCard>)
                    }
                </Slider>
            </div>

        </div>
    );
};

export default ElearningSection;