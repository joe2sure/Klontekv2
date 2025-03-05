
// import ContactSection from "~/components/Section/Contact/ContactSection";
// import MapSection from "~/components/Section/Contact/MapSection";

import ContactSection from "~/components/Section/Common/ContactSection";
import Footer from "~/components/Section/Common/Footer";
import Header from "~/components/Section/Common/Header/Header";
import MapSection from "~/components/Section/Common/MapSection";
import PageHeader from "~/components/Section/Common/PageHeader";

const ContactPage = () => {
    return (
        <>
        <Header/>
           <PageHeader title="Contact us"/> 
           <ContactSection/>
           <MapSection/>
           <Footer/>
        </>
    );
};

export default ContactPage ;