// import AnswerBTN from "@/components/AnswerBTN/AnswerBTN";
// import BattleHeader from "@/components/BattleHeader/BattleHeader";
// import BattleRoundSummary from "@/components/BattleRoundSummary/BattleRoundSummary";
// import QuestionCard from "@/components/QuestionCard/QuestionCard";
// import TimerModal from "@/components/TimerModal/TimerModal";
// import { Button } from "@/components/ui/button";
import NavBottomBar from "@/components/NavBottomBar/NavBottomBar";
import React from "react";

const page = () => {
  return (
    <>
      {/* <div className="px-4 ">
        <BattleHeader />
        <QuestionCard />
        <div className="flex justify-between gap-6 w-full flex-wrap mt-8">
          <AnswerBTN label="[A]" text="4m/s" />
          <AnswerBTN label="[B]" text="4m/s" />
          <AnswerBTN label="[C]" text="4m/s" />
          <AnswerBTN label="[D]" text="4m/s" />
        </div>
        <div className="my-9 w-full flex justify-center flex-col items-center gap-y-4">
          <Button className="py-6 w-full text-lg bg-disabled">Verify</Button>
        </div>
      </div>
      <div className="flex justify-between items-center w-full border-t-2 border-dashed border-secondary">
        <BattleRoundSummary
          name={"Fritz"}
          is_active={false}
          battleScore={5}
          avarta={"/assets/profile-1.svg"}
          is_border={true}
        />
        <BattleRoundSummary
          name={"Naura~B"}
          is_active={false}
          battleScore={5}
          avarta={"/assets/avarta-2.svg"}
        />
      </div> */}
      {/* <div className="absolute bottom-0 mb-6 w-full px-4 flex justify-center flex-col items-center gap-y-4">
        <TimerModal
          header={`Fritz has frozen your questions for 5 minutes. You’ll be able to continue battling when the time elapses`}
          is_ans={false}
          btnText={"OK"}
        />
      </div> */}
      <NavBottomBar />
    </>
  );
};

export default page;
