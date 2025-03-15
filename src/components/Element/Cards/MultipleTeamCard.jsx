import Link from "next/link";

const TeamCard = ({ item }) => {
  return (
    <div className="col-xl-3 col-md-6 extra-padding-off">
      <div className="tekup-team-wrap">
        <div className="tekup-team-thumb">
          <img
            src={item?.image}
            alt=""
            style={{
              width: "300px",
              height: "340px",
              objectFit: "cover",
            }}
          />
          <div className="tekup-social-icon-box style-four position">
            <ul>
              <li>
                <Link href={item?.socialMedia?.linkedin}>
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </li>
              <li>
                <Link href={item?.socialMedia?.twitter}>
                  <i className="ri-twitter-fill"></i>
                </Link>
              </li>
              <li>
                <Link href={item?.socialMedia?.instagram}>
                  <i className="ri-instagram-fill"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="tekup-team-data">
          {/* Use dynamic routing with the team member's ID */}
          <Link href={`/single-team/${item.id}`}>
            <h5>{item?.name}</h5>
          </Link>
          <p>{item?.position}</p>
        </div>
      </div>
    </div>
  );
};
export default TeamCard;