import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import Footer from "~/components/Section/Common/Footer/FooterSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import QuestionAccordionSection from "~/components/Section/Common/QuestionAccordionSection";
import PricingSection from "~/components/Section/Common/PricingSection";

const PricingPage = () => {
  return (
    <>
      <Header />
      <PageHeader
        title="Pricing plan"
        bgImages={[
          "/images/shop/pricing1.jpg",
          "/images/shop/pricing3.jpg",
          "/images/shop/pricing2.jpg",
        ]}
      />
      <PricingSection />
      <QuestionAccordionSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default PricingPage;
