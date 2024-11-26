import React from "react";
import CustomText from "../CustomText/CustomText";
import { Button } from "../ui/button";
import Image from "next/image";
import { PowerCardProps } from "@/types/types";

const PowerCard: React.FC<PowerCardProps> = ({ label, value, background }) => {
  return (
    <div
      className={`w-full flex py-4 rounded-2xl px-3 justify-between items-center border-shadow-power-up ${background === "secondary" ? "bg-secondary-light" : background === "primary" ? "bg-primary-light" : background === "disabled" ? "bg-disabled-pwd" : "bg-success-lime"}`}
    >
      <CustomText
        text={label}
        customStyle="text-sm w-[55%]"
        color="text-white"
      />
      <div className="flex flex-col items-center">
        <Image
          src={"/assets/power-up.svg"}
          width={65}
          height={50}
          alt="power up coins"
        />
        <span className="text-sm px-3 rounded-md inline-block -mt-3 text-white bg-disabled-pwd-btn">
          {value}
        </span>
      </div>
      <div className="absolute mt-24 w-[65%] flex justify-center items-center">
        <Button className="bg-secondary px-10 hover:bg-secondary-foreground ">
          Purchase
        </Button>
      </div>
    </div>
  );
};

export default PowerCard;
