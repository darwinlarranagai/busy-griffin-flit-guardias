import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    imageUrl: "/images/services/agentes.jpg",
    title: "Agentes de Seguridad Especializados",
    description: "Personal altamente capacitado con diferentes niveles de especialización según normativa chilena. Desde guardias convencionales hasta agentes tácticos mejorados.",
  },
  {
    imageUrl: "/images/services/vigilancia.jpg",
    title: "Sistemas de Vigilancia Inteligente",
    description: "Tecnología de vanguardia con IA, monitoreo 24/7 y análisis predictivo. Desde CCTV tradicional hasta drones y software integral de gestión.",
  },
  {
    imageUrl: "/images/services/flota.jpg",
    title: "Flota de Seguridad Especializada",
    description: "Vehículos especialmente adaptados para vigilancia, patrullaje urbano y servicios de escolta, equipados con la última tecnología.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestros Servicios de Seguridad a la Medida
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Desarrollamos servicios estandarizados de seguridad que pueden ser personalizados a la medida de tu negocio.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6 flex flex-col flex-grow">
                <CardHeader className="p-0">
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;