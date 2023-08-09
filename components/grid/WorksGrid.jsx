import React from "react";
import Link from "next/link";
import FadingImage from "../utils/FadeInImage";
import StickyMiddleComponent from "./StickyMiddleComponent";
import RandomJustifyImagePair from "./gridUtils/RandomJustifyImagePair";
import DelayLink from "../utils/DelayLink";
export default function WorksGrid({ filteredProject }) {
  return (
    <div>
      {filteredProject.map((project, index) => {
        const isWide = project.firstImage.metadata.dimensions.aspectRatio >= 1;
        const tags = project.tags.map((tag) => tag.title).join(", ");
        const hasUrlLoop =
          project.videosGallery && project.videosGallery[0]?.urlLoop; // Check if videosGallery exists and is not empty
        return (
          <div className="pt-12 px-6" key={index}>
            <StickyMiddleComponent client={project.client} tags={tags} />
            {isWide ? (
              <DelayLink href={`/works/${project.slug.current}`}>
                <div className="relative  w-full h-auto pt-16 pb-48">
                  <FadingImage
                    src={project.firstImage.url}
                    alt="Your Image"
                    width={1000}
                    height={1000}
                  />
                </div>
              </DelayLink>
            ) : (
              <DelayLink  href={`/works/${project.slug.current}`}>
                <RandomJustifyImagePair
                  firstImage={project.firstImage.url}
                  secondImage={project.secondImage.url}
                  alt={project.client}
                  urlLoop={hasUrlLoop}
                />
              </DelayLink>
            )}
          </div>
        );
      })}
    </div>
  );
}
