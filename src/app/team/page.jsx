import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import Footer from "~/components/Section/Common/Footer/FooterSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import MultipleTeamSection from "~/components/Page/Team/MultipleTeamSection";

const TeamPage = () => {
  return (
    <>
      <Header />
      <PageHeader
        title="Our team"
        bgImages={[
          "/images/shop/checkout1.jpg",
          "/images/shop/checkout2.jpg",
          "/images/shop/checkout3.jpg",
        ]}
      />
      <MultipleTeamSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default TeamPage;
