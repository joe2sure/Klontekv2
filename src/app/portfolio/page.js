
import MasonrySection from "~/components/Page/Portfolio/Masonry/MasonrySection";

import Footer from "~/components/Section/Common/Footer/FooterSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";


const Portfolio = () => {
    return (
        <div>
            <Header/>
            <PageHeader title="Portfolio"/>
            <MasonrySection/>
            <Footer/>
        </div>
    );
};

export default Portfolio;