"use client";
import "keen-slider/keen-slider.min.css";
import React from "react";
import { useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { useKeenSlider } from "keen-slider/react";
import { useSlider } from "./context/SliderContext";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import CustomVideoPlayer from "../utils/CustomVideoPlayer";
export default function KeenSlider({ projectData }) {
  function WheelControls(slider) {
    let touchTimeout;
    let startPosition;
    let wheelActive = false;
  
    function dispatch(e, name) {
      startPosition = {
        x: e.pageX,
        y: e.pageY,
      };
      slider.container.dispatchEvent(
        new CustomEvent(name, {
          detail: {
            x: startPosition.x,
            y: startPosition.y,
          },
        })
      );
    }
  
    function wheelStart(e) {
      startPosition = {
        x: e.pageX,
        y: e.pageY,
      };
      dispatch(e, "ksDragStart");
    }
  
    function wheel(e) {
      dispatch(e, "ksDrag");
    }
  
    function wheelEnd(e) {
      dispatch(e, "ksDragEnd");
    }
    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
    
    let debouncedScroll = debounce((e) => {
      const deltaY = e.deltaY;
    
      if (deltaY > 0) {
        instanceRef.current?.next();
      } else if (deltaY < 0) {
        instanceRef.current?.prev();
      }
    }, 200);  // Adjust the time here. Start with 200ms, and increase if needed.
    
    function eventWheel(e) {
      e.preventDefault();
    
      if (!wheelActive) {
        wheelActive = true; // Set wheelActive to true immediately to prevent further scroll actions
    
        wheelStart(e);
    
        debouncedScroll(e);  // Call the debounced function instead of direct scrolling.
    
        wheelEnd(e);
    
        setTimeout(() => {
          wheelActive = false; // Allow next scroll action after the delay
        }, 5000); // Wait 500ms before allowing another scroll
      }
    }
    

  
    slider.on("created", () => {
      slider.container.addEventListener("wheel", eventWheel, {
        passive: false,
      });
    });
  }
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        instanceRef.current?.next();
      } else if (event.key === "ArrowLeft") {
        instanceRef.current?.prev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function cubicEaseInOut(time) {
    return 1 - Math.pow(1 - time, 5);
  }
  
  // const [currentSlide, setCurrentSlide] = useState(0)
  const { currentSlide, setCurrentSlide } = useSlider();

  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: false,
    defaultAnimation: {
      duration: 1000,
      easing: cubicEaseInOut,
    },
    slideChanged(slider) {
      // setCurrentSlide(slider.track.details.rel);
      slider.slides.forEach((slide) => {
        slide.classList.remove("leaving-slide");
      });

      // Then, determine the index of the slide that's leaving.
      let previousSlideIndex;
      if (slider.track.details.rel === 0) {
        previousSlideIndex = slider.slides.length - 1;
      } else {
        previousSlideIndex = slider.track.details.rel - 1;
      }

      // Add 'leaving-slide' class to the slide that's leaving
      slider.slides[previousSlideIndex].classList.add("leaving-slide");

      const slideCountDiv = document.getElementById("slideCountDiv");
      if (slideCountDiv) {
        slideCountDiv.innerHTML = `${slider.track.details.rel + 1} / ${
          slider.slides.length
        }`;
      }
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    vertical: true,
    created() {
      setLoaded(true);
    },
  },
  [WheelControls] // <-- Integrate the WheelControls here
);
  useEffect(() => {
    if (loaded && instanceRef.current) {
      const slideCountDiv = document.getElementById("slideCountDiv");
      if (slideCountDiv) {
        slideCountDiv.innerHTML = `1 - ${instanceRef.current.slides.length}`;
      }
    }
  }, [loaded, instanceRef]);
  useEffect(() => {
    if (instanceRef.current) {
      console.log;
      instanceRef.current.moveToIdx(currentSlide, false, { duration: 0 });
    }
  }, [currentSlide, instanceRef]);
  // Assuming the provided asset reference can be transformed into a URL like this

  return (
    <div ref={sliderRef} className="keen-slider overflow-hidden h-screen">
      {projectData[0].videosGallery?.map((video, index) => (
        <div
          key={video._key}
          className={`relative keen-slider__slide number-slide${index}`}
        >
          <div className="flex relative items-end h-screen w-full justify-center">
            <div
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              className=" absolute cursor-pointer w-full h-full"
            ></div>
                <CustomVideoPlayer src={video.urlVideo} />

          </div>
        </div>
      ))}
      {projectData[0].imagesGallery.map((image, index) => (
        <div
          key={image._key}
          className={` flex items-end justify-center relative keen-slider__slide number-slide${
            projectData[0].videosGallery?.length + index
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            className=" -z-10  absolute cursor-pointer w-full h-full"
          ></div>
          <div className="heightSlider  flex ">
            <Image
              src={urlForImage(image.asset._ref)}
              alt={`Slide ${index}`}
              className="w-auto object-cover h-full "
              width={1200}
              height={1000}
              priority
            />{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
