import Image from "next/image";
import "../../globals.css";
import Hero from "@/components/Hero";
import BigSentence from "@/components/BigSentence";
import MiniHeader from "@/components/MiniHeader";
import GalleryMobile from "@/components/gallery/GalleryMobile";
import { getProjectBySlug } from "../../../sanity/sanity-util";
export default async function Page({ params }) {
  const projectData = await getProjectBySlug(params.slug);
  return (


    <div className="px-6">
        <div className="animation-fadeout opacity-100 fixed top-0 left-0 z-30 h-screen w-screen bg-white flex justify-center items-center">
        <div className="z-10  sticky pointer-events-none " >
            <h2 className="projectTitle uppercase text-center">
                {projectData[0].client}
            </h2>
            <div className="flex gap-2 justify-center pb-2">
            {projectData[0].tags.map((tag, index) => (
              <h4 className="menuFooter grey pt-4" key={index}>
                {tag.title}
              </h4>
            ))}
          </div>
        </div>
        </div>
      <MiniHeader projectData={projectData} />
      <GalleryMobile projectData={projectData} />
    </div>
 
  );
}
