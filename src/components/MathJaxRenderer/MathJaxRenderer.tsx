/* eslint-disable react/prop-types */
"use client";

import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { MathRendererProps } from "@/types/types";

const MathRenderer: React.FC<MathRendererProps> = ({
  equation,
  displayMode = true,
}) => {
  const mathRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mathRef.current) {
      try {
        katex.render(equation, mathRef.current, {
          throwOnError: false, // Prevent errors for invalid input
          displayMode,
        });
      } catch (error) {
        console.error("Error rendering equation with KaTeX:", error);
      }
    }
  }, [equation, displayMode]);

  return <div ref={mathRef}></div>;
};

export default MathRenderer;
