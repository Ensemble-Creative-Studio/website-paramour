import React from "react";
import DelayLink from "../utils/DelayLink";
import StickyMiddleComponent from "./StickyMiddleComponent";
import FadingImage from "../utils/FadeInImage";
export default function FeaturedGridHome({ heroData }) {
  const projects = heroData[0].projects;

  return (
    <div>
      <div className="romie font-light uppercase text-center text-h1-mobile py-28 md:py-32">
        Featured <br /> Projects
      </div>
      {projects.map((project, index) => {
        const isWide = project.firstImage.metadata.dimensions.aspectRatio >= 1;
        const tags = project.tags.map((tag) => tag.title).join(", ");

        return (
          <div className="pt-12" key={index}>
            <StickyMiddleComponent client={project.client} tags={tags} />
            <DelayLink
              className="flex justify-center pt-16 pb-48"
              href={`/works/${project.slug.current}`}
            >
              <div
                className={`relative px-6  h-auto ${
                  isWide ? "w-full" : "w-4/5"
                }`}
              >
                <FadingImage
                  src={project.firstImage.url}
                  alt="Your Image"
                  width={1000}
                  height={1000}
                />
              </div>
            </DelayLink>
          </div>
        );
      })}
    </div>
  );
}
