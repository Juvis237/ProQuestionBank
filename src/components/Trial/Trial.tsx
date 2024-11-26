import Image from "next/image";
import React from "react";
import CustomText from "../CustomText/CustomText";
import { Button } from "../ui/button";
import DefaultHeader from "../DefaultHeader/DefaultHeader";
import { trialBtnText } from "../../../data";

const Trial = () => {
  return (
    <>
      <section className="px-4 w-full flex flex-col">
        <div className="">
          <DefaultHeader />
        </div>
        <div className="flex items-center justify-center py-12 mt-6">
          <Image
            src={"/assets/student-stress.svg"}
            alt=""
            className="max-w-full h-full"
            width={280}
            height={100}
          />
        </div>
        <CustomText
          text="What Exam Would You Want To Take A Trial Battle For?"
          weight="font-bold"
        />
        <div className="flex gap-x-2 gap-y-6 mt-12 flex-wrap justify-evenly items-center">
          {trialBtnText.map((btnText, index) => (
            <Button
              key={index}
              variant={"outline"}
              className="border-secondary rounded-[1.5rem]"
            >
              {btnText.content}
            </Button>
          ))}
        </div>
      </section>
      <div className="absolute bottom-0 mb-6 w-full px-4 flex justify-center flex-col items-center gap-y-4">
        <Button className="py-6 w-full text-lg bg-disabled">Continue</Button>
      </div>
    </>
  );
};

export default Trial;
