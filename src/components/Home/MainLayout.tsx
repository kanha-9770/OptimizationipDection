// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import dynamic from "next/dynamic";
// import Hero from "@/components/Home/Home";
// import { HomeData } from "./types/constant";
// const IOT =dynamic(()=>import("./Iot"))
// const AboutUs = dynamic(() => import("./AboutSection"), { ssr: false });
// const NavLinksDemo = dynamic(() => import("@/components/Home/NavLinks"), {
//   ssr: true,
// });
// const FeatureNews = dynamic(() => import("@/components/Home/FeatureNews"), {
//   ssr: true,
// });
// const AnnouncementSection = dynamic(
//   () => import("@/components/Home/AnnouncementSection")
// );
// const ContactIcons = dynamic(() => import("@/components/Contact/ContactIcon"));
// const MarqueeSection = dynamic(
//   () => import("@/components/Home/MarqueeSection"),
//   { ssr: true }
// );
// const KnowMore = dynamic(() => import("@/components/Home/KnowMore"), {
//   ssr: true,
// });
// const HomeMachine = dynamic(() => import("@/components/Home/HomeMachine"), {
//   ssr: true,
// });
// const HomeTestimonial = dynamic(
//   () => import("@/components/Home/TestimonialsSection"),
//   { ssr: true }
// );
// interface MainLayoutProps {
//   homeData: HomeData; // Define the expected type for homeData
// }
// export default function MainLayout({ homeData }: MainLayoutProps) {
//   const sectionRefs = {
//     aboutUsRef: useRef<HTMLDivElement>(null),
//     infiniteCardsRef: useRef<HTMLDivElement>(null),
//     knowMoreRef: useRef<HTMLDivElement>(null),
//     homeMachineRef: useRef<HTMLDivElement>(null),
//     newsFeatureRef: useRef<HTMLDivElement>(null),
//     homeTestimonialRef: useRef<HTMLDivElement>(null),
//   };

//   const navItems = [
//     { text: "Machines", ref: sectionRefs.homeMachineRef },
//     { text: "About Us", ref: sectionRefs.aboutUsRef },
//     { text: "Clientele", ref: sectionRefs.infiniteCardsRef },
//     { text: "KnowMore", ref: sectionRefs.knowMoreRef },
//     { text: "News", ref: sectionRefs.newsFeatureRef },
//     { text: "Testimonials", ref: sectionRefs.homeTestimonialRef },
//   ];

//   const [loadedSections, setLoadedSections] = useState([0]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(
//               (entry.target as HTMLDivElement).dataset.index!
//             );
//             if (!loadedSections.includes(index)) {
//               setLoadedSections((prev) => [...prev, index, index + 1]);
//             }
//           }
//         });
//       },
//       { rootMargin: "0px 0px 200px 0px", threshold: 0.1 }
//     );

//     Object.values(sectionRefs).forEach((ref, index) => {
//       if (ref.current) {
//         (ref.current as HTMLDivElement).dataset.index = index.toString();
//         observer.observe(ref.current);
//       }
//     });

//     return () => {
//       Object.values(sectionRefs).forEach((ref) => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, [loadedSections]);

//   return (
//     <main className="relative bg-[#f2f2f2] top-14 gap-2 h-full overflow-hidden">
//       <div className="top-2 relative">
//         <Hero heroData={homeData} />
//       </div>
//       <ContactIcons />
//       <NavLinksDemo navItems={navItems} />
//       <div className="h-full font-poppins">
//         {loadedSections.includes(1) && (
//           <div className="h-auto max-w-screen-2xl pl-14 mx-auto">
//             <AnnouncementSection />
//           </div>
//         )}

//         {loadedSections.includes(0) && (
//           <div
//             id="machines"
//             className="flex space-y-6 flex-col mt-20"
//             ref={sectionRefs.homeMachineRef}
//           >
//             <div className="flex justify-center text-3xl items-center space-x-2">
//               <h2 className="text-[#483d73] font-semibold">
//                 {homeData.home[0].homeMachineSection?.title
//                   .trim()
//                   .replace(/\s+\S+$/, "")}
//                 <span className="font-semibold ml-1">
//                   {homeData.home[0].homeMachineSection?.title
//                     .trim()
//                     .match(/\S+$/)}
//                 </span>
//               </h2>
//             </div>
//             <div className="text-sm w-full lg:w-full flex items-center justify-center">
//               <p className="lg:w-[50%] text-sm lg:px-0 px-2 lg:text-base font-regular text-center">
//                 {homeData.home[0].homeMachineSection?.subheading}
//               </p>
//             </div>
//             <HomeMachine heroData={homeData} />
//           </div>
//         )}

//         <div className="h-auto max-w-screen-2xl mx-auto">
//           <AboutUs heroData={homeData} />
//         </div>

//         {loadedSections.includes(2) && (
//           <div
//             id="clientele"
//             className="max-w-screen-2xl mx-auto"
//             ref={sectionRefs.infiniteCardsRef}
//           >
//             <MarqueeSection heroData={homeData} />
//           </div>
//         )}

