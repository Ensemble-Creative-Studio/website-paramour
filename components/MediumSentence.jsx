import { PortableText } from "@portabletext/react";

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
