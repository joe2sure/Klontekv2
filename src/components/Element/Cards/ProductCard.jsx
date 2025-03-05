"use client"
import Link from 'next/link'
import React from 'react'
const ProductCard = ({ product }) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="tekup-shop-wrap">
            <div className="tekup-shop-thumb">
                <Link href="single-shop">
                    <img src={product?.image} alt="" />
                </Link>
                <Link className="tekup-shop-btn" href="my-cart">Add to Cart</Link>
                <Link className={product?.sale ? "tekup-shop-badge": ""} href="#">
                    {product?.sale === true ? "Sale" : ""}
                </Link>
            </div>
            <div className="tekup-shop-data">
                <Link href="single-shop">
                    <h5>{product?.name}</h5>
                </Link>
                <h6>{product?.price} <del>$39.00</del></h6>
            </div>
        </div>
    </div>
    );
};

export default ProductCard;