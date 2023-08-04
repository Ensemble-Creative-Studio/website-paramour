import logo from "../public/Logo.svg";
import { urlForImage } from "@/sanity/lib/image";

import Image from "next/image";
export default function Hero({ heroData }) {

  return (
    <div className="fixed top-0 w-full -z-10" id="hero">
        <div className="flex justify-center items-center absolute left-0 top-0 h-screen w-screen">
        <Image
        className=" object-contain  mix-blend-difference  "
        priority
        src={logo}
        width={210}
        height={180}
        alt="Logo param"
      />
        </div>
 
      {heroData[0].imageOrUrl && heroData[0].imageOrUrl.url ? (
        // If there is a URL, render the video tag
        <video controls>
          <source src={heroData[0].imageOrUrl.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // If there is no URL, render the image tag
        <div className="w-screen h-screen">
          <Image
            src={urlForImage(heroData[0].imageOrUrl.image.asset._ref)}
            alt="Image"
            className="w-full object-cover h-full"
            width={2000}
            height={1500}
            priority
          />
        </div>
      )}
      {/* Additional content can be added here */}
    </div>
  );
}
