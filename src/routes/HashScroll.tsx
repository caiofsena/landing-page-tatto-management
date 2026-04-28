import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function HashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const sectionId = decodeURIComponent(hash.slice(1));
    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [hash, pathname]);

  return null;
}
