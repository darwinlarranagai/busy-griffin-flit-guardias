import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  const [opacity, setOpacity] = useState(1); // Estado para controlar la opacidad
  const transitionDuration = 500; // Duración de la transición de desvanecimiento en ms (0.5 segundos)

  useEffect(() => {
    // Temporizador para iniciar el desvanecimiento
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0); // Inicia el desvanecimiento
    }, 2000 - transitionDuration); // Empieza a desvanecerse 0.5s antes de los 2 segundos totales

    // Temporizador para desmontar el componente después de que el desvanecimiento haya terminado
    const unmountTimer = setTimeout(() => {
      onAnimationEnd();
    }, 2000); // Duración total de la pantalla de carga (2 segundos)

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(unmountTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 transition-opacity duration-500 ease-out"
      style={{ opacity: opacity }}
    >
      <div className="flex flex-col items-center space-y-6">
        <Shield className="w-24 h-24 text-white" /> {/* White shield icon */}
      </div>
    </div>
  );
};

export default SplashScreen;