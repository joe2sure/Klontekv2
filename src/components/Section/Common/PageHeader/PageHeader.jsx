import Link from "next/link";

const PageHeader = ({
  title,
  bgImage="/images/breadcrumb/breadcrumb.png"
}) => {
  return (
    <div className="tekup-breadcrumb"  style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <h1 className="post__title">{title}</h1>
        <nav className="breadcrumbs">
          <ul>
          <li><Link href="/">Home</Link></li>
          <li>{title} {title==="404"? "page not found" : ""}</li>
          </ul>
        </nav>
  
      </div>
    </div>
  );
};

export default PageHeader;