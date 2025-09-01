import React from "react";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function FramerSplitText() {
  const containerRef = React.createRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("div"));

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0.2,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="w-full shad text-2xl text-white mb-4 ">
        I specialize in Node.js, utilizing Express for backend APIs and React
        for frontend UI. MongoDB is my go-to NoSQL database, but I am open to
        exploring SQL databases. I'm always excited to learn new technologies.
      </div>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
              
                max-width: 550px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
         .cyan{
         color: #0891b2;
           }
        `}</style>
  );
}
