import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import KeyNumbers from "@/components/sections/KeyNumbers";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhyAswin from "@/components/sections/WhyAswin";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import HowWeWork from "@/components/sections/HowWeWork";
import PartnersCertifications from "@/components/sections/PartnersCertifications";
import Testimonials from "@/components/sections/Testimonials";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata = {
  title: { absolute: "Fire Protection Company in Chennai | Aswin Fire System" },
  description:
    "Design, installation and AMC of fire hydrant, sprinkler, fire alarm, MVWS and gas suppression systems for hospitals, industry and commercial buildings across South India.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <KeyNumbers />
      <WhatWeDo />
      <WhyAswin />
      <IndustriesGrid />
      <FeaturedProjects />
      <HowWeWork />
      <PartnersCertifications />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
