import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Shield, Book, AlertTriangle } from "lucide-react";

const trainings = [
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "CURSOS OS-10",
    description: "Certificación oficial de Carabineros de Chile según Decreto 93, verificando cumplimiento de requerimientos prácticos y teóricos para guardias de seguridad.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "USO DE ELEMENTOS TÁCTICOS",
    description: "Certificación especializada en uso de bastón retráctil y esposas para personal táctico, mejorando respuestas ante situaciones de peligro.",
  },
  {
    icon: <Book className="h-10 w-10 text-primary" />,
    title: "PROCEDIMIENTOS EN RETAIL",
    description: "Capacitación específica en normativas, procedimientos y protocolos de operación para desenvolverse correctamente en el sector retail.",
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-primary" />,
    title: "DELITOS Y HURTOS",
    description: "Formación legal sobre diferentes tipos de delitos, técnicas de detección y frustración, discriminando diferencias y agravantes de cada caso.",
  },
];

const Training = () => {
  return (
    <section id="training" className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            CAPACITACIONES DE EXCELENCIA
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Formación continua que garantiza el más alto nivel de servicio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainings.map((training) => (
            <Card key={training.title} className="flex flex-col items-center text-center p-6">
              <CardHeader className="p-0 pb-4">
                {training.icon}
                <CardTitle className="mt-4 text-xl">{training.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{training.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;