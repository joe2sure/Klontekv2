"use client"
import Link from 'next/link'
import React from 'react'
import ProductCard from '~/components/Element/Cards/ProductCard';
import Products from '~/db/products.json'


const ShopSection = () => {
    return (
        <div className="section tekup-section-padding">
        <div className="container">
            <div className="row">
    
                {
                    Products?.map(product => <ProductCard product={product} key={product?.id} />)
                }
            </div>
            <div className="tekup-navigation">
                <nav className="navigation pagination center" aria-label="Posts">
                    <div className="nav-links">
                        <Link className="next page-numbers" href="#">
                            <i className="ri-arrow-left-s-line" />
                        </Link>
                        <span aria-current="page" className="page-numbers current">1</span>
                        <Link className="page-numbers" href="#">2</Link>
                        <Link className="page-numbers" href="#">3</Link>
                        <Link className="next page-numbers" href="#">
                            <i className="ri-arrow-right-s-line" />
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    );
};

export default ShopSection;