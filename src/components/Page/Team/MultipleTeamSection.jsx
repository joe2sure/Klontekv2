"use client"

import teamData from '~/db/teamData.json'
import MultipleTeamCard from "~/components/Element/Cards/MultipleTeamCard";

const TeamSection = () => {
    return (
        <div className="section tekup-section-padding4">
        <div className="container">
          <div className="row">
          {teamData?.map((item, index) => (
         <MultipleTeamCard item={item} key={index}/>
           ))}
          </div>
        </div>
      </div>
    );
};

export default TeamSection;