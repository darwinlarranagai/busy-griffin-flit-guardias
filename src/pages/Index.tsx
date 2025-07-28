import Clients from "@/components/landing/Clients";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/Faq";
import Features from "@/components/landing/Feature";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HiringProcess from "@/components/landing/HiringProcess";
import Services from "@/components/landing/Services";
import Team from "@/components/landing/team";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Features />
      <HiringProcess />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;