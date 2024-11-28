import Image from "next/image";
import React from "react";
import CustomText from "../CustomText/CustomText";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { LearningOptionCardProps } from "@/types/types";
import CustomHeader from "../CustomHeader/CustomHeader";

const LearningOptionCard: React.FC<LearningOptionCardProps> = ({
  image,
  title,
  content,
  isDisplay,
}) => {
  return (
    <section
      className={`flex bg-white box-shadow rounded-xl py-4 px-3 justify-between items-center gap-4 ${isDisplay ? "flex-row-reverse" : ""}`}
    >
      <Image src={image} width={70} height={70} alt="" />
      <div>
        <CustomHeader
          text={title}
          weight="font-bold"
          customStyle="capitalize"
        />
        <CustomText text={content} />
        <Button
          className="text-primary font-bold px-0 hover:bg-white hover:text-primary"
          variant="ghost"
        >
          Learn More <ArrowRightIcon className="w-5 h-5 text-primary ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default LearningOptionCard;
