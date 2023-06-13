"use client";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.2;

      setShowButton(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    
	return (
        
		<Button 
            as={motion.button} 
            isIconOnly
            aria-label="Scroll to Top"
            className="fixed bottom-5 right-10 z-50 bg-default-100 ring-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: showButton ? 1 : 0 }}
            onPress={handleScrollToTop}
            radius="full"
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </Button>
	);
};
