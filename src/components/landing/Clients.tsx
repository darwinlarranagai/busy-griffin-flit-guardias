import { Card, CardContent } from "@/components/ui/card";

const clientLogos = [
  { name: "H&M", src: "/images/clients/logo-hm.png" },
  { name: "Cencosud", src: "/images/clients/logo-cencosud.png" },
  { name: "Acciona", src: "/images/clients/logo-acciona.png" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
          CLIENTES QUE CONFÍAN EN NOSOTROS
        </h2>
        {/* Usando márgenes negativos y padding para un espaciado adaptable */}
        <div className="flex flex-wrap justify-center -m-4">
          {clientLogos.map((client) => (
            <div 
              key={client.name} 
              className="w-1/2 md:w-1/3 p-4 flex justify-center items-center"
            >
              <img 
                src={client.src} 
                alt={client.name} 
                className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
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