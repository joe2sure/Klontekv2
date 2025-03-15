import ChooseUsSection from "~/components/Section/Common/ChooseUs/ChooseUsSection";
import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import Footer from "~/components/Section/Common/Footer/FooterSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import WorkProcessSection from "~/components/Section/Common/WorkProcess/WorkProcessSection";
import ServiceGridSection from "~/components/Section/Common/ServiceGridSection/ServiceGridSection";

const ServicePage = () => {
  return (
    <div>
      <Header />
      <PageHeader
        title="Our Services"
        bgImages={[
          "/images/shop/service1.jpg",
          "/images/shop/service2.jpg",
          "/images/shop/service4.jpg",
        ]}
      />
      <ChooseUsSection className="section tekup-section-padding4" />
      <ServiceGridSection />
      <WorkProcessSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default ServicePage;
