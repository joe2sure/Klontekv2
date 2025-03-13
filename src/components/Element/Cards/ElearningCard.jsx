import Link from "next/link";

const ElearningCard = ({ item }) => {
    return (
        <div className="tekup-portfolio-wrap">
            <div className="tekup-portfolio-thumb">
                {/* Add inline styles or a class to enforce image dimensions */}
                <img 
                    src={item?.image} 
                    alt="" 
                    style={{ 
                        width: '416px', 
                        height: '450px', 
                        objectFit: 'cover' 
                    }} 
                />
                <div className="tekup-portfolio-data">
                    <Link href="single-portfolio">
                        <h5>{item?.title}</h5>
                    </Link>
                    <p>{item?.category}</p>
                    <Link className="tekup-portfolio-btn" href="single-portfolio">
                        <i className="ri-arrow-right-up-line"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ElearningCard;


// import Link from "next/link";

// const ElearningCard = ({ item }) => {
//     return (
//         <div className="tekup-portfolio-wrap">
//             <div className="tekup-portfolio-thumb">
//                 <img src={item?.image} alt="" />
//                 <div className="tekup-portfolio-data">
//                     <Link href="single-portfolio">
//                         <h5>{item?.title}</h5>
//                     </Link>
//                     <p>{item?.category}</p>
//                     <Link className="tekup-portfolio-btn" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ElearningCard;