import Image from "next/image";
import React from "react";
import CustomText from "../CustomText/CustomText";
import { BattleProfileResultProps } from "@/types/types";

const BattleProfileResult: React.FC<BattleProfileResultProps> = ({
  avarta,
  name,
  score,
  win,
}) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-y-2 relative">
        {win && (
          <Image
            src={"/assets/Rectangle 21.svg"}
            height={95}
            width={95}
            alt=""
            className="absolute -top-16"
          />
        )}
        <Image src={avarta} height={95} width={95} alt="" />
        <CustomText text={name} weight="font-semibold" />
        <span className="text-secondary">Score</span>
        <CustomText text={score} weight="font-semibold" size="text-xl" />
      </div>
    </div>
  );
};

export default BattleProfileResult;
