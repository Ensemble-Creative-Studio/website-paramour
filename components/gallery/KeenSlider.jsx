"use client";
import "keen-slider/keen-slider.min.css";
import React from "react";
import { useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { useKeenSlider } from "keen-slider/react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
export default function KeenSlider({ projectData }) {
    useEffect(() => {
        // Add overflow hidden to the body when the component mounts
        document.body.style.overflow = "hidden";
    
        // Revert the overflow property when the component unmounts
        return () => {
          document.body.style.overflow = "";
        };
      }, []);
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
    const lenis = useLenis(({ scroll }) => {

    })
    function cubicEaseInOut(time) {
        return 1 - Math.pow(1 - time, 5);
      }
  lenis.destroy()
    const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    defaultAnimation: {
        duration: 1000,
        easing: cubicEaseInOut,

      },
    slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
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
      },
    slides: {
    
      perView: 1,
      spacing: 0,
      
    },
    vertical: true,
     created() {
      setLoaded(true)
    },
  });

  // Assuming the provided asset reference can be transformed into a URL like this

  return (
    <div ref={sliderRef} className="keen-slider overflow-hidden h-screen">
      {projectData[0].videosGallery?.map((video, index) => (
        <div
          key={video._key}
          className={`keen-slider__slide number-slide${index}`}
        >
          <video controls src={video.urlVideo} />
        </div>
      ))}
      {projectData[0].imagesGallery.map((image, index) => (
        <div
          key={image._key}
          className={` flex items-end justify-center  keen-slider__slide number-slide${
            projectData[0].videosGallery?.length + index
          }`}
        >
            <div   onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              } className="heightSlider flex">
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
         {/* {loaded && instanceRef.current && (
          <div className="fixed top-0 z-40 w-full">
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )} */}
    </div>
    
  );
}
function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }
  