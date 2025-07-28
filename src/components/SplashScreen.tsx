import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  const [opacity, setOpacity] = useState(1);
  // Initial background color: a shade of blue (Tailwind's blue-600)
  const [bgColor, setBgColor] = useState('rgb(37, 99, 235)'); 

  const totalDisplayTime = 2000; // Total time splash screen is visible (2 seconds)
  const transitionDuration = 500; // Duration for both opacity and color transition (0.5 seconds)

  useEffect(() => {
    // Timer to start the fade-out and color transition
    const startTransitionTimer = setTimeout(() => {
      setOpacity(0); // Start fading out
      
      // Dynamically get the --primary color from CSS variables
      const rootStyles = getComputedStyle(document.documentElement);
      const primaryColorHsl = rootStyles.getPropertyValue('--primary').trim();
      setBgColor(`hsl(${primaryColorHsl})`); // Transition to corporate red
    }, totalDisplayTime - transitionDuration); // Start transition 0.5s before total time

    // Timer to unmount the component after the total display time
    const unmountTimer = setTimeout(() => {
      onAnimationEnd();
    }, totalDisplayTime);

    return () => {
      clearTimeout(startTransitionTimer);
      clearTimeout(unmountTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 transition-all duration-500 ease-out"
      style={{ opacity: opacity, backgroundColor: bgColor }}
    >
      <div className="flex flex-col items-center space-y-6">
        <Shield className="w-24 h-24 text-white" />
      </div>
    </div>
  );
};

export default SplashScreen;