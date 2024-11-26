import { CustomTextProps } from "@/types/types";
import React from "react";

const CustomText: React.FC<CustomTextProps> = ({
  text,
  color,
  weight,
  size,
  customStyle,
}) => {
  return (
    <p
      className={`${color ? color : "text-black"} ${weight ? weight : "font-normal"} ${size ? size : ""} ${customStyle ? customStyle : ""}`}
    >
      {text}
    </p>
  );
};

export default CustomText;
