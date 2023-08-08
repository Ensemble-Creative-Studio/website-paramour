'use client'
// useKeenSliderInit.js
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useLenis } from "@studio-freight/react-lenis";

export function useKeenSliderInit(setCurrentSlide) { // Accept setCurrentSlide as a parameter
  const [loaded, setLoaded] = useState(false);
  const lenis = useLenis(({ scroll }) => {});

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    defaultAnimation: {
      duration: 1000,
      easing: cubicEaseInOut,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel); // Update the current slide using setCurrentSlide
      // Your existing slideChanged logic here...
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    vertical: true,
    created() {
      document.body.style.overflow = "hidden";
      setLoaded(true);
    },
    destroyed() {
      document.body.style.overflow = ""; // Revert the overflow property when the component unmounts
    },
  });

  // Clean up when the component unmounts
  useEffect(() => {
    return () => {
      lenis.destroy();
    };
  }, [lenis]);

  function cubicEaseInOut(time) {
    return 1 - Math.pow(1 - time, 5);
  }

  return { loaded, sliderRef, instanceRef };
}
