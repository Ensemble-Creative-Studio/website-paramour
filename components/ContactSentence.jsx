import logo from "../public/Logo.svg";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

import Image from "next/image";
export default function ContactSentence({ footerData }) {
  return (
    <div className="" >

      <PortableText value={footerData} />

     
    
 
    </div>
  );
}
