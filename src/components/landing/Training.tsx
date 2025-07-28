import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const trainings = [
  {
    imageUrl: "/images/training/os-10.jpg",
    title: "CURSOS OS-10",
    description: "Certificación oficial de Carabineros de Chile según Decreto 93, verificando cumplimiento de requerimientos prácticos y teóricos para guardias de seguridad.",
  },
  {
    imageUrl: "/images/training/tactico.jpg",
    title: "USO DE ELEMENTOS TÁCTICOS",
    description: "Certificación especializada en uso de bastón retráctil y esposas para personal táctico, mejorando respuestas ante situaciones de peligro.",
  },
  {
    imageUrl: "/images/training/retail-procedimientos.jpg",
    title: "PROCEDIMIENTOS EN RETAIL",
    description: "Capacitación específica en normativas, procedimientos y protocolos de operación para desenvolverse correctamente en el sector retail.",
  },
  {
    imageUrl: "/images/training/delitos.jpg",
    title: "DELITOS Y HURTOS",
    description: "Formación legal sobre diferentes tipos de delitos, técnicas de detección y frustración, discriminando diferencias y agravantes de cada caso.",
  },
];

const Training = () => {
  return (
    <section id="training" className="py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Card key={training.title} className="flex flex-col text-center">
              <img src={training.imageUrl} alt={training.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-6 flex flex-col flex-grow">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl">{training.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4 flex-grow">
                  <p className="text-muted-foreground">{training.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;