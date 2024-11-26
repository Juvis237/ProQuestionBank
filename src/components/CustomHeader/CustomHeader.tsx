import { CustomHeaderProps } from "@/types/types";
import React from "react";

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  text,
  color,
  size,
  weight,
  customStyle,
  customStyleChild,
}) => {
  return (
    <h2
      className={`${color ? color : "text-black"} ${size ? size : ""} ${weight ? weight : ""} ${customStyle ? customStyle : ""} uppercase`}
    >
      <span className={`${customStyleChild ? customStyleChild : ""}`}>
        {text}
      </span>
    </h2>
  );
};
