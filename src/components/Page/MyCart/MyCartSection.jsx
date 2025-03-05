/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import { useState } from 'react';
const MyCartSection = () => {
    const [quantity, setQuantity] = useState(1)
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    return (
        <div>
            <div className="tekup-cart-section">
                <div className="container">
                    <div className="tekup-cart-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="tekup-cart-thumb">
                                            <i className="ri-close-line" />
                                            <img src="/images/shop/shop2.png" alt='' />
                                            <h5>Portable Projector</h5>
                                        </div>
                                    </td>
                                    <td>$69.00</td>
                                    <td>
                                        <div className="tekup-product-number">
                                            <span className="tekup-product-minus" onClick={handleDecrement}><i className="ri-subtract-line" /></span>
                                            <input type="text" defaultValue={quantity} />
                                            <span className="tekup-product-plus" onClick={handleIncrement}><i className="ri-add-line" /></span>
                                        </div>
                                    </td>
                                    <td>$69.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="tekup-cart-thumb">
                                            <i className="ri-close-line" />
                                            <img src="/images/shop/shop3.png" alt='' />
                                            <h5>Beats Wireless Buds</h5>
                                        </div>
                                    </td>
                                    <td>$119.00</td>
                                    <td>
                                        <div className="tekup-product-number">
                                            <span className="tekup-product-minus"><i className="ri-subtract-line" /></span>
                                            <input type="text" defaultValue={1} />
                                            <span className="tekup-product-plus"><i className="ri-add-line" /></span>
                                        </div>
                                    </td>
                                    <td>$119.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="tekup-cart-thumb">
                                            <i className="ri-close-line" />
                                            <img src="/images/shop/shop4.png" alt='' />
                                            <h5>MagSafe Charger</h5>
                                        </div>
                                    </td>
                                    <td>$29.00</td>
                                    <td>
                                        <div className="tekup-product-number">
                                            <span className="tekup-product-minus"><i className="ri-subtract-line" /></span>
                                            <input type="text" defaultValue={1} />
                                            <span className="tekup-product-plus"><i className="ri-add-line" /></span>
                                        </div>
                                    </td>
                                    <td>$39.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tekup-cart-footer">
                        <div className="tekup-cupon-code">
                            <input type="number" placeholder="Coupon code" />
                            <img src="/images/shop/shop.png" alt='' />
                        </div>
                        <Link className="tekup-update-cart" href='#'>Update Cart</Link>
                    </div>
                </div>
            </div>

            {/* Show total amount section */}
            <div className="section tekup-section-padding-bottom">
                <div className="container">
                    <div className="tekup-cart-total">
                        <h5>Cart Totals</h5>
                        <div className="tekup-cart-total-item">
                            <p>Subtotal:</p>
                            <p>$217.00</p>
                        </div>
                        <div className="tekup-cart-total-item">
                            <p>Subtotal:</p>
                            <p><span>$217.00</span></p>
                        </div>
                        <Link className="tekup-update-cart blue-btn" href="checkout">Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartSection;