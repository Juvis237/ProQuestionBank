import React from "react";
import { Button } from "../ui/button";
import { AnswerBTNProps } from "@/types/types";

const AnswerBTN: React.FC<AnswerBTNProps> = ({ label, text, width }) => {
  return (
    <div
      className={`${width ? width : "w-[45%]"} flex justify-center items-center`}
    >
      <Button className="w-full bg-transparent py-10 pt-8 hover:bg-white text-black gap-x-4 border-shadow-default rounded-2xl">
        {label && <span className="font-bold">{label}</span>}
        {text}
      </Button>
    </div>
  );
};

export default AnswerBTN;
