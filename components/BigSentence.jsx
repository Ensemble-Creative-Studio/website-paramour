import logo from "../public/Logo.svg";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

import Image from "next/image";
export default function BigSentence({ heroData }) {
    console.log(heroData[0].bigSentence)
  return (
    <div className="h-screen flex items-center justify-center" >
      <div className="flex justify-center">
      <div className="text-center portable-h1 text-h1-mobile uppercase ">
      <PortableText value={heroData[0].bigSentence} />

      </div>
      </div>
 
    </div>
  );
}
