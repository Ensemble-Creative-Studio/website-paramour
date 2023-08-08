import "../../globals.css";

import MiniHeader from "@/components/MiniHeader";
import GalleryComponent from "@/components/gallery/GalleryComponent";
import ProjectInfoOverlay from "@/components/gallery/ProjectInfoOverlay";
import { getProjectBySlug } from "../../../sanity/sanity-util";
import LayoutNoFade from "@/components/transition/PageTransitionNoFade";

export default async function Page({ params }) {
  const projectData = await getProjectBySlug(params.slug);

  return (
    <LayoutNoFade>
      <div className="px-6">
        <ProjectInfoOverlay projectData={projectData} />
        <MiniHeader projectData={projectData} />
        <GalleryComponent projectData={projectData} />
      </div>
    </LayoutNoFade>
  );
}
