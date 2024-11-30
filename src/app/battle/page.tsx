// import AnswerBTN from "@/components/AnswerBTN/AnswerBTN";
// import BattleHeader from "@/components/BattleHeader/BattleHeader";
// import BattleRoundSummary from "@/components/BattleRoundSummary/BattleRoundSummary";
// import QuestionCard from "@/components/QuestionCard/QuestionCard";
// import TimerModal from "@/components/TimerModal/TimerModal";
// import { Button } from "@/components/ui/button";
import React from "react";
import PageLayout from "../PageLayout";
import CustomText from "@/components/CustomText/CustomText";
import CustomHeader from "@/components/CustomHeader/CustomHeader";
import BattleModule from "@/components/BattleModule/BattleModule";

const page = () => {
  const battleModules = new Array(10).fill(null); // Creates an array of 10 elements
  return (
    <PageLayout>
      <div className="bg-primary min-h-screen relative">
        <section className="px-4 pt-5 pb-6">
          <CustomHeader
            text="BATTLE LEAGUE"
            weight="font-bold"
            color="text-white"
            customStyle="text-center"
          />
          <CustomText
            text="You can now compete with friends to gain more coins and receive awards by battling in a league"
            size="text-sm"
            color="text-white"
            customStyle="mt-4 text-center"
          />
          <div className="flex gap-4 flex-col items-center"></div>
        </section>
        <div className="bg-white px-6 py-6 pb-32 rounded-tr-3xl rounded-tl-3xl min-h-[80vh] absolute">
          <div className="w-full grid grid-cols-1 gap-6">
            {battleModules.map((_, index) => (
              <div
                key={index}
                className={`flex justify-${index % 2 === 0 ? "start" : "end"} w-full`}
              >
                <BattleModule />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
    // <>
    // <div className="px-4 ">
    //   <BattleHeader />
    //   <QuestionCard />
    //   <div className="flex justify-between gap-6 w-full flex-wrap mt-8">
    //     <AnswerBTN label="[A]" text="4m/s" />
    //     <AnswerBTN label="[B]" text="4m/s" />
    //     <AnswerBTN label="[C]" text="4m/s" />
    //     <AnswerBTN label="[D]" text="4m/s" />
    //   </div>
    //   <div className="my-9 w-full flex justify-center flex-col items-center gap-y-4">
    //     <Button className="py-6 w-full text-lg bg-disabled">Verify</Button>
    //   </div>
    // </div>
    // <div className="flex justify-between items-center w-full border-t-2 border-dashed border-secondary">
    //   <BattleRoundSummary
    //     name={"Fritz"}
    //     is_active={false}
    //     battleScore={5}
    //     avarta={"/assets/profile-1.svg"}
    //     is_border={true}
    //   />
    //   <BattleRoundSummary
    //     name={"Naura~B"}
    //     is_active={false}
    //     battleScore={5}
    //     avarta={"/assets/avarta-2.svg"}
    //   />
    // </div><div className="absolute bottom-0 mb-6 w-full px-4 flex justify-center flex-col items-center gap-y-4">
    //   <TimerModal
    //     header={`Fritz has frozen your questions for 5 minutes. You’ll be able to continue battling when the time elapses`}
    //     is_ans={false}
    //     btnText={"OK"}
    //   />
    // </div>
    // </>
  );
};

export default page;
