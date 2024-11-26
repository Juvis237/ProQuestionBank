import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Timer from "../Timer/Timer";
import { Progress } from "@/components/ui/progress";

const BattleHeader = () => {
  return (
    <section className="flex justify-between items-center gap-3 mt-6">
      <div className="w-[35%] flex items-center gap-2">
        <Timer />
        <Progress value={75} className="h-4 rounded-[1.5rem] bg-disabled" />
      </div>
      <div className="w-[53%] flex gap-4 justify-between max-w-[10rem]">
        <div className="flex items-center gap-2 justify-between">
          <Image src={"/assets/ellipse34.svg"} height={15} width={25} alt="" />
          <span>100</span>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <Image src={"/assets/ellipse35.svg"} height={15} width={25} alt="" />
          <span>50</span>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <Image src={"/assets/ellipse36.svg"} height={15} width={25} alt="" />
          <span>50</span>
        </div>
      </div>
      <div className="w-[10%]">
        <XMarkIcon className="w-full h-6 font-bold cursor-pointer" />
      </div>
    </section>
  );
};

export default BattleHeader;
