"use client";
import { useContext } from "react";
import { CurrentTagContext } from "./utils/CurrentTagContext";
import { TagContext } from "./utils/useTags";

export default function TagList() {
  const { currentTag, setCurrentTag } = useContext(CurrentTagContext);
  const { tagData } = useContext(TagContext);

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="flex flex-col text-center">
        <span
          className={currentTag === null ? "font-medium" : ""}
          onClick={() => setCurrentTag(null)}
        >
          {" "}
          ALL,
        </span>

        {tagData.map((tag, index) => (
          <span
            className={`uppercase ${tag === currentTag ? "font-medium	" : ""}`}
            key={tag._id}
            onClick={() => setCurrentTag(tag)}
          >
            {tag.title}
            {index === tagData.length - 1 ? "." : ","}
          </span>
        ))}
      </div>
    </div>
  );
}
