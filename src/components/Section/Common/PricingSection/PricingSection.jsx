"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("month");

  const handleBillingChange = (event) => {
    setBillingCycle(event.target.value);
  };

  // Calculate yearly price (10% discount for annual billing)
  const calculateYearlyPrice = (monthlyPrice) => {
    const yearlyPrice = monthlyPrice * 12 * 0.9; // 10% discount
    return Math.round(yearlyPrice);
  };

  return (
    <div className="section tekup-section-padding2 bg-light1">
      <div className="container">
        <div className="tekup-section-title center">
          <h2>Flexible & Scalable Solutions</h2>

          {/* Modernized Billing Cycle Selector */}
          <div
            className="tekup-billing-selector"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            <FormControl
              variant="outlined"
              sx={{ minWidth: 250, background: "white" }}
            >
              <InputLabel id="billing-cycle-label">Billing Cycle</InputLabel>
              <Select
                labelId="billing-cycle-label"
                id="billing-cycle-select"
                value={billingCycle}
                onChange={handleBillingChange}
                label="Billing Cycle"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ddd",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#333",
                  },
                }}
              >
                <MenuItem value="month">Monthly Billing</MenuItem>
                <MenuItem value="year">Annual Billing (Save 10%)</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="tekup-pricing-wrap">
              <div className="tekup-pricing-header">
                <h4>AI Starter</h4>
                <p>
                  Perfect for businesses looking to implement AI-driven
                  analytics and automation.
                </p>
              </div>
              <div className="tekup-pricing-price">
                {billingCycle === "month" ? (
                  <h2>
                    $299<span>/month</span>
                  </h2>
                ) : (
                  <h2>
                    ${calculateYearlyPrice(299)}
                    <span>/year</span>
                  </h2>
                )}
              </div>
              <Link className="tekup-pricing-btn" href="pricing">
                Select This Package <i className="ri-arrow-right-up-line"></i>
              </Link>
              <div className="tekup-pricing-feature">
                <ul>
                  <li>
                    <i className="ri-check-line"></i>Basic AI Analytics
                    dashboard
                  </li>
                  <li>
                    <i className="ri-check-line"></i>5 AI-powered automation
                    workflows
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Data processing up to
                    10GB/month
                  </li>
                  <li>
                    <i className="ri-check-line"></i>1 AI development kit
                    included
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Technical support during
                    business hours
                  </li>
                  {billingCycle === "year" && (
                    <>
                      <li>
                        <i className="ri-check-line"></i>Quarterly AI model
                        retraining
                      </li>
                      <li>
                        <i className="ri-check-line"></i>Basic model
                        customization
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="tekup-pricing-wrap">
              <div className="tekup-pricing-header">
                <h4>Blockchain Pro</h4>
                <p>
                  Ideal for companies building secure blockchain applications with
                  smart contracts.
                </p>
              </div>
              <div className="tekup-pricing-price">
                {billingCycle === "month" ? (
                  <h2>
                    $599<span>/month</span>
                  </h2>
                ) : (
                  <h2>
                    ${calculateYearlyPrice(599)}
                    <span>/year</span>
                  </h2>
                )}
              </div>
              <Link className="tekup-pricing-btn active" href="pricing">
                Select This Package <i className="ri-arrow-right-up-line"></i>
              </Link>
              <div className="tekup-pricing-feature">
                <ul>
                  <li>
                    <i className="ri-check-line"></i>Custom Smart Contract
                    development
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Web3 integration services
                  </li>
                  <li>
                    <i className="ri-check-line"></i>NFT marketplace development
                    toolkit
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Blockchain security audit
                    included
                  </li>
                  <li>
                    <i className="ri-check-line"></i>24/7 priority technical
                    support
                  </li>
                  {billingCycle === "year" && (
                    <>
                      <li>
                        <i className="ri-check-line"></i>Quarterly security
                        reassessment
                      </li>
                      <li>
                        <i className="ri-check-line"></i>DeFi integration
                        toolkit
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="tekup-pricing-wrap">
              <div className="tekup-pricing-header">
                <h4>Software Development</h4>
                <p>
                  Complete web and mobile app development services from design to
                  deployment.
                </p>
              </div>
              <div className="tekup-pricing-price">
                {billingCycle === "month" ? (
                  <h2>
                    $899<span>/month</span>
                  </h2>
                ) : (
                  <h2>
                    ${calculateYearlyPrice(899)}
                    <span>/year</span>
                  </h2>
                )}
              </div>
              <Link className="tekup-pricing-btn" href="pricing">
                Select This Package <i className="ri-arrow-right-up-line"></i>
              </Link>
              <div className="tekup-pricing-feature">
                <ul>
                  <li>
                    <i className="ri-check-line"></i>UI/UX design and prototyping
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Full-stack web or mobile
                    development
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Cross-platform compatibility
                  </li>
                  <li>
                    <i className="ri-check-line"></i>API integration and
                    development
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Post-launch maintenance and
                    support
                  </li>
                  {billingCycle === "year" && (
                    <>
                      <li>
                        <i className="ri-check-line"></i>Quarterly performance
                        optimization
                      </li>
                      <li>
                        <i className="ri-check-line"></i>One major feature update
                        per year
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;


// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const PricingSection = () => {
//     const [billingCycle, setBillingCycle] = useState("month");

//     const handleBillingChange = (event) => {
//         setBillingCycle(event.target.value);
//     };

//     // Calculate yearly price (10% discount for annual billing)
//     const calculateYearlyPrice = (monthlyPrice) => {
//         const yearlyPrice = monthlyPrice * 12 * 0.9; // 10% discount
//         return Math.round(yearlyPrice);
//     };

//     return (
//         <div className="section tekup-section-padding2 bg-light1">
//             <div className="container">
//                 <div className="tekup-section-title center">
//                     <h2>Flexible & Scalable Solutions</h2>
                    
//                     {/* Billing cycle selector */}
//                     <div className="tekup-billing-selector" style={{ marginTop: "20px", textAlign: "center" }}>
//                         <select 
//                             onChange={handleBillingChange} 
//                             value={billingCycle}
//                             style={{
//                                 padding: "10px 20px",
//                                 borderRadius: "5px",
//                                 border: "1px solid #ddd",
//                                 fontSize: "16px",
//                                 cursor: "pointer",
//                                 marginBottom: "20px"
//                             }}
//                         >
//                             <option value="month">Monthly Billing</option>
//                             <option value="year">Annual Billing (Save 10%)</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-xl-4 col-md-6">
//                         <div className="tekup-pricing-wrap">
//                             <div className="tekup-pricing-header">
//                                 <h4>AI Starter</h4>
//                                 <p>Perfect for businesses looking to implement AI-driven analytics and automation.</p>
//                             </div>
//                             <div className="tekup-pricing-price">
//                                 {billingCycle === "month" ? (
//                                     <h2>$299<span>/month</span></h2>
//                                 ) : (
//                                     <h2>${calculateYearlyPrice(299)}<span>/year</span></h2>
//                                 )}
//                             </div>
//                             <Link className="tekup-pricing-btn" href="pricing">Select This Package <i className="ri-arrow-right-up-line"></i></Link>
//                             <div className="tekup-pricing-feature">
//                                 <ul>
//                                     <li><i className="ri-check-line"></i>Basic AI Analytics dashboard</li>
//                                     <li><i className="ri-check-line"></i>5 AI-powered automation workflows</li>
//                                     <li><i className="ri-check-line"></i>Data processing up to 10GB/month</li>
//                                     <li><i className="ri-check-line"></i>1 AI development kit included</li>
//                                     <li><i className="ri-check-line"></i>Technical support during business hours</li>
//                                     {billingCycle === "year" && (
//                                         <>
//                                             <li><i className="ri-check-line"></i>Quarterly AI model retraining</li>
//                                             <li><i className="ri-check-line"></i>Basic model customization</li>
//                                         </>
//                                     )}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xl-4 col-md-6">
//                         <div className="tekup-pricing-wrap">
//                             <div className="tekup-pricing-header">
//                                 <h4>Blockchain Pro</h4>
//                                 <p>Ideal for companies building secure blockchain applications with smart contracts.</p>
//                             </div>
//                             <div className="tekup-pricing-price">
//                                 {billingCycle === "month" ? (
//                                     <h2>$599<span>/month</span></h2>
//                                 ) : (
//                                     <h2>${calculateYearlyPrice(599)}<span>/year</span></h2>
//                                 )}
//                             </div>
//                             <Link className="tekup-pricing-btn active" href="pricing">Select This Package <i className="ri-arrow-right-up-line"></i></Link>
//                             <div className="tekup-pricing-feature">
//                                 <ul>
//                                     <li><i className="ri-check-line"></i>Custom Smart Contract development</li>
//                                     <li><i className="ri-check-line"></i>Web3 integration services</li>
//                                     <li><i className="ri-check-line"></i>NFT marketplace development toolkit</li>
//                                     <li><i className="ri-check-line"></i>Blockchain security audit included</li>
//                                     <li><i className="ri-check-line"></i>24/7 priority technical support</li>
//                                     {billingCycle === "year" && (
//                                         <>
//                                             <li><i className="ri-check-line"></i>Quarterly security reassessment</li>
//                                             <li><i className="ri-check-line"></i>DeFi integration toolkit</li>
//                                         </>
//                                     )}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xl-4 col-md-6">
//                         <div className="tekup-pricing-wrap">
//                             <div className="tekup-pricing-header">
//                                 <h4>Software Development</h4>
//                                 <p>Complete web and mobile app development services from design to deployment.</p>
//                             </div>
//                             <div className="tekup-pricing-price">
//                                 {billingCycle === "month" ? (
//                                     <h2>$899<span>/month</span></h2>
//                                 ) : (
//                                     <h2>${calculateYearlyPrice(899)}<span>/year</span></h2>
//                                 )}
//                             </div>
//                             <Link className="tekup-pricing-btn" href="pricing">Select This Package <i className="ri-arrow-right-up-line"></i></Link>
//                             <div className="tekup-pricing-feature">
//                                 <ul>
//                                     <li><i className="ri-check-line"></i>UI/UX design and prototyping</li>
//                                     <li><i className="ri-check-line"></i>Full-stack web or mobile development</li>
//                                     <li><i className="ri-check-line"></i>Cross-platform compatibility</li>
//                                     <li><i className="ri-check-line"></i>API integration and development</li>
//                                     <li><i className="ri-check-line"></i>Post-launch maintenance and support</li>
//                                     {billingCycle === "year" && (
//                                         <>
//                                             <li><i className="ri-check-line"></i>Quarterly performance optimization</li>
//                                             <li><i className="ri-check-line"></i>One major feature update per year</li>
//                                         </>
//                                     )}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default PricingSection;