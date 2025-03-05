
import SingleShopSection from "~/components/Page/Shop/SingleShop/SingleShopSection";

import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer/FooterSection";


const SinglePage = () => {
  return (
    <>
      <Header />
      <PageHeader title="Shop Details" />
      <SingleShopSection />
      <Footer />
    </>
  );
};

export default SinglePage;
