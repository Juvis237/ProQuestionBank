import React from "react";
import CustomText from "../CustomText/CustomText";
import Image from "next/image";
import { BattleProfileProps } from "@/types/types";

const BattleProfile: React.FC<BattleProfileProps> = ({ avarta, name }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-2">
      <Image src={avarta} height={55} width={55} alt="" />
      <CustomText text={name} weight="font-semibold" />
    </div>
  );
};

export default BattleProfile;
