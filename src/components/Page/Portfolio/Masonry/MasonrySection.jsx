"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


const MasonrySection = () => {
    const isotopeRef = useRef(null);
    const [filterKey, setFilterKey] = useState("*");
  
    useEffect(() => {
      // Check if window is defined (i.e., in the browser environment)
      if (typeof window !== "undefined") {
        // Dynamically import Isotope only in the client-side code
        import("isotope-layout").then((Isotope) => {
          // Initialize Isotope grid
          isotopeRef.current = new Isotope.default(".filter-container", {
            itemSelector: ".filter-item",
            layoutMode: "fitRows",
          });
        });
      }
    }, []);
  
    useEffect(() => {
      // Check if isotopeRef.current is defined (i.e., Isotope is initialized)
      if (isotopeRef.current) {
        // Arrange items based on filter key
        if (filterKey === "*") isotopeRef.current.arrange({ filter: `*` });
        else isotopeRef.current.arrange({ filter: `.${filterKey}` });
      }
    }, [filterKey]);
  
    // Event handler for filter key change
    const handleFilterKeyChange = (key) => () => {
      setFilterKey(key);
    };
    return (
        <div className="section tekup-section-padding overflow-hidden">
        <div className="container overflow-hidden">
          <div className="tekup-portfolio-menu">
            <ul
              id="watch-filter-gallery"
              className="option-set clear-both"
              data-option-key="filter"
            >
              <li
                className={filterKey === "*" ? "active" : ""}
                onClick={handleFilterKeyChange("*")}
              >
               Show All
              </li>
              <li
                className={filterKey === "development" ? "active" : ""}
                onClick={handleFilterKeyChange("development")}
              >
                Development
              </li>
              <li
                className={filterKey === "consultancy" ? "active" : ""}
                onClick={handleFilterKeyChange("consultancy")}
              >
               IT Consultancy
              </li>
              <li
                className={filterKey === "security" ? "active" : ""}
                onClick={handleFilterKeyChange("security")}
              >
              Cyber Security
              </li>
              <li
                className={filterKey === "business" ? "active" : ""}
                onClick={handleFilterKeyChange("business")}
              >
             Business
              </li>
            </ul>
          </div>
          <div className="tekup-portfolio-column filter-container" id="tekup-portfolio-masonay" >
            <div className="filter-item business consultancy">
              <div className="collection-grid-item business consultancy">
                <div className="tekup-portfolio-wrap ">
                <div className="tekup-portfolio-thumb">
                <img src="/images/p2/p_1.png" alt=""/>
                <div className="tekup-portfolio-data">
                  <Link href="single-portfolio">
                    <h5>CMS Software Solution</h5>
                  </Link>
                  <p>Development</p>
                  <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="filter-item development">
              <div className="collection-grid-item  development">
                <div className="tekup-portfolio-wrap">
                <div className="tekup-portfolio-thumb">
                <img src="/images/p2/p_2.png" alt=""/>
                <div className="tekup-portfolio-data">
                  <Link href="single-portfolio">
                    <h5>CMS Software Solution</h5>
                  </Link>
                  <p>Development</p>
                  <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="filter-item Security business consultancy">
              <div className="collection-grid-item  Security business consultancy ">
                <div className="tekup-portfolio-wrap">
                <div className="tekup-portfolio-thumb">
                <img src="/images/p2/p_3.png" alt=""/>
                <div className="tekup-portfolio-data">
                  <Link href="single-portfolio">
                    <h5>CMS Software Solution</h5>
                  </Link>
                  <p>Development</p>
                  <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="filter-item consultancy">
              <div className="collection-grid-item consultancy">
                <div className="tekup-portfolio-wrap ">
                <div className="tekup-portfolio-thumb">
                <img src="/images/p2/p_4.png" alt=""/>
                <div className="tekup-portfolio-data">
                  <Link href="single-portfolio">
                    <h5>CMS Software Solution</h5>
                  </Link>
                  <p>Development</p>
                  <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="filter-item development security">
              <div className="collection-grid-item development security">
                <div className="tekup-portfolio-wrap Portfolio-thumb-img">
                <div className="tekup-portfolio-thumb">
                <img src="/images/p2/p_5.png" alt=""/>
                <div className="tekup-portfolio-data">
                  <Link href="single-portfolio">
                    <h5>CMS Software Solution</h5>
                  </Link>
                  <p>Development</p>
                  <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="filter-item security">
              <div className="collection-grid-item security">
                <div className="tekup-portfolio-wrap">
                <div className="tekup-portfolio-thumb">
                <img src="/images/p2/p_6.png" alt=""/>
                <div className="tekup-portfolio-data">
                  <Link href="single-portfolio">
                    <h5>CMS Software Solution</h5>
                  </Link>
                  <p>Development</p>
                  <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="filter-item consultancy business">
              <div className="collection-grid-item consultancy business">
                <div className="tekup-portfolio-wrap">
                <div className="tekup-portfolio-thumb">
                <img src="/images/p2/p_7.png" alt=""/>
                <div className="tekup-portfolio-data">
                  <Link href="single-portfolio">
                    <h5>CMS Software Solution</h5>
                  </Link>
                  <p>Development</p>
                  <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="filter-item consultancy business">
              <div className="collection-grid-item consultancy business">
                <div className="tekup-portfolio-wrap">
                <div className="tekup-portfolio-thumb">
                <img src="/images/p2/p_8.png" alt=""/>
                <div className="tekup-portfolio-data">
                  <Link href="single-portfolio">
                    <h5>CMS Software Solution</h5>
                  </Link>
                  <p>Development</p>
                  <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="filter-item security business">
              <div className="collection-grid-item security business">
                <div className="tekup-portfolio-wrap Portfolio-thumb-img-two">
                <div className="tekup-portfolio-thumb">
                <img src="/images/p2/p_9.png" alt=""/>
                <div className="tekup-portfolio-data">
                  <Link href="single-portfolio">
                    <h5>CMS Software Solution</h5>
                  </Link>
                  <p>Development</p>
                  <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className="filter-item development">
              <div className="collection-grid-item  development">
                <div className="tekup-portfolio-wrap">
                <div className="tekup-portfolio-thumb">
                <img src="/images/p2/p_10.png" alt=""/>
                <div className="tekup-portfolio-data">
                  <Link href="single-portfolio">
                    <h5>CMS Software Solution</h5>
                  </Link>
                  <p>Development</p>
                  <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                </div>
                </div>
              </div>
            </div>
           
          </div>
          <div className="tekup-navigation">
          <nav className="navigation pagination center" aria-label="Posts">
            <div className="nav-links">
              <span aria-current="page" className="page-numbers current">1</span>
              <Link className="page-numbers" href="">2</Link>
              <Link className="page-numbers" href="">3</Link>
              <Link className="next page-numbers" href="">
                <i className="ri-arrow-right-s-line"></i>
              </Link>
            </div>
          </nav>
        </div>
        </div>
      </div>
    );
};

export default MasonrySection;