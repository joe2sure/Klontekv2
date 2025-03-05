/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from 'react';
import ProductCard from "~/components/Element/Cards/ProductCard";
import Products from '~/db/products.json'

const SingleShopSection = () => {
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1)

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
    return (
        <>
            <div className="section tekup-section-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tekup-tab-slider">
                                <div className="tekup-tabs-container">
                                    <div className="tekup-tabs-wrapper">
                                        <div id="item1" className="tabContent">
                                            <img src="/images/shop/shop01.png" alt="" />
                                        </div>
                                        <div id="item2" className="tabContent">
                                            <img src="/images/shop/shop2.png" alt="" />
                                        </div>
                                        <div id="item3" className="tabContent">
                                            <img src="/images/shop/shop3.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="tekup-tabs-menu">
                                    <li className="active">
                                        <Link href="#item1">
                                            <img src="/images/shop/shop01.png" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#item2">
                                            <img src="/images/shop/shop2.png" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#item3">
                                            <img src="/images/shop/shop3.png" alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tekup-details-content">
                                <h2>Cellular Smart Watch</h2>
                                <h6>$249.00</h6>
                                <p>We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization</p>
                                <div className="tekup-product-wrap">
                                    <div className="tekup-product-number">
                                        <span className="tekup-product-minus" onClick={handleDecrement}><i className="ri-subtract-line" /></span>
                                        <input type="text" value={quantity} readOnly />
                                        <span className="tekup-product-plus" onClick={handleIncrement}><i className="ri-add-line" /></span>
                                    </div>
                                    <Link className="tekup-product-btn" href="">Add to Cart <img src="/images/breadcrumb/shop.svg" alt="" /></Link>
                                </div>
                                <div className="tekup-product-info">
                                    <h5>Quick info</h5>
                                    <ul>
                                        <li><span>Category: </span><Link href="">Smart Watch</Link></li>
                                        <li><span>Tags: </span><Link href="">Shop,</Link> <Link href="">Technology</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* review section wtih tab */}
            <div className="section tekup-section-padding">
                <div className="container">
                    <div className="tekup-product-tab">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                                    id="pills-home-tab"
                                    onClick={() => setActiveTab('description')}
                                >
                                    Description
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'specification' ? 'active' : ''}`}
                                    id="pills-profile-tab"
                                    onClick={() => setActiveTab('specification')}
                                >
                                    Specification
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                                    id="pills-contact-tab"
                                    onClick={() => setActiveTab('reviews')}
                                >
                                    Reviews (0)
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className={`tab-pane fade ${activeTab === 'description' ? 'show shows active' : ''}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                Use both direct conversations and indirect observations to get visibility into employees’ challenges and concerns. Use every opportunity to make to employees that you support and care them. To facilitate regular conversations between managers and employees, provide managers with guidance on how best to broach sensitive subjects arising from the COVID-19 pandemic
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'specification' ? 'show shows active' : ''}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                Use both direct conversations and indirect observations to get visibility into employees’ challenges and concerns. Use every opportunity to make to employees that you support and care them. To facilitate regular conversations between managers and employees, provide managers with guidance on how best to broach sensitive subjects arising from the COVID-19 pandemic
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show shows active' : ''}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                Use both direct conversations and indirect observations to get visibility into employees’ challenges and concerns. Use every opportunity to make to employees that you support and care them. To facilitate regular conversations between managers and employees, provide managers with guidance on how best to broach sensitive subjects arising from the COVID-19 pandemic
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* This section for suggestion product */}
            <div className="tekup-related-product-section">
                <div className="container">
                    <div className="tekup-section-title center">
                        <h2>Related products</h2>
                    </div>
                    <div className="row">
                        {Products.slice(0, 4).map(product => <ProductCard product={product} key={product?.id} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleShopSection;