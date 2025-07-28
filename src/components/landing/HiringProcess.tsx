import { CheckCircle } from "lucide-react";
import React from "react"; // Import React for React.Fragment

const steps = [
  {
    step: 1,
    title: "CONTACTO",
    description: "Comunicación vía email o teléfono.",
  },
  {
    step: 2,
    title: "REUNIÓN",
    description: "Evaluación de necesidades con ejecutivo especialista.",
  },
  {
    step: 3,
    title: "COTIZACIÓN",
    description: "Documento detallado para revisión.",
  },
  {
    step: 4,
    title: "APROBACIÓN",
    description: "Confirmación e inicio de preparativos.",
  },
  {
    step: 5,
    title: "IMPLEMENTACIÓN",
    description: "Selección de personal y inicio del servicio.",
  },
];

const HiringProcess = () => {
  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          ¿CÓMO CONTRATAR SERVICIOS TOTAL SECURITY?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
          Proceso simple en 5 pasos.
        </p>
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
          {/* Line for desktop */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-primary/20 mx-12"></div>
          
          {steps.map((s, index) => (
            <div key={s.step} className="relative flex flex-col items-center text-center md:w-1/5">
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl mb-4">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.description}</p>
              {/* Vertical line for mobile/tablet, adjusted to avoid text overlap and be centered */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute top-[calc(100%+0rem)] left-[calc(50%-1px)] w-0.5 h-8 bg-primary/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;