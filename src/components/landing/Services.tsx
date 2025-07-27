import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Camera, Car } from "lucide-react";

const services = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Agentes de Seguridad Especializados",
    description: "Personal altamente capacitado con diferentes niveles de especialización según normativa chilena. Desde guardias convencionales hasta agentes tácticos mejorados.",
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "Sistemas de Vigilancia Inteligente",
    description: "Tecnología de vanguardia con IA, monitoreo 24/7 y análisis predictivo. Desde CCTV tradicional hasta drones y software integral de gestión.",
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: "Flota de Seguridad Especializada",
    description: "Vehículos especialmente adaptados para vigilancia, patrullaje urbano y servicios de escolta, equipados con la última tecnología.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto">
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
            <Card key={service.title} className="flex flex-col items-center text-center p-6">
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;