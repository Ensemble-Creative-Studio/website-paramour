"use client";
import { useContext, useState, useEffect } from "react"; // Don't forget to import useState and useEffect
import { CurrentTagContext } from "./utils/CurrentTagContext";
import { TagContext } from "./utils/useTags";

export default function TagList() {
  const { currentTag, setCurrentTag } = useContext(CurrentTagContext);
  const { tagData } = useContext(TagContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const wrapSpansWithDivs = (elements) => {
    const wrappedElements = [];
    for (let i = 0; i < elements.length; i += 2) {
      wrappedElements.push(
        <div key={i} className="flex justify-center">
          {elements[i]}
          {elements[i + 1]}
        </div>
      );
    }
    return wrappedElements;
  };

  const tagElements = [
    <span
      className={currentTag === null ? "cursor-pointer selected" : "cursor-pointer notselected"}
      onClick={() => setCurrentTag(null)}
      key="ALL"
    >
      {" "}
      ALL,
    </span>,
    ...tagData.map((tag, index) => (
      <span
        className={`cursor-pointer uppercase ${tag === currentTag ? "selected" : "notselected"}`}
        key={tag._id}
        onClick={() => setCurrentTag(tag)}
      >
        {tag.title}
        {index === tagData.length - 1 ? "." : ","}
      </span>
    )),
  ];

  const wrappedTagElements = windowWidth >= 768 ? wrapSpansWithDivs(tagElements) : tagElements;

  return (
    <div className="h-screen flex justify-center items-center md:px-10">
      <div className="flex flex-col text-center flex-wrap">
        {wrappedTagElements}
      </div>
    </div>
  );
}
