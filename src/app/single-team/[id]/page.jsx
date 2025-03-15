import React from "react";
import teamData from "~/db/teamData.json";
import SingleTeamSection from "~/components/Page/SingleTeam/SingleTeamSection";
import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import Footer from "~/components/Section/Common/Footer/FooterSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";

const SingleTeamPage = ({ params }) => {
  // Ensure params.id is properly parsed
  const teamMemberId = parseInt(params.id);

  // Find the team member based on the ID
  const teamMember = teamData.find((member) => member.id === teamMemberId);

  if (!teamMember) {
    return <div>Team member not found</div>;
  }

  return (
    <div>
      <Header />
      <PageHeader
        title="Team"
        bgImages={[
          "/images/shop/checkout1.jpg",
          "/images/shop/checkout2.jpg",
          "/images/shop/checkout3.jpg",
        ]}
      />
      <SingleTeamSection teamMember={teamMember} />
      <CtaSection />
      <Footer />
    </div>
  );
};
export default SingleTeamPage;
