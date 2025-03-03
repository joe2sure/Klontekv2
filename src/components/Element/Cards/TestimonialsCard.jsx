
const TestimonialsCard = ({ item }) => {
    return (
        <div className="tekup-t-two-column-slider-item">
            <div className="row">
                <div className="col-lg-5">
                    <div className="tekup-t-two-column-thumb">
                        <img src={item?.image} alt="" />
                    </div>
                </div>
                <div className="col-lg-7 d-flex align-items-center">
                    <div className="tekup-t-two-column-data">
                        <div className="tekup-t-two-column-rating">
                            <ul>
                                <li><i className="ri-star-s-fill"></i></li>
                                <li><i className="ri-star-s-fill"></i></li>
                                <li><i className="ri-star-s-fill"></i></li>
                                <li><i className="ri-star-s-fill"></i></li>
                                <li><i className="ri-star-s-fill"></i></li>
                            </ul>
                        </div>
                        <p>“ {item?.testimonial} ”</p>
                        <div className="tekup-t-two-column-author">
                            <h5>{item?.author?.name}</h5>
                            <span>{item?.author?.role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;