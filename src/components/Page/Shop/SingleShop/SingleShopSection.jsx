/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'; // Import the Image component
import Products from '~/db/products.json';

const SingleShopSection = () => {
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const searchParams = useSearchParams();
    const productId = searchParams.get('id');

    useEffect(() => {
        if (productId) {
            const selectedProduct = Products.find(p => p.id === parseInt(productId));
            setProduct(selectedProduct);
        }
    }, [productId]);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const addToCart = () => {
        if (!product) return;

        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity; // Update quantity if item already exists
        } else {
            cartItems.push({ ...product, quantity }); // Add new item to cart
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
        window.location.href = '/my-cart'; // Navigate to cart page
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="section tekup-section-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tekup-tab-slider">
                                <div className="tekup-tabs-container">
                                    <div className="tekup-tabs-wrapper">
                                        {product.images.map((image, index) => (
                                            <div key={index} id={`item${index + 1}`} className="tabContent">
                                                <Image
                                                    src={image}
                                                    alt={`Product Image ${index + 1}`}
                                                    width={500} // Set appropriate width
                                                    height={300} // Set appropriate height
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <ul className="tekup-tabs-menu">
                                    {product.images.map((image, index) => (
                                        <li key={index} className={index === 0 ? "active" : ""}>
                                            <Link href={`#item${index + 1}`}>
                                                <Image
                                                    src={image}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    width={100} // Set appropriate width
                                                    height={100} // Set appropriate height
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tekup-details-content">
                                <h2>{product.name}</h2>
                                <h6>{product.price}</h6>
                                <p>{product.description}</p>
                                <div className="tekup-product-wrap">
                                    <div className="tekup-product-number">
                                        <span className="tekup-product-minus" onClick={handleDecrement}><i className="ri-subtract-line" /></span>
                                        <input type="text" value={quantity} readOnly />
                                        <span className="tekup-product-plus" onClick={handleIncrement}><i className="ri-add-line" /></span>
                                    </div>
                                    <button className="tekup-product-btn" onClick={addToCart}>Add to Cart <img src="/images/breadcrumb/shop.svg" alt="" /></button>
                                </div>
                                <div className="tekup-product-info">
                                    <h5>Quick info</h5>
                                    <ul>
                                        <li><span>Category: </span><Link href="">{product.category}</Link></li>
                                        <li><span>Tags: </span>
                                            {product.tags.map((tag, index) => (
                                                <Link key={index} href="">{tag}{index < product.tags.length - 1 ? ", " : ""}</Link>
                                            ))}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review section with tab */}
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
                                {product.description}
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'specification' ? 'show shows active' : ''}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                {product.specification}
                            </div>
                            <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show shows active' : ''}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                {product.reviews}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SingleShopSection;


// /* eslint-disable @next/next/no-img-element */
// "use client";

// import Link from "next/link";
// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import Products from '~/db/products.json';

// const SingleShopSection = () => {
//     const [activeTab, setActiveTab] = useState("description");
//     const [quantity, setQuantity] = useState(1);
//     const [product, setProduct] = useState(null);
//     const searchParams = useSearchParams();
//     const productId = searchParams.get('id');

//     useEffect(() => {
//         if (productId) {
//             const selectedProduct = Products.find(p => p.id === parseInt(productId));
//             setProduct(selectedProduct);
//         }
//     }, [productId]);

//     const handleIncrement = () => {
//         setQuantity(prevQuantity => prevQuantity + 1);
//     };

//     const handleDecrement = () => {
//         setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
//     };

//     const addToCart = () => {
//         if (!product) return;

//         const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//         const existingItem = cartItems.find(item => item.id === product.id);

//         if (existingItem) {
//             existingItem.quantity += quantity; // Update quantity if item already exists
//         } else {
//             cartItems.push({ ...product, quantity }); // Add new item to cart
//         }

//         localStorage.setItem('cart', JSON.stringify(cartItems));
//         window.location.href = '/my-cart'; // Navigate to cart page
//     };

//     if (!product) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//             <div className="section tekup-section-padding-top">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-6">
//                             <div className="tekup-tab-slider">
//                                 <div className="tekup-tabs-container">
//                                     <div className="tekup-tabs-wrapper">
//                                         {product.images.map((image, index) => (
//                                             <div key={index} id={`item${index + 1}`} className="tabContent">
//                                                 <img src={image} alt={`Product Image ${index + 1}`} />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 <ul className="tekup-tabs-menu">
//                                     {product.images.map((image, index) => (
//                                         <li key={index} className={index === 0 ? "active" : ""}>
//                                             <Link href={`#item${index + 1}`}>
//                                                 <img src={image} alt={`Thumbnail ${index + 1}`} />
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="tekup-details-content">
//                                 <h2>{product.name}</h2>
//                                 <h6>{product.price}</h6>
//                                 <p>{product.description}</p>
//                                 <div className="tekup-product-wrap">
//                                     <div className="tekup-product-number">
//                                         <span className="tekup-product-minus" onClick={handleDecrement}><i className="ri-subtract-line" /></span>
//                                         <input type="text" value={quantity} readOnly />
//                                         <span className="tekup-product-plus" onClick={handleIncrement}><i className="ri-add-line" /></span>
//                                     </div>
//                                     <button className="tekup-product-btn" onClick={addToCart}>Add to Cart <img src="/images/breadcrumb/shop.svg" alt="" /></button>
//                                 </div>
//                                 <div className="tekup-product-info">
//                                     <h5>Quick info</h5>
//                                     <ul>
//                                         <li><span>Category: </span><Link href="">{product.category}</Link></li>
//                                         <li><span>Tags: </span>
//                                             {product.tags.map((tag, index) => (
//                                                 <Link key={index} href="">{tag}{index < product.tags.length - 1 ? ", " : ""}</Link>
//                                             ))}
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Review section with tab */}
//             <div className="section tekup-section-padding">
//                 <div className="container">
//                     <div className="tekup-product-tab">
//                         <ul className="nav nav-pills" id="pills-tab" role="tablist">
//                             <li className="nav-item" role="presentation">
//                                 <button
//                                     className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
//                                     id="pills-home-tab"
//                                     onClick={() => setActiveTab('description')}
//                                 >
//                                     Description
//                                 </button>
//                             </li>
//                             <li className="nav-item" role="presentation">
//                                 <button
//                                     className={`nav-link ${activeTab === 'specification' ? 'active' : ''}`}
//                                     id="pills-profile-tab"
//                                     onClick={() => setActiveTab('specification')}
//                                 >
//                                     Specification
//                                 </button>
//                             </li>
//                             <li className="nav-item" role="presentation">
//                                 <button
//                                     className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
//                                     id="pills-contact-tab"
//                                     onClick={() => setActiveTab('reviews')}
//                                 >
//                                     Reviews (0)
//                                 </button>
//                             </li>
//                         </ul>
//                         <div className="tab-content" id="pills-tabContent">
//                             <div className={`tab-pane fade ${activeTab === 'description' ? 'show shows active' : ''}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
//                                 {product.description}
//                             </div>
//                             <div className={`tab-pane fade ${activeTab === 'specification' ? 'show shows active' : ''}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
//                                 {product.specification}
//                             </div>
//                             <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show shows active' : ''}`} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
//                                 {product.reviews}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SingleShopSection;