import logo from "../public/Logo.svg";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

import Image from "next/image";
export default function MediumSentence({ heroData }) {
  return (
    <div className="flex items-center justify-center" >
      <div className="flex justify-center">
      <div className="text-center portable-h3 credits-serif  uppercase ">
      <PortableText value={heroData} />

      </div>
      </div>
 
    </div>
  );
}
