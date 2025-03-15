"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

const PageHeader = ({ 
  title, 
  bgImages = ["/images/breadcrumb/breadcrumb.png"] // Default background images
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (bgImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [bgImages]);

  return (
    <div 
      className="tekup-breadcrumb"
      style={{ backgroundImage: `url(${bgImages[currentImageIndex]})`, transition: "background-image 1s ease-in-out" }}
    >
      <div className="container">
        <h1 className="post__title">{title}</h1>
        <nav className="breadcrumbs">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li>{title} {title === "404" ? "page not found" : ""}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;



// import Link from "next/link";

// const PageHeader = ({
//   title,
//   bgImage="/images/breadcrumb/breadcrumb.png"
// }) => {
//   return (
//     <div className="tekup-breadcrumb"  style={{ backgroundImage: `url(${bgImage})` }}>
//       <div className="container">
//         <h1 className="post__title">{title}</h1>
//         <nav className="breadcrumbs">
//           <ul>
//           <li><Link href="/">Home</Link></li>
//           <li>{title} {title==="404"? "page not found" : ""}</li>
//           </ul>
//         </nav>
  
//       </div>
//     </div>
//   );
// };

// export default PageHeader;