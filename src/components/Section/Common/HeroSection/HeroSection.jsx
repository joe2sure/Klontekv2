"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const HeroSection = () => {
    // Define multiple hero images
    const heroImages = [
        "/images/v3/man_holding_success_sign.jpg",
        "/images/v3/blackmen_at_round_table.jpg",
        "/images/v3/man_teaching_executives_1.jpg",
        "/images/v3/digital_presence.jpg"
    ];

    // Define multiple content sets
    const heroContents = [
        {
            subtitle: "We provide professional IT services",
            title: "Best IT services for your success",
            description: "We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking team."
        },
        {
            subtitle: "Strategic technology consulting",
            title: "Transform your business with IT",
            description: "Our team of experts delivers tailored solutions that drive efficiency, innovation, and growth for businesses of all sizes across various industries."
        },
        {
            subtitle: "Advanced software development",
            title: "Custom solutions",
            description: "From enterprise applications to mobile solutions, we create powerful software that solves complex problems and creates competitive advantages."
        },
        {
            subtitle: "Digital transformation specialists",
            title: "Redefine your digital presence",
            description: "We help organizations navigate the digital landscape with strategic implementations that optimize operations and enhance customer experiences."
        }
    ];

    // State for current image and content index
    const [currentIndex, setCurrentIndex] = useState(0);
    // State for animation
    const [fadeIn, setFadeIn] = useState(true);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            
            // Wait for fade-out before changing content
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
                setFadeIn(true);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="tekup-hero-section3 bg-light1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div 
                            className={`tekup-hero-content dark-color ${fadeIn ? 'fade-in' : 'fade-out'}`}
                            style={{
                                transition: 'opacity 0.5s ease-in-out',
                                opacity: fadeIn ? 1 : 0
                            }}
                        >
                            <h5>{heroContents[currentIndex].subtitle}</h5>
                            <h1>{heroContents[currentIndex].title}</h1>
                            <p>{heroContents[currentIndex].description}</p>
                            <div className="tekup-extra-mt">
                                <div className="tekup-hero-btn-wrap">
                                    <Link className="tekup-default-btn" href="contact-us">Start a Project <i className="ri-arrow-right-up-line"></i></Link>
                                    <Link className="tekup-default-btn outline-btn-dark" href="portfolio-01">Our Works <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div 
                            className="tekup-hero-thumb"
                            style={{
                                position: 'relative',
                                height: '100%',
                                minHeight: '400px'
                            }}
                        >
                            {heroImages.map((image, index) => (
                                <img 
                                    key={index}
                                    src={image} 
                                    alt={`Hero image ${index + 1}`}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        transition: 'opacity 0.8s ease-in-out',
                                        opacity: currentIndex === index ? 1 : 0,
                                        zIndex: 1
                                    }}
                                />
                            ))}
                            <div 
                                className="tekup-client-rating"
                                style={{
                                    position: 'absolute',
                                    zIndex: 2
                                }}
                            >
                                <img src="/images/v3/rating.png" alt="Client rating" />
                            </div>
                            <div 
                                className="tekup-client-satisfaction"
                                style={{
                                    position: 'absolute',
                                    zIndex: 2
                                }}
                            >
                                <img src="/images/v3/Satisfaction.png" alt="Client satisfaction" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for animations and responsive behavior */}
            <style jsx>{`
                .fade-in {
                    animation: fadeInAnimation 0.5s forwards;
                }
                
                .fade-out {
                    animation: fadeOutAnimation 0.5s forwards;
                }
                
                @keyframes fadeInAnimation {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fadeOutAnimation {
                    from { opacity: 1; transform: translateY(0); }
                    to { opacity: 0; transform: translateY(-10px); }
                }
                
                @media (max-width: 991px) {
                    .tekup-hero-section3 {
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .tekup-hero-thumb {
                        position: absolute !important;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 0;
                    }
                    
                    .tekup-hero-thumb img {
                        opacity: 0.15 !important;
                        object-fit: cover !important;
                    }
                    
                    .tekup-hero-content {
                        position: relative;
                        z-index: 1;
                        padding: 60px 0;
                    }
                    
                    .tekup-client-rating,
                    .tekup-client-satisfaction {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default HeroSection;