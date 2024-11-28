import React from "react";
import CustomText from "../CustomText/CustomText";
import PracticeResultCardDetail from "../PracticeResultCardDetail/PracticeResultCardDetail";
import { Button } from "../ui/button";
import { PracticeResultCardData } from "../../../data";
import CustomHeader from "../CustomHeader/CustomHeader";

const PracticeResultCard = () => {
  return (
    <div
      className={`absolute bottom-0 h-auto bg-white w-full px-4 pt-4 flex flex-col items-center rounded-tl-[2rem] rounded-tr-[2rem]`}
    >
      <CustomHeader text="Congratulations!" customStyle="font-bold pb-3" />
      <CustomText
        text="Below is the summary of how you performed in this practice session"
        customStyle="text-center pb-16"
      />

      <div className="flex justify-between gap-2 w-full pb-16">
        {PracticeResultCardData.map((card, index) => (
          <PracticeResultCardDetail
            key={index}
            icon={card.icon}
            btnText={card.btnText}
            border={card.border}
            text={card.text}
          />
        ))}
      </div>
      <div className="pb-9 w-full">
        <Button className="w-full py-6">Try Again</Button>
      </div>
    </div>
  );
};

export default PracticeResultCard;
