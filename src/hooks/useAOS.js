import { useEffect } from 'react';
import AOS from 'aos';

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
}
