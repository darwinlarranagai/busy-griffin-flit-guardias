const InternationalPresence = () => {
  return (
    <section id="international" className="py-16 sm:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          PRESENCIA INTERNACIONAL
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Total Security tiene una sólida presencia en Latinoamérica, ofreciendo servicios de seguridad de primer nivel.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">Chile</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Casa matriz</li>
              <li>Sucursales en Santiago, Concepción, Osorno, Viña del Mar</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">Colombia</h3>
            <p className="text-muted-foreground">Servicios especializados</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">Ecuador</h3>
            <p className="text-muted-foreground">Cobertura tecnológica</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">Perú</h3>
            <p className="text-muted-foreground">Operaciones regionales</p>
          </div>
        </div>
        {/* Placeholder for a more complex interactive map if needed later */}
        <div className="mt-12 p-8 bg-gray-100 rounded-lg text-gray-600">
          <p className="text-lg font-medium">
            (Aquí se podría integrar un mapa interactivo de Latinoamérica mostrando la presencia de Total Security)
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternationalPresence;