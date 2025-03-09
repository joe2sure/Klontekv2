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