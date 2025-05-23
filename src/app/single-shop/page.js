import { Suspense } from 'react';
import SingleShopSection from "~/components/Page/Shop/SingleShop/SingleShopSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer/FooterSection";

const SinglePage = () => {
  return (
    <>
      <Header />
      <PageHeader
        title="Shop Details"
        bgImages={[
          "/images/shop/checkout1.jpg",
          "/images/shop/checkout2.jpg",
          "/images/shop/checkout3.jpg",
        ]}
      />
      {/* Wrap SingleShopSection in Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <SingleShopSection />
      </Suspense>
      <Footer />
    </>
  );
};

export default SinglePage;