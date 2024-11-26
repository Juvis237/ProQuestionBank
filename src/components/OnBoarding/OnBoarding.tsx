import { OnBoardingProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import CustomText from "../CustomText/CustomText";

const OnBoarding: React.FC<OnBoardingProps> = ({
  img,
  title,
  content,
  btnText,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center py-12">
        <Image
          src={img}
          alt=""
          className="max-w-full h-full"
          width={280}
          height={100}
        />
      </div>
      <div className="text-center bg-white pt-[2rem] rounded-tl-3xl rounded-tr-3xl flex flex-col justify-center items-center px-4">
        <h3 className="text-md font-bold py-2">{title}</h3>
        <CustomText size="text-sm" text={content} />
      </div>
      <div className="absolute bottom-0 mb-6 w-full px-4 flex justify-center flex-col items-center gap-y-4">
        {/* <OnBoardingNavBtn /> */}
        <Button className="w-full py-6">{btnText}</Button>
        <span>
          Already have an account?{" "}
          <Link className="text-primary" href={"/login"}>
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OnBoarding;
