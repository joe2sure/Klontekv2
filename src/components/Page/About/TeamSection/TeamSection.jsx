"use client"

import TeamCard from '~/components/Element/Cards/TeamCard';
import teamData from '~/db/aboutTeamData.json'

const TeamSection = () => {

    return (
        <div className="section tekup-section-padding2">
        <div className="container">
          <div className="tekup-section-title center">
            <h2>Meet the team behind techverse</h2>
          </div>
          <div className="row">
          {teamData?.map((item, index) => (
         <TeamCard item={item} key={index}/>
           ))}
          </div>
        </div>
      </div>
    );
};

export default TeamSection;