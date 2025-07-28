import { Card, CardContent } from "@/components/ui/card";

const clientLogos = [
  { name: "H&M", src: "/images/clients/logo-hm.png" },
  { name: "Cencosud", src: "/images/clients/logo-cencosud.png" },
  { name: "Acciona", src: "/images/clients/logo-acciona.png" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-16 sm:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
          CLIENTES QUE CONFÍAN EN NOSOTROS
        </h2>
        {/* Updated layout for client logos */}
        <div className="flex flex-wrap justify-center gap-8"> {/* Changed from grid to flex for responsive centering */}
          {clientLogos.map((client) => (
            <div 
              key={client.name} 
              className="p-4 flex justify-center items-center 
                         w-1/2 md:w-1/3 max-w-[180px]" // Responsive width for 2 per row on mobile, 3 on desktop
            >
              <img 
                src={client.src} 
                alt={client.name} 
                className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Card className="p-4 text-center">
            <CardContent className="p-0 text-lg font-medium text-primary">
              Clientes satisfechos desde 2000
            </CardContent>
          </Card>
          <Card className="p-4 text-center">
            <CardContent className="p-0 text-lg font-medium text-primary">
              Renovación de contratos 95%
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;