import "../../globals.css";

import MiniHeader from "@/components/MiniHeader";
import GalleryComponent from "@/components/gallery/GalleryComponent";
import ProjectInfoOverlay from "@/components/gallery/ProjectInfoOverlay";
import { getProjectBySlug } from "../../../sanity/sanity-util";
import LayoutNoFade from "@/components/transition/PageTransitionNoFade";
import Layout from "@/components/transition/PageTransition";
import { SliderProvider } from "@/components/gallery/context/SliderContext";
export default async function Page({ params }) {
  const projectData = await getProjectBySlug(params.slug);

  return (
    <LayoutNoFade>
           <SliderProvider>
      <div className="px-6">
        <ProjectInfoOverlay projectData={projectData} />
        <MiniHeader projectData={projectData} />
        <GalleryComponent projectData={projectData} />
      </div>
      </SliderProvider>
    </LayoutNoFade>
  );
}
