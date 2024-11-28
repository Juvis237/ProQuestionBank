import React from "react";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import CustomText from "../CustomText/CustomText";
import { Button } from "../ui/button";
import Image from "next/image";
import { PracticeCardProps } from "@/types/types";

const PracticeCard = (card: PracticeCardProps) => {
  const { image, header, content, position } = card;
  return (
    <section
      className={`flex justify-between items-center p-3 rounded-xl gap-5 ${position ? "flex-row-reverse practice_card" : "bg-orange_active practice_card_position"}`}
    >
      <Image src={image} width={150} height={150} alt="practice image" />
      <div>
        <CustomHeader
          text={header}
          customStyle="pt-3"
          color={position ? "text-white" : ""}
          weight="font-bold"
        />
        <CustomText
          text={content}
          size="text-sm"
          customStyle="py-3"
          color={position ? "text-white" : ""}
        />
        <div className="w-full">
          <Button className="bg-secondary hover:bg-secondary text-white py-5 w-full">
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeCard;
