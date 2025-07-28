import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  const [iconOpacity, setIconOpacity] = useState(1); // Estado para controlar la opacidad del icono
  const totalDisplayTime = 2000; // Duración total de la pantalla de carga (2 segundos)
  const iconFadeOutDuration = 500; // Duración del desvanecimiento del icono (0.5 segundos)

  useEffect(() => {
    // Temporizador para iniciar el desvanecimiento del icono
    const startIconFadeOutTimer = setTimeout(() => {
      setIconOpacity(0); // Inicia el desvanecimiento del icono
    }, totalDisplayTime - iconFadeOutDuration); // Empieza a desvanecerse 0.5s antes de los 2 segundos totales

    // Temporizador para desmontar el componente después de la duración total
    const unmountTimer = setTimeout(() => {
      onAnimationEnd();
    }, totalDisplayTime);

    return () => {
      clearTimeout(startIconFadeOutTimer);
      clearTimeout(unmountTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{ backgroundColor: 'hsl(var(--security-blue))' }} // Fondo azul oscuro de seguridad
    >
      <div
        className="flex flex-col items-center space-y-6 transition-opacity duration-500 ease-out"
        style={{ opacity: iconOpacity }} // Aplica la opacidad al contenedor del icono
      >
        <Shield className="w-24 h-24 text-white" /> {/* Icono de escudo blanco */}
      </div>
    </div>
  );
};

export default SplashScreen;