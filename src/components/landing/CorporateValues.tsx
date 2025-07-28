import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, Heart, MessageCircle, Shield } from "lucide-react";

const values = [
  {
    icon: <HandHeart className="h-10 w-10 text-primary" />,
    title: "HONESTIDAD",
    description: "Transparencia y coherencia en acciones. Sólida reputación y confianza a largo plazo.",
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "RESPETO Y EMPATÍA",
    description: "Respeto por personas y necesidades. Promoción de igualdad e integridad.",
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-primary" />,
    title: "COMUNICACIÓN",
    description: "Trabajo en equipo y colaboración. Minimización de riesgos para clientes.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "SEGURIDAD",
    description: "Protección prioritaria de clientes. Anticipación a futuros riesgos.",
  },
];

const CorporateValues = () => {
  return (
    <section id="values" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            NUESTRO SELLO DISTINTIVO
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="flex flex-col items-center text-center p-6">
              <CardHeader className="p-0 pb-4 flex flex-col items-center"> {/* Added flex classes here */}
                {value.icon}
                <CardTitle className="mt-4 text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateValues;