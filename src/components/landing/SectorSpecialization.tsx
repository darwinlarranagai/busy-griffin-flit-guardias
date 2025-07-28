import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sectors = [
  {
    imageUrl: "/images/sectors/retail.jpg",
    title: "Sector Retail",
    description: "Personal capacitado en detección y prevención de hurtos, bandas zonales, patrones de comportamiento sospechoso, situaciones de riesgo público y excelente atención al cliente.",
    benefits: ["Reducción de pérdidas", "Mejor experiencia del cliente", "Ambiente seguro de compras"],
  },
  {
    imageUrl: "/images/sectors/aeroportuario.jpg",
    title: "Sector Aeroportuario",
    description: "Capacitación en detección de documentación alterada, manejo de disturbios, situaciones de riesgo, operación de equipos de rayos X y protocolos aeroportuarios.",
    benefits: ["Seguridad en transporte aéreo", "Control de accesos críticos", "Protección de pasajeros"],
  },
  {
    imageUrl: "/images/sectors/industrial.jpg",
    title: "Sector Industrial",
    description: "Control de accesos para salvaguardar propiedades de grandes dimensiones, prevención de hurtos industriales y protección de información clasificada empresarial.",
    benefits: ["Protección de activos industriales", "Seguridad perimetral", "Confidencialidad empresarial"],
  },
];

const SectorSpecialization = () => {
  return (
    <section id="sectors" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <Card key={sector.title} className="flex flex-col">
              <img src={sector.imageUrl} alt={sector.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6 flex flex-col flex-grow">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 flex-grow">
                  <p className="text-muted-foreground mb-4">{sector.description}</p>
                  <h4 className="font-semibold mb-2">Beneficios:</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {sector.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorSpecialization;