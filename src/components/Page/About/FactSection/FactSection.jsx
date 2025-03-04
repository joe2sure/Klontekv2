"use client"

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const FactSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById("counter-fact");
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
          setIsVisible(isVisible);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
        <div className="section bg-accent tekup-section-padding3"id="counter-fact">
        <div id="tekup-counter"></div>
        <div className="container">
          <div className="tekup-counter-wrap4">
            <div className="tekup-counter-data4">
              <h2><span>{isVisible && <CountUp end={26} duration={3} />}</span>+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="tekup-counter-data4">
              <h2><span>{isVisible && <CountUp end={730} duration={3} />}</span>+</h2>
              <p>Successfully Projects</p>
            </div>
            <div className="tekup-counter-data4">
              <h2><span>{isVisible && <CountUp end={198} duration={3} />}</span>+</h2>
              <p>Satisfied Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FactSection;