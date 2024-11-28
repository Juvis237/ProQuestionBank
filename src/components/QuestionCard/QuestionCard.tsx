import React from "react";
import CustomText from "../CustomText/CustomText";
import Image from "next/image";
import { QuestionCardProps } from "@/types/types";
import CustomHeader from "../CustomHeader/CustomHeader";

const QuestionCard: React.FC<QuestionCardProps> = ({
  isCardDisplay,
  isInputQuestion,
}) => {
  return (
    <div
      className={`flex justify-around gap-5 mt-6 ${isCardDisplay ? "flex-row-reverse" : ""}`}
    >
      {isInputQuestion ? (
        ""
      ) : (
        <div className={`w-1/2 flex justify-end items-start pt-4`}>
          <Image
            src={"/assets/default-avarta-vs.svg"}
            height={35}
            width={90}
            alt=""
          />
        </div>
      )}
      <div className={`${isInputQuestion ? "w-full" : "w-3/4"}`}>
        <CustomHeader
          text="Question 1 of 10"
          weight="font-bold"
          customStyleChild="border-b-2 border-secondary"
          customStyle="pb-3"
        />
        <CustomText
          size="text-sm"
          text="A ball of mass 0.2 kg moving with a velocity of 5 m/s collides head-on with a stationary ball of mass 0.3 kg. After the collision, the first ball moves backward with a velocity of 1 m/s. What is the velocity of the second ball after the collision?"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
