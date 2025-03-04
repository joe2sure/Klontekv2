import Link from "next/link";

const TagCard = ({ hrefs }) => {
    return (
        <div className="tekup-blog-widgets">
        <h5>Tags</h5>
        <div className="tekup-blog-tags">
          <ul>
            <li><Link href={hrefs}>Business</Link></li>
            <li><Link href={hrefs}>Digital</Link></li>
            <li><Link href={hrefs}>IT Solution</Link></li>
            <li><Link href={hrefs}>Technology</Link></li>
            <li><Link href={hrefs}>Cyber Security</Link></li>
            <li><Link href={hrefs}>Digital</Link></li>
            <li><Link href={hrefs}>Finance</Link></li>
            <li><Link href={hrefs}>Software</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default TagCard;