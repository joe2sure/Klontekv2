import Link from "next/link";

const ServiceCard = ({ item }) => {
    return (
        <div className="tekup-iconbox-wrap border-all">
            <div className="tekup-iconbox-icon">
                <img src={item?.icon} alt="" />
            </div>
            <div className="tekup-iconbox-data">
                <Link href="single-service">
                    <h4>{item?.title}</h4>
                </Link>
                <p>{item?.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;