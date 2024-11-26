import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import CustomText from "../CustomText/CustomText";
import { AnswerModalProps } from "@/types/types";

const AnswerModal: React.FC<AnswerModalProps> = ({ is_ans }) => {
  return (
    <>
      <section
        className={`absolute bottom-0 h-[20rem] ${is_ans ? "bg-success-foreground" : "bg-destructive-foreground"} w-full px-4 pt-10 flex flex-col items-center gap-y-8 rounded-tl-[2rem] rounded-tr-[2rem]`}
      >
        <div className="flex justify-around gap-2 items-center ">
          <Image
            src={is_ans ? "/assets/correct-ans.svg" : "/assets/wrong-ans.svg"}
            height={35}
            width={90}
            alt=""
          />
          <div className="flex justify-around gap-3 w-full">
            <Image
              src={
                is_ans ? "/assets/correct-badge.svg" : "/assets/wrong-badge.svg"
              }
              width={35}
              height={35}
              alt=""
            />
            <CustomText
              text={
                is_ans
                  ? "Correct answer Well Done!"
                  : "Wrong answer! You can do better"
              }
              color={`${is_ans ? "text-success" : "text-destructive"}`}
              size="text-2xl"
              weight="font-bold"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <Image src={"/assets/ellipse34.svg"} height={15} width={45} alt="" />
          <span className={`text-3xl font-bold text-secondary`}>
            {is_ans ? "+" : "-"} 10
          </span>
        </div>
      </section>
      <div className="absolute bottom-0 mb-6 w-full px-4 flex justify-center flex-col items-center gap-y-4">
        <Button
          className={`py-6 w-full text-lg ${is_ans ? "bg-success" : "bg-destructive"} hover:bg-none`}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default AnswerModal;
