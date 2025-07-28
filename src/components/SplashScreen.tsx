import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 1500); // Display for 1.5 seconds

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-6">
        <Shield className="w-24 h-24 text-white" /> {/* White shield icon */}
        <Button className="animate-blink-once bg-primary text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg">
          Cargando...
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;