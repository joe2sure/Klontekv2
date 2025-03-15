import AboutSection from "~/components/Page/About/AboutSection/AboutSection";
import PageHeader from "~/components/Section/Common/PageHeader";
import Header from "~/components/Section/Common/Header/Header";
import Footer from "~/components/Section/Common/Footer/FooterSection";
import ContentSection from "~/components/Page/About/ContentSection/ContentSection";
import FactSection from "~/components/Page/About/FactSection/FactSection";
import TeamSection from "~/components/Page/About/TeamSection/TeamSection";
import AboutUsTestimonialSection from "~/components/Page/About/AboutUsTestimonialSection/AboutUsTestimonialSection";
import LetsBuildSection from "~/components/Section/Common/LetsBuildSection";
import CtaSection from "~/components/Section/Common/Cta/CtaSection";

const Aboutpage = () => {
  return (
    <>
      {/* <HeaderTwo className="tekup-header-top bg-light1 "/> */}
      <Header />
      <PageHeader
        title="About Us"
        bgImages={[
          "/images/p2/web3_1.jpg",
          "/images/p2/AI_app_2.jpg",
          "/images/p2/grocery_1.jpg",
        ]}
      />
      <AboutSection />
      <ContentSection />
      <FactSection />
      <TeamSection />
      <AboutUsTestimonialSection />
      <LetsBuildSection />
      <CtaSection />
      <Footer />
      {/* <FooterOneSection className="tekup-footer-section dark-bg"/> */}
    </>
  );
};

export default Aboutpage;
