"use client";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";



export default function RootLayout({ children, params }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  useEffect(() => {
    if (lenis && lenis.scrollTo) {
      lenis.scrollTo({ top: 0, behavior: "smooth" });
      // assuming lenis.scrollTo accepts an object with a similar structure to window.scrollTo
    }
  }, [params.slug, lenis]); // This effect will run every time params.slug changes, or lenis is defined

  return (
    <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 0.5 }}>
      <html lang="en">
        <head>
          <title>Paramour</title>
          <meta
            name="description"
            content="Paramour is a paris based production agency dedicated to the fashion and lifestyle industries"
          />
        </head>
        <AnimatePresence initial={true}>
          <body key={params.slug} >
            {children}
          </body>
        </AnimatePresence>
      </html>
    </ReactLenis>
  );
}
