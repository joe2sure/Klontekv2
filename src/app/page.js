import React from "react";
import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import Footer from "~/components/Section/Common/Footer/FooterSection";
import Header from "~/components/Section/Common/Header/Header";
import BrandSection from '~/components/Section/Common/BrandSection';
import WorkProcessSection from "~/components/Section/Common/WorkProcess/WorkProcessSection";
import AccordionSection from "~/components/Section/Common/AccordionSection";
import HeroSection from "~/components/Section/Common/HeroSection";
import RecentProjectsSection from "~/components/Section/Common/RecentProjectsSection";
import ServiceSlideSection from "~/components/Section/Common/ServiceSlideSection";
import TeamSection from "~/components/Section/Common/TeamSection";
import TestimonialSection from "~/components/Section/Common/TestimonialSection";
import ChooseSection from '~/components/Section/Common/ChooseUs/ChooseSection';
import FactSection from '~/components/Section/Common/Fact/FactSection';
import LetsBuildSection from "~/components/Section/Common/LetsBuildSection";
import PricingSection from "~/components/Section/Common/PricingSection";
import ElearningSection from "~/components/Section/Common/Elearning/ElearningSection";
import QuestionAccordionSection from '~/components/Section/Common/QuestionAccordionSection';
import RecentBlogSection from '~/components/Section/Common/RecentBlogSection';
import ItSolutionSection from "~/components/Section/Common/ItSolutionSection";



const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BrandSection />
      <ServiceSlideSection />
      <WorkProcessSection />
      <FactSection />
      <ChooseSection />
      <PricingSection />
      <ItSolutionSection />
      <RecentProjectsSection />
      <LetsBuildSection />
      <TestimonialSection />
      <TeamSection />
      <AccordionSection />
      <ElearningSection/>
      <QuestionAccordionSection />
      <RecentBlogSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;



// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>src/app/page.js</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
