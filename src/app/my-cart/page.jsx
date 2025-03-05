
import MyCartSection from "~/components/Page/MyCart";
import Footer from "~/components/Section/Common/Footer";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";

// import MyCartSection from "~/components/Section/MyCart/MyCartSection";


const CartPage = () => {
    return (
        <>
        <Header />
          <PageHeader title="My Cart"/> 
          <MyCartSection/> 
          <Footer/>
        </>
    );
};

export default CartPage;