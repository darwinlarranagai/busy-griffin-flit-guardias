import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 2000); // Display for 2 seconds

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-6">
        <Shield className="w-24 h-24 text-white" /> {/* White shield icon */}
      </div>
    </div>
  );
};

export default SplashScreen;