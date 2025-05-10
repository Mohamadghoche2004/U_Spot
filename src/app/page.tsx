
import HeroSection from "@/components/Sections/HeroSection";
import WorkSection from "@/components/Sections/WorkSection/WorkSection";
import SmoothScroll from "../components/smoothScroll/smoothScroll";
import ServicesSection from "@/components/Sections/ServicesSection/servicesSection";
import Footer from "@/components/Footer/Footer";
// import { TheBestSection } from "@/components/Sections/TheBestSection";


export default function Home() {
  return (
    <div>
      <SmoothScroll />
      <HeroSection />
      {/* <TheBestSection /> */}
      <WorkSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
