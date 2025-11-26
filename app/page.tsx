import AboutSection from "./components/AboutSection";
import CategoryGrid from "./components/CategoryGrid";
import ClientLogos from "./components/ClientLogos";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import SearchJobs from "./components/SearchJobs";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <CategoryGrid />
      <SearchJobs />
      <Testimonials />
      <AboutSection />
      <ContactSection />
    </>
  );
}

