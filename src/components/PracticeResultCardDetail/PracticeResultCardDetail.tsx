import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { PracticeResultCardDetailProps } from "@/types/types";

const PracticeResultCardDetail: React.FC<PracticeResultCardDetailProps> = ({
  icon,
  btnText,
  border,
  text,
}) => {
  return (
    <div
      className={`pb-1 pt-5 px-[3px] w-full flex justify-center items-start flex-col gap-2 border rounded-md ${border === "ace" ? "border-destructive" : border === "time" ? "border-primary-dark" : "border-secondary"}`}
    >
      <div
        className={`font-bold flex items-center justify-center w-full gap-3 pb-6 ${border === "ace" ? "text-destructive" : border === "time" ? "text-primary-dark" : "text-secondary"}`}
      >
        <Image src={icon} width={31} height={31} alt="" />
        {text}
      </div>
      <Button
        className={`font-bold w-full ${border === "ace" ? "bg-destructive hover:bg-destructive" : border === "time" ? "bg-primary-dark hover:bg-primary-dark" : "bg-secondary hover:bg-secondary"}`}
      >
        {btnText}
      </Button>
    </div>
  );
};

export default PracticeResultCardDetail;
