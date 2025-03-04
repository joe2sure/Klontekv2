import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import Footer from "~/components/Section/Common/Footer/FooterSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import SingleServiceSection from "~/components/Page/SingleService/SingleServiceSection";

const SingleServicePage = () => {
    return (
        
        <>
          <Header/>
        <PageHeader title="Web Development"/>
        <SingleServiceSection/>
        <CtaSection/>
        <Footer />
            
        </>
    );
};

export default SingleServicePage;