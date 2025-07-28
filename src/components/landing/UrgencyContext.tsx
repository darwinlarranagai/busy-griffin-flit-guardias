import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const stats = [
  { value: "2.8%", label: "Aumento de robos con violencia en Chile (primer semestre 2024)" },
  { value: "90.8%", label: "Tasa de delitos en retail (tiendas, supermercados, farmacias)" },
  { value: "63.1%", label: "Tasa de robos con 43.1% de hurtos afectando retail" },
  { value: "59.6%", label: "Aumento en victimización del comercio (6 de cada 10 locales)" },
  { value: "60.1%", label: "Locales afectados por delincuencia en Gran Santiago" },
  { value: "39.2%", label: "Locatarios que reportan comercio ilegal cercano" },
];

const UrgencyContext = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate('/contact'); // Navigate to the contact form route
  };

  return (
    <section id="urgency" className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          LA REALIDAD QUE NO PODEMOS IGNORAR
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300 mb-12">
          Cifras oficiales del primer semestre 2024 que demuestran la urgente necesidad de seguridad profesional.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-primary text-white border-primary">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-gray-400 mb-8">
          Fuente: Observatorio del Comercio Ilícito y Seguridad 2024
        </p>
        {/* Removed the button and text 'No seas parte de estas estadísticas. Protege tu negocio HOY' */}
      </div>
    </section>
  );
};

export default UrgencyContext;