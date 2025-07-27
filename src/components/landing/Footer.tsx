const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Total Security. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">
          Av. Manquehue Norte #151, Las Condes, Santiago, Chile
        </p>
      </div>
    </footer>
  );
};

export default Footer;