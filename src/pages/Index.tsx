import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import SectorSpecialization from "@/components/landing/SectorSpecialization";
import Training from "@/components/landing/Training";
import SurveillanceZones from "@/components/landing/SurveillanceZones";
import InternationalPresence from "@/components/landing/InternationalPresence";
import CorporateValues from "@/components/landing/CorporateValues";
import Clients from "@/components/landing/Clients";
import UrgencyContext from "@/components/landing/UrgencyContext";
import HiringProcess from "@/components/landing/HiringProcess";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <SectorSpecialization />
        <Training />
        <SurveillanceZones />
        <InternationalPresence />
        <CorporateValues />
        <Clients />
        <UrgencyContext />
        <HiringProcess />
        <Contact />
      </main>
      <Footer />
      <Toaster />
      <MadeWithDyad />
    </div>
  );
};

export default Index;