//         <div>
//           <IOT />
//         </div>

//         {loadedSections.includes(3) && (
//           <div id="knowMore" className="h-auto" ref={sectionRefs.knowMoreRef}>
//             <KnowMore heroData={homeData} />
//           </div>
//         )}

//         {loadedSections.includes(4) && (
//           <div id="news" ref={sectionRefs.newsFeatureRef}>
//             <FeatureNews heroData={homeData} />
//           </div>
//         )}

//         <div
//           id="testimonials"
//           className="relative bg-gradient-to-l via-purple-200 to-transparent h-screen overflow-hidden"
//           ref={sectionRefs.homeTestimonialRef}
//         >
//           <HomeTestimonial heroData={homeData} />
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import Hero from "@/components/Home/Home";
import { HomeData } from "./types/constant";
const AboutUs = dynamic(() => import("./AboutSection"), { ssr: false });
const NavLinksDemo = dynamic(() => import("@/components/Home/NavLinks"), {
  ssr: true,
});
const FeatureNews = dynamic(() => import("@/components/Home/FeatureNews"), {
  ssr: true,
});
const AnnouncementSection = dynamic(
  () => import("@/components/Home/AnnouncementSection")
);
const ContactIcons = dynamic(() => import("@/components/Contact/ContactIcon"));
const MarqueeSection = dynamic(
  () => import("@/components/Home/MarqueeSection"),
  { ssr: true }
);
const KnowMore = dynamic(() => import("@/components/Home/KnowMore"), {
  ssr: true,
});
const HomeMachine = dynamic(() => import("@/components/Home/HomeMachine"), {
  ssr: true,
});
const HomeTestimonial = dynamic(
  () => import("@/components/Home/TestimonialsSection"),
  { ssr: true }
);

interface MainLayoutProps {
  homeData: HomeData;
}

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AnimateOnScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariant}
    >
      {children}
    </motion.div>
  );
};

export default function MainLayout({ homeData }: MainLayoutProps) {
  const sectionRefs = {
    aboutUsRef: useRef<HTMLDivElement>(null),
    infiniteCardsRef: useRef<HTMLDivElement>(null),
    knowMoreRef: useRef<HTMLDivElement>(null),
    homeMachineRef: useRef<HTMLDivElement>(null),
    newsFeatureRef: useRef<HTMLDivElement>(null),
    homeTestimonialRef: useRef<HTMLDivElement>(null),
  };

  const navItems = [
    { text: "Machines", ref: sectionRefs.homeMachineRef },
    { text: "About Us", ref: sectionRefs.aboutUsRef },
    { text: "Clientele", ref: sectionRefs.infiniteCardsRef },
    { text: "KnowMore", ref: sectionRefs.knowMoreRef },
    { text: "News", ref: sectionRefs.newsFeatureRef },
    { text: "Testimonials", ref: sectionRefs.homeTestimonialRef },
  ];

  return (
    <main className="relative bg-[#f2f2f2] top-14 gap-2 h-full overflow-hidden">
      <div className="top-2 relative">
        <Hero heroData={homeData} />
      </div>
      <ContactIcons />
      <NavLinksDemo navItems={navItems} />

      <div className="h-full font-poppins">
        <div className="h-auto max-w-screen-2xl pl-14 mx-auto">
          <AnnouncementSection />
        </div>

        <AnimateOnScroll>
          <div
            id="machines"
            className="flex space-y-6 flex-col mt-20"
            ref={sectionRefs.homeMachineRef}
          >
            <div className="flex justify-center text-3xl items-center space-x-2">
              <h2 className="text-[#483d73] font-semibold">
                {homeData.home[0].homeMachineSection?.title
                  .trim()
                  .replace(/\s+\S+$/, "")}
                <span className="font-semibold ml-1">
                  {homeData.home[0].homeMachineSection?.title
                    .trim()
                    .match(/\S+$/)}
                </span>
              </h2>
            </div>
            <div className="text-sm w-full lg:w-full flex items-center justify-center">
              <p className="lg:w-[50%] text-sm lg:px-0 px-2 lg:text-base font-regular text-center">
                {homeData.home[0].homeMachineSection?.subheading}
              </p>
            </div>
            <HomeMachine heroData={homeData} />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="h-auto max-w-screen-2xl mx-auto">
            <AboutUs heroData={homeData} />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div id="clientele" className="max-w-screen-2xl mx-auto">
            <MarqueeSection heroData={homeData} />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div id="knowMore" className="h-auto">
            <KnowMore heroData={homeData} />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div id="news">
            <FeatureNews heroData={homeData} />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div
            id="testimonials"
            className="relative bg-gradient-to-l via-purple-200 to-transparent h-screen overflow-hidden"
          >
            <HomeTestimonial heroData={homeData} />
          </div>
        </AnimateOnScroll>
      </div>
    </main>
  );
}
