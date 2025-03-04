"use client"

import Link from "next/link";

const SingleServiceMenuCard = () => {
    return (
        <div className="tekup-service-menu">
        <ul>
          <li><Link href="">Web Development <i className="ri-arrow-right-up-line"></i></Link></li>
          <li><Link href="">App Development <i className="ri-arrow-right-up-line"></i></Link></li>
          <li><Link href="">UI/UX Design <i className="ri-arrow-right-up-line"></i></Link></li>
          <li><Link href="">Digital Marketing <i className="ri-arrow-right-up-line"></i></Link></li>
          <li><Link href="">IT Management <i className="ri-arrow-right-up-line"></i></Link></li>
          <li><Link href="">Cyber Security <i className="ri-arrow-right-up-line"></i></Link></li>
        </ul>
      </div>
    );
};

export default SingleServiceMenuCard;