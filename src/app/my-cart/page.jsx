import MyCartSection from "~/components/Page/MyCart";
import Footer from "~/components/Section/Common/Footer";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";

const CartPage = () => {
  return (
    <>
      <Header />
      <PageHeader
        title="My Cart"
        bgImages={[
          "/images/shop/checkout1.jpg",
          "/images/shop/checkout3.jpg",
          "/images/shop/checkout2.jpg",
        ]}
      />
      <MyCartSection />
      <Footer />
    </>
  );
};

export default CartPage;
