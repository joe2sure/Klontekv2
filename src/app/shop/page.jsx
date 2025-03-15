import ShopSection from "~/components/Page/Shop/ShopSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer/FooterSection";

const ShopPage = () => {
  return (
    <>
      <Header />
      <PageHeader
        title="Our Shop"
        bgImages={[
          "/images/shop/man_shop1.jpg",
          "/images/shop/woman_shop1.jpg",
          "/images/shop/woman_shop2.jpg",
        ]}
      />
      <ShopSection />
      <Footer />
    </>
  );
};

export default ShopPage;
