"use client";
import Link from "next/link";
const ChooseUsSection = ({ className }) => {
  return (
      <div className={className}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/images/iconbox/icon8.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Expert Team Members</h4>
                  <p>
                    Our highly skilled professionals bring years of industry experience and specialized knowledge to deliver exceptional solutions tailored to your needs.
                  </p>
                  <Link className="tekup-iconbox-btn" href="single-service">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/images/iconbox/icon9.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Fastest Customer Service</h4>
                  <p>
                    We pride ourselves on rapid response times and efficient problem-solving, ensuring your concerns are addressed promptly with personalized attention.
                  </p>
                  <Link className="tekup-iconbox-btn" href="single-service">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tekup-iconbox-wrap4">
                <div className="tekup-iconbox-icon4">
                  <img src="/images/iconbox/icon10.png" alt="" />
                </div>
                <div className="tekup-iconbox-data4">
                  <h4>Competitive Pricing Plan</h4>
                  <p>
                    Our transparent and flexible pricing options deliver maximum value for your investment, offering premium quality solutions that fit your budget.
                  </p>
                  <Link className="tekup-iconbox-btn" href="single-service">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default ChooseUsSection;

// "use client";

// import Link from "next/link";

// const ChooseUsSection = ({ className }) => {
//   return (
//       <div className={className}>
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-4 col-md-6">
//               <div className="tekup-iconbox-wrap4">
//                 <div className="tekup-iconbox-icon4">
//                   <img src="/images/iconbox/icon8.png" alt="" />
//                 </div>
//                 <div className="tekup-iconbox-data4">
//                   <h4>Expert Team Members</h4>
//                   <p>
//                     We are architects of innovation, trailblazers technological
//                     advancement partners
//                   </p>
//                   <Link className="tekup-iconbox-btn" href="single-service">
//                     Learn More <i className="ri-arrow-right-up-line"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-4 col-md-6">
//               <div className="tekup-iconbox-wrap4">
//                 <div className="tekup-iconbox-icon4">
//                   <img src="/images/iconbox/icon9.png" alt="" />
//                 </div>
//                 <div className="tekup-iconbox-data4">
//                   <h4>Fastest Customer Service</h4>
//                   <p>
//                     We are architects of innovation, trailblazers technological
//                     advancement partners
//                   </p>
//                   <Link className="tekup-iconbox-btn" href="single-service">
//                     Learn More <i className="ri-arrow-right-up-line"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-4 col-md-6">
//               <div className="tekup-iconbox-wrap4">
//                 <div className="tekup-iconbox-icon4">
//                   <img src="/images/iconbox/icon10.png" alt="" />
//                 </div>
//                 <div className="tekup-iconbox-data4">
//                   <h4>Competitive Pricing Plan</h4>
//                   <p>
//                     We are architects of innovation, trailblazers technological
//                     advancement partners
//                   </p>
//                   <Link className="tekup-iconbox-btn" href="single-service">
//                     Learn More <i className="ri-arrow-right-up-line"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default ChooseUsSection;
