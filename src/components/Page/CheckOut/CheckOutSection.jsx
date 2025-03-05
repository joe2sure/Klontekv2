"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const CheckOutSection = () => {
    return (
        <>
        <div className="section tekup-section-padding">
            <div className="container">
                <div className="tekup-checkout-header">
                    <img src="/images/breadcrumb/mark!.svg" alt="" /> Have a coupon? <Link href="#">Click here to enter your code</Link>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tekup-checkout-form">
                            <h5>Billing Details</h5>
                            <form action="#">
                                <div className="tekup-checkout-field">
                                    <label>First name</label>
                                    <input type="text" />
                                </div>
                                <div className="tekup-checkout-field">
                                    <label>Last name</label>
                                    <input type="text" />
                                </div>
                                <div className="tekup-checkout-field">
                                    <label>Company name (optional)</label>
                                    <input type="text" />
                                </div>
                                <div className="tekup-checkout-field dropdown">
                                    <label>Country / Region</label>
                                    <select>
                                        <option value="Option 1">Bangladesh</option>
                                        <option value="Option 2">India</option>
                                        <option value="Option 3">Pakistan</option>
                                    </select>
                                </div>
                                <div className="tekup-checkout-field">
                                    <label>Street address</label>
                                    <input className="house-number" type="text" placeholder="House number and street name" />
                                    <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                                </div>
                                <div className="tekup-checkout-field">
                                    <label>Town / City</label>
                                    <input type="text" />
                                </div>
                                <div className="tekup-checkout-field dropdown">
                                    <label>State</label>
                                    <select>
                                        <option value="Option 1">Select an option...</option>
                                        <option value="Option 2">India</option>
                                        <option value="Option 3">Pakistan</option>
                                    </select>
                                </div>
                                <div className="tekup-checkout-field">
                                    <label>ZIP Code</label>
                                    <input type="text" />
                                </div>
                                <div className="tekup-checkout-field">
                                    <label>Phone</label>
                                    <input type="number" />
                                </div>
                                <div className="tekup-checkout-field">
                                    <label>Email address</label>
                                    <input type="email" />
                                </div>
                                <div className="tekup-checkout-field checkout-additional-information">
                                        <h5>Additional Information</h5>
                                        <label>Order notes&nbsp;(optional)</label>
                                        <textarea name="textarea" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="tekup-checkuot-sidebar">
                                <h5>Your Order</h5>
                                <ul>
                                    <li>Product<span>Subtotal</span></li>
                                    <li>Portable Projector x1<span>$69.00</span></li>
                                    <li>Beats Wireless Buds x1<span>$119.00</span></li>
                                    <li>MagSafe Charger x1<span>$29.00</span></li>
                                    <li>Subtotal<span>$217.00</span></li>
                                    <li>Total<span className="total-amount">$217.00</span></li>
                                </ul>
                                <h6><img src="/images/shop/radio.png" alt="" />Cash on delivery</h6>
                                <span>Pay with cash upon delivery.</span>
                                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                <Link className="tekup-update-cart blue-btn w-full" href='#'>Place Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default CheckOutSection;