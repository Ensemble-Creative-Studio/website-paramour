"use client";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function ClientLayout({ children, params }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    if (lenis && lenis.scrollTo) {
      lenis.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [params?.slug, lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 0.5 }}>
        <AnimatePresence initial={true}>
          <body key={params?.slug}>
            {children}
          </body>
        </AnimatePresence>
    </ReactLenis>
  );
}

