import { Card, CardContent } from "@/components/ui/card";

const clientLogos = [
  { name: "H&M", src: "/placeholder-logo-hm.png" }, // Placeholder, replace with actual paths
  { name: "Cencosud", src: "/placeholder-logo-cencosud.png" },
  { name: "Acciona", src: "/placeholder-logo-acciona.png" },
  { name: "Total Cleaning", src: "/placeholder-logo-total-cleaning.png" },
  { name: "Total Back Office & Logistics", src: "/placeholder-logo-total-backoffice.png" },
  { name: "DT&A", src: "/placeholder-logo-dta.png" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-16 sm:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
          CLIENTES QUE CONFÍAN EN NOSOTROS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {clientLogos.map((client) => (
            <div key={client.name} className="p-4 flex justify-center items-center">
              {/* Replace with actual img tags when logos are available */}
              <span className="text-xl font-semibold text-gray-700">{client.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Card className="p-4 text-center">
            <CardContent className="p-0 text-lg font-medium text-primary">
              Clientes satisfechos desde 2000
            </CardContent>
          </Card>
          <Card className="p-4 text-center">
            <CardContent className="p-0 text-lg font-medium text-primary">
              Renovación de contratos 95%
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;