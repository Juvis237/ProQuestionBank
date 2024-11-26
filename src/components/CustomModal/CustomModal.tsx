import { CustomModalProps } from "@/types/types";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import CustomText from "../CustomText/CustomText";

const CustomModal: React.FC<CustomModalProps> = ({
  header,
  btnText,
  is_ans,
}) => {
  return (
    <div className="success_modal animate cursor-pointer flex justify-center items-center">
      <section className="w-[85%] h-[15rem] rounded-xl bg-white flex my-[5rem] mx-auto px-6">
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src={
              is_ans
                ? "/assets/correct-badge.svg"
                : is_ans === ""
                  ? "/assets/check-badge.svg"
                  : "/assets/wrong-badge.svg"
            }
            height={35}
            width={50}
            alt=""
          />
          <div className="py-2 w-full">
            <CustomText
              text={header}
              color="text-black"
              weight="font-bold"
              customStyle="text-center py-5"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full">
              <Button
                type="button"
                className={`w-full font-bold ${
                  is_ans
                    ? "bg-primary hover:bg-primary-foreground"
                    : is_ans === ""
                      ? "bg-secondary hover:bg-secondary-foreground"
                      : "bg-destructive hover:bg-destructive-foreground"
                } flex justify-center items-center text-lg text-white py-5 rounded-md`}
              >
                {btnText}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomModal;
