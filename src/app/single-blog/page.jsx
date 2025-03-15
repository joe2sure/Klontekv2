"use client";

import Footer from "~/components/Section/Common/Footer/FooterSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import SingleBlogSection from "~/components/Page/SingleBlog/SingleBlogSection";

const SingleBlogPage = () => {
  return (
    <div>
      <Header />
      <PageHeader
        title="Technology support allows erie non-profit to serve"
        bgImages={[
          "/images/shop/checkout1.jpg",
          "/images/shop/checkout2.jpg",
          "/images/shop/checkout3.jpg",
        ]}
      />
      <SingleBlogSection />
      <Footer />
    </div>
  );
};

export default SingleBlogPage;
