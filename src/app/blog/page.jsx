import BlogSection from "~/components/Section/Blog/BlogSection";
import Header from "~/components/Section/Common/Header/Header";
import PageHeader from "~/components/Section/Common/PageHeader";
import Footer from "~/components/Section/Common/Footer/FooterSection";


const BlogPage = () => {
    return (
        <>
            <Header />
           <PageHeader title="Blog"/>
           <BlogSection/> 
           <Footer/>
        </>
    );
};

export default BlogPage;