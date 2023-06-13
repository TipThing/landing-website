import { useEffect, useState } from 'react';

const useScreenSize = (): boolean => {
  const [isScreenSmall, setIsScreenSmall] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      const isSmall: boolean = window.matchMedia('(max-width: 1165px)').matches;
      setIsScreenSmall(isSmall);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isScreenSmall;
};

export default useScreenSize;
