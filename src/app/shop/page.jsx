
import ShopSection from "~/components/Page/Shop/ShopSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer/FooterSection";

const ShopPage = () => {
  return (
    <>
      <Header/>
      <PageHeader title="Klontek Shop" />
      <ShopSection />
      <Footer />
    </>
  );
};

export default ShopPage;
