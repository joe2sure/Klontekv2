"use client"

import Link from "next/link";

const CategoryCard = ({ hrefs }) => {
    return (
        <div className="tekup-blog-widgets">
        <h5>Categories</h5>
        <div className="tekup-blog-categorie">
          <ul>
            <li><Link href={hrefs}>Uncategorized<span>(18)</span></Link></li>
            <li><Link href={hrefs}>Marketing<span>(5)</span></Link></li>
            <li><Link href={hrefs}>Business<span>(2)</span></Link></li>
            <li><Link href={hrefs}>Technology<span>(11)</span></Link></li>
            <li><Link href={hrefs}>Consulting<span>(4)</span></Link></li>
            <li><Link href={hrefs}>Cyber Security<span>(8)</span></Link></li>
          </ul>
        </div>
      </div>
    );
};

export default CategoryCard;