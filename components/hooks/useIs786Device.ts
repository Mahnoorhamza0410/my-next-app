// hooks/useIs786Device.js
import { useState, useEffect } from 'react';

const useIs786Device = () => {
  const [isInRange, setIsInRange] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsInRange(width >= 600 && width < 787);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isInRange;
};

export default useIs786Device;