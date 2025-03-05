
import CheckOutSection from "~/components/Page/CheckOut";
import Footer from "~/components/Section/Common/Footer";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";



const CheckOutPage = () => {
    return (
        <>
        <Header/>
          <PageHeader title="Checkout"/> 
          <CheckOutSection/> 
          <Footer/>
        </>
    );
};

export default CheckOutPage ;