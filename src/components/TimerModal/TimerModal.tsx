import React from "react";
import CustomText from "../CustomText/CustomText";
import { Button } from "../ui/button";
import { TimerModalProps } from "@/types/types";

const TimerModal: React.FC<TimerModalProps> = ({ header, is_ans, btnText }) => {
  return (
    <section
      className={`fixed bottom-0 py-4 ${is_ans ? "bg-success-foreground" : "bg-disabled"} w-full px-4 flex flex-col items-center rounded-tl-[2rem] rounded-tr-[2rem]`}
    >
      <section className="w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="py-2 w-full">
            <CustomText
              text={header}
              color={`${is_ans ? "text-success" : "text-white"}`}
              customStyle="text-center py-5"
              weight="font-bold"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full">
              <Button
                type="button"
                className={`w-full ${
                  is_ans
                    ? "bg-success hover:bg-success"
                    : "bg-white hover:bg-disabled-foreground text-disabled"
                } flex justify-center items-center text-lg py-5 rounded-md`}
              >
                {btnText}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TimerModal;
