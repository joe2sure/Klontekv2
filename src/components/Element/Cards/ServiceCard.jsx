import Link from "next/link";

const ServicesCard = ({ item }) => {
    return (
        <div className="tekup-service-wrap">
            <div className="tekup-service-thumb">
                <img src={item?.image} alt="" />
                <div className="tekup-service-data">
                    <img src={item?.icon} alt="" />
                    <Link href="single-service">
                        <h5>{item?.title}</h5>
                    </Link>
                    <p>{item?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;


// import Link from "next/link";

// const ServiceCard = ({ item }) => {
//     return (
//         <div className="tekup-iconbox-wrap border-all">
//             <div className="tekup-iconbox-icon">
//                 <img src={item?.icon} alt="" />
//             </div>
//             <div className="tekup-iconbox-data">
//                 <Link href="single-service">
//                     <h4>{item?.title}</h4>
//                 </Link>
//                 <p>{item?.description}</p>
//             </div>
//         </div>
//     );
// };

// export default ServiceCard;