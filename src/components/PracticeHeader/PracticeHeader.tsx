import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { Progress } from "../ui/progress";

const PracticeHeader = () => {
  return (
    <section className="flex justify-between items-center gap-4 mt-6">
      <div className="w-[35%] flex gap-4 justify-between">
        <div className="flex items-center gap-2 justify-between">
          <Image src={"/assets/ellipse34.svg"} height={15} width={25} alt="" />
          <span>100</span>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <Image src={"/assets/ellipse35.svg"} height={15} width={25} alt="" />
          <span>50</span>
        </div>
      </div>
      <div className="w-[53%]">
        <Progress
          value={35}
          className="h-4 rounded-[1.5rem] bg-orange_active border-orange_active-foreground border-2"
          style={{}}
        />
      </div>
      <div className="w-[10%]">
        <XMarkIcon className="w-full h-6 font-bold cursor-pointer" />
      </div>
    </section>
  );
};

export default PracticeHeader;
