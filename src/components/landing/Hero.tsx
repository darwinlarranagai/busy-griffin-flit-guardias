import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dark-security-background.jpg"
          alt="Guardias de seguridad o textura de seguridad"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          LA SEGURIDAD COMIENZA CON NUESTRA PROTECCIÓN
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300">
          Más de 22 años protegiendo empresas e instituciones con tecnología avanzada y personal altamente capacitado.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full text-base">
              Solicitar Cotización Gratuita
            </Button>
          </a>
          <a href="#services" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full border-white text-black hover:bg-white hover:text-gray-700 text-base">
              Conocer Servicios
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;