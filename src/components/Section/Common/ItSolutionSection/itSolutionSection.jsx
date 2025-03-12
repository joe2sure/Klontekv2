"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const ItSolutionSection = () => {
    // Images for the carousel
    const images = [
        "/images/v5/digital_market_2.jpg",
        "/images/v5/programming.jpg",
        "/images/v5/Design.jpg",
        "/images/v5/man_teaching_executives_3.jpg"
    ];

    // State to track current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="section dark-bg tekup-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-lg-2">
                        <div className="tekup-thumb ml-30 position-relative">
                            {/* Image carousel */}
                            <div className="image-carousel">
                                {images.map((image, index) => (
                                    <img 
                                        key={index}
                                        src={image} 
                                        alt={`Service Image ${index + 1}`} 
                                        className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                                        style={{
                                            opacity: index === currentImageIndex ? 1 : 0,
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: 'auto',
                                            transition: 'opacity 0.5s ease-in-out'
                                        }}
                                    />
                                ))}
                                {/* Show first image as position reference */}
                                <img 
                                    src={images[0]} 
                                    alt="Service Image Base" 
                                    style={{ visibility: 'hidden' }} 
                                />
                            </div>
                            {/* Rating card that stays fixed */}
                            <div className="tekup-thumb-card right" style={{ position: 'absolute', zIndex: 2 }}>
                                <img src="/images/v3/rating.png" alt="Rating" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="tekup-default-content light-color mr-60">
                            <h2>We make awesome IT services for your business</h2>
                            <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization</p>
                            <div className="tekup-extra-mt">
                                <div className="tekup-icon-list-wrap2">
                                    <div className="tekup-icon-list-item2">
                                        <div className="tekup-icon-list-icon2">
                                            <img src="/images/iconbox/icon8.png" alt="" />
                                        </div>
                                        <div className="tekup-icon-list-data2">
                                            <p>Highly Expert
                                                Team Members</p>
                                        </div>
                                    </div>
                                    <div className="tekup-icon-list-item2">
                                        <div className="tekup-icon-list-icon2">
                                            <img src="/images/iconbox/icon9.png" alt="" />
                                        </div>
                                        <div className="tekup-icon-list-data2">
                                            <p>Urgent Support
                                                for Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tekup-extra-mt">
                                <Link className="tekup-default-btn" href="about-us">More About <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add CSS for carousel */}
            <style jsx>{`
                .image-carousel {
                    position: relative;
                    width: 100%;
                }
                
                .carousel-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }
                
                .carousel-image.active {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default ItSolutionSection;



// import Link from "next/link";

// const ItSolutionSection = () => {
//     return (
//         <div className="section dark-bg tekup-section-padding">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6 order-lg-2">
//                         <div className="tekup-thumb ml-30">
//                             <img src="/images/v5/thumb1.png" alt="" />
//                             <div className="tekup-thumb-card right">
//                                 <img src="/images/v3/rating.png" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 d-flex align-items-center">
//                         <div className="tekup-default-content light-color mr-60">
//                             <h2>We make awesome IT services for your business</h2>
//                             <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization</p>
//                             <div className="tekup-extra-mt">
//                                 <div className="tekup-icon-list-wrap2">
//                                     <div className="tekup-icon-list-item2">
//                                         <div className="tekup-icon-list-icon2">
//                                             <img src="/images/iconbox/icon8.png" alt="" />
//                                         </div>
//                                         <div className="tekup-icon-list-data2">
//                                             <p>Highly Expert
//                                                 Team Members</p>
//                                         </div>
//                                     </div>
//                                     <div className="tekup-icon-list-item2">
//                                         <div className="tekup-icon-list-icon2">
//                                             <img src="/images/iconbox/icon9.png" alt="" />
//                                         </div>
//                                         <div className="tekup-icon-list-data2">
//                                             <p>Urgent Support
//                                                 for Clients</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="tekup-extra-mt">
//                                 <Link className="tekup-default-btn" href="about-us">More About <i className="ri-arrow-right-up-line"></i></Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ItSolutionSection;