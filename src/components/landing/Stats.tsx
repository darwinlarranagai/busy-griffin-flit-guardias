import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { value: "22+", label: "Años de experiencia nacional" },
  { value: "30+", label: "Años experiencia en Retail" },
  { value: "1500+", label: "Agentes desplegados en Chile" },
  { value: "11+", label: "Servicios especializados" },
  { value: "4+", label: "Países de presencia internacional" },
];

const Stats = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            TOTAL SECURITY EN CIFRAS
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow p-4">
              <CardHeader className="p-0">
                <CardTitle className="text-4xl sm:text-5xl font-bold text-primary">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;