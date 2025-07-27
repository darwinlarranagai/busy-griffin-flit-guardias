import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Plane, Factory } from "lucide-react";

const sectors = [
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "Sector Retail",
    description: "Personal capacitado en detección y prevención de hurtos, bandas zonales, patrones de comportamiento sospechoso, situaciones de riesgo público y excelente atención al cliente.",
    benefits: ["Reducción de pérdidas", "Mejor experiencia del cliente", "Ambiente seguro de compras"],
  },
  {
    icon: <Plane className="h-10 w-10 text-primary" />,
    title: "Sector Aeroportuario",
    description: "Capacitación en detección de documentación alterada, manejo de disturbios, situaciones de riesgo, operación de equipos de rayos X y protocolos aeroportuarios.",
    benefits: ["Seguridad en transporte aéreo", "Control de accesos críticos", "Protección de pasajeros"],
  },
  {
    icon: <Factory className="h-10 w-10 text-primary" />,
    title: "Sector Industrial",
    description: "Control de accesos para salvaguardar propiedades de grandes dimensiones, prevención de hurtos industriales y protección de información clasificada empresarial.",
    benefits: ["Protección de activos industriales", "Seguridad perimetral", "Confidencialidad empresarial"],
  },
];

const SectorSpecialization = () => {
  return (
    <section id="sectors" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            PERSONAL ESPECIALIZADO PARA CADA SECTOR
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Contamos con expertos entrenados específicamente para las necesidades de cada industria.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <Card key={sector.title} className="flex flex-col p-6">
              <CardHeader className="flex flex-row items-center space-x-4 p-0 pb-4">
                {sector.icon}
                <CardTitle className="text-2xl">{sector.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4">{sector.description}</p>
                <h4 className="font-semibold mb-2">Beneficios:</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  {sector.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorSpecialization;