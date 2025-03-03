"use client"
import teamData from '~/db/teamData.json'
import TeamCard from "~/components/Element/Cards/TeamCard";

const TeamSection = () => {
    return (
        <div className="section tekup-section-padding2">
            <div className="container">
                <div className="tekup-section-title center">
                    <h2>Our working process on how to grow your business</h2>
                </div>
                <div className="row">
                    {teamData?.slice(0, 4).map((item, index) => (
                        <TeamCard item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;