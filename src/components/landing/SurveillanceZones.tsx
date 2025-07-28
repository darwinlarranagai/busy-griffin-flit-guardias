import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, ParkingMeter, TreePine, Building } from "lucide-react";

const zones = [
  {
    icon: <Store className="h-10 w-10 text-primary" />,
    title: "RETAIL Y CENTROS COMERCIALES",
    description: "Sistema de monitoreo especializado para tiendas, malls y supermercados. Permite supervisión en tiempo real, evidencia ante incidentes y control tanto de instalaciones internas como accesos de personas y vehículos.",
    benefits: ["Reducción de hurtos", "Mejor experiencia cliente", "Ambiente seguro"],
  },
  {
    icon: <ParkingMeter className="h-10 w-10 text-primary" />,
    title: "ESTACIONAMIENTOS",
    description: "Protección de vehículos de usuarios para tranquilidad durante compras o trabajo. Asegura experiencia positiva que fomenta el retorno de visitantes.",
    benefits: ["Vehículos seguros", "Clientes tranquilos", "Fidelización"],
  },
  {
    icon: <TreePine className="h-10 w-10 text-primary" />,
    title: "ZONAS RURALES",
    description: "Vigilancia tecnológica para áreas de difícil acceso y monitoreo físico. Especialmente importante para zonas cercanas a parcelas y áreas residenciales rurales.",
    benefits: ["Cobertura remota", "Protección perimetral", "Tranquilidad rural"],
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "SECTOR INDUSTRIAL",
    description: "Apoyo tecnológico con CCTV y drones para empresas con múltiples entradas y grandes dimensiones. Resguardo integral de instalaciones industriales.",
    benefits: ["Protección perimetral", "Control accesos", "Seguridad 24/7"],
  },
];

const SurveillanceZones = () => {
  return (
    <section id="zones" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            COBERTURA INTEGRAL EN TODAS LAS ÁREAS
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experiencia comprobada en los sectores más demandantes del país.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {zones.map((zone) => (
            <Card key={zone.title} className="flex flex-col p-6">
              <CardHeader className="flex flex-row items-center space-x-4 p-0 pb-4">
                {zone.icon}
                <CardTitle className="text-xl">{zone.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4">{zone.description}</p>
                <h4 className="font-semibold mb-2">Beneficios:</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  {zone.benefits.map((benefit, index) => (
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

export default SurveillanceZones;