import React from "react";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import CustomText from "../CustomText/CustomText";
import { powerupsData } from "../../../data";
import PowerCard from "../PowerCard/PowerCard";
import { XMarkIcon } from "@heroicons/react/24/outline";

const PowerUps = () => {
  return (
    <div className="success_modal animate cursor-pointer flex justify-center items-center">
      <section className="w-[85%] h-auto min-h-[40rem] rounded-xl bg-white my-[5rem] mx-auto px-6 flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col gap-2 items-center justify-center relative">
          <>
            <CustomHeader
              text="Power Ups"
              size="text-2xl"
              customStyle="capitalize"
              color="text-secondary"
              weight="font-bold"
            />
            <XMarkIcon className="absolute top-0 right-0 w-8 h-8" />
          </>
          <CustomText
            text="Shop for power ups and freeze opponent"
            customStyle="text-center"
          />
        </div>
        <div className="flex flex-col justify-between items-center h-full gap-6 w-full">
          {powerupsData.map((powerUp, index) => (
            <PowerCard
              key={index}
              label={powerUp.label}
              value={powerUp.value}
              background={powerUp.color}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PowerUps;
