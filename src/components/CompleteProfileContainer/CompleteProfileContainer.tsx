import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import CustomText from "../CustomText/CustomText";

const CompleteProfileContainer = () => {
  return (
    <section className="w-full relative mt-[5.5rem] bg-orange_active-foreground py-6 px-4 flex flex-col gap-5 rounded-xl">
      <div className="flex gap-4 items-start justify-between w-full">
        <Image src={"/assets/user-profile.svg"} width={90} height={90} alt="" />
        <div>
          <CustomHeader
            text="Complete Profile Now!"
            size="text-xl"
            weight="font-bold"
            color="text-white"
            customStyle="capitalize"
          />
          <CustomText
            color="text-white"
            text="Your profile is still not complete. Follow some few steps to top up your account and receive amazing rewards"
          />
        </div>
      </div>
      <div className="w-full">
        <Button className="bg-white text-secondary w-full py-6 font-bold">
          Complete Profile
        </Button>
      </div>
    </section>
  );
};

export default CompleteProfileContainer;
