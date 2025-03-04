import React from 'react';
import SingleTeamSection from '~/components/Page/SingleTeam/SingleTeamSection';
import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import Footer from "~/components/Section/Common/Footer/FooterSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";


const page = () => {
    return (
        <div>
            <Header/>
            <PageHeader title="Team"/>
            <SingleTeamSection/>
            <CtaSection/>
            <Footer />
        </div>
    );
};

export default page;