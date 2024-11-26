import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import BattleResultCard from "../BattleResultCard/BattleResultCard";
import Image from "next/image";

const BattleResult = () => {
  return (
    <div className="result_bg bg-primary h-screen">
      <XMarkIcon className="w-12 h-12 pt-3 float-right text-white font-bold cursor-pointer" />
      <div className="flex items-center absolute mt-[19rem] justify-center w-full gap-2">
        <Image src={"/assets/ellipse34.svg"} width={40} height={40} alt="" />
        <p className="text-2xl">+1000</p>
      </div>
      <BattleResultCard />
    </div>
  );
};

export default BattleResult;
