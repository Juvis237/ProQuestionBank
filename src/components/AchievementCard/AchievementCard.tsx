import Image from "next/image";
import React from "react";
import CustomText from "../CustomText/CustomText";
import { AchievementCardProps } from "@/types/types";

const AchievementCard: React.FC<AchievementCardProps> = ({ image, text }) => {
  return (
    <div className="gap-2 p-3 border border-disabled w-[47%] rounded-2xl flex flex-col justify-center">
      <Image src={image} width={20} height={20} alt="achievement image" />
      <CustomText text={text} />
    </div>
  );
};

export default AchievementCard;
