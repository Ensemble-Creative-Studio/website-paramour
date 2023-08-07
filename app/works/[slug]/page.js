import "../../globals.css";

import MiniHeader from "@/components/MiniHeader";
import GalleryMobile from "@/components/gallery/GalleryMobile";
import { getProjectBySlug } from "../../../sanity/sanity-util";
import LayoutNoFade from "@/components/transition/PageTransitionNoFade";
export default async function Page({ params }) {
  const projectData = await getProjectBySlug(params.slug);
  return (
    <LayoutNoFade>
    <div className="px-6">
        <div className="animation-fadeout opacity-100 fixed top-0 left-0 z-30 h-screen w-screen bg-white flex justify-center items-center">
        <div className="z-10  sticky pointer-events-none " >
            <h2 className="projectTitle uppercase text-center">
                {projectData[0].client}
            </h2>
            <div className="flex gap-2 justify-center ">
            {projectData[0].tags.map((tag, index) => (
                <h4 className="menuFooter grey pt-4" key={index}>
                  {tag.title}
                  {index !== projectData[0].tags.length - 1 && ", "}
                </h4>
              ))}
          </div>
        </div>
        </div>
      <MiniHeader projectData={projectData} />
      <GalleryMobile projectData={projectData} />
    </div>
    </LayoutNoFade>
  );
}
