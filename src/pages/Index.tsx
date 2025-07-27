import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Footer from "@/components/landing/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        {/* Aquí se agregarán las otras secciones */}
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;