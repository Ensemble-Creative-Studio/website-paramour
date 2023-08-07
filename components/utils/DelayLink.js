// DelayLink.
'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DelayLink = ({ href, children, delay = 150, className }) => {
  const router = useRouter();
  const [isDivVisible, setDivVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setDivVisible(true);

    setTimeout(() => {
      router.push(href);
    }, delay);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
      <div
        className={`fixed  top-0 left-0 z-30 w-screen h-screen bg-white transition-opacity ${
          isDivVisible ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
    </Link>
  );
};

export default DelayLink;
