"use client";
// import AnswerBTN from "@/components/AnswerBTN/AnswerBTN";
// import AnswerModal from "@/components/AnswerModal/AnswerModal";
// import PracticeHeader from "@/components/PracticeHeader/PracticeHeader";
// import PowerUps from "@/components/PowerUps/PowerUps";
// import PracticeResult from "@/components/PracticeResult/PracticeResult";
// import QuestionContainer from "@/components/QuestionContainer/QuestionContainer";
// import TrialLevelContainer from "@/components/TrialLevelContainer/TrialLevelContainer";
// import { Button } from "@/components/ui/button";
// import CustomModal from "@/components/CustomModal/CustomModal";

// import BattleResult from "@/components/BattleResult/BattleResult";

import CustomHeader from "@/components/CustomHeader/CustomHeader";

import NavBottomBar from "@/components/NavBottomBar/NavBottomBar";
import NavTopBar from "@/components/NavTopBar/NavTopBar";
import PracticeCard from "@/components/PracticeCard/PracticeCard";
import { sampleQuestionData } from "../../data";
import QuestionBox from "@/components/QuestionBankBoxes";

export default function Home() {
  return (
    // remove relative from this div and uncomment this code
    <div>
      <NavTopBar />
      <div className="px-4 pb-32  mt-[90px] ">
        {/*<CompleteProfileContainer />*/}
        {/*<LearningContainer />*/}
        <PracticeCard
          content="Get All your study materials in one place with Pro Question Bank"
          header="Question Bank"
          image="/assets/research-paper.svg"
        />
        <section className="px-4 pt-[2rem] pb-32">
          <CustomHeader text="Popular Courses" weight="font-bold" />
          <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
            {sampleQuestionData.map((box) => {
              return <QuestionBox question={box} />;
            })}
          </div>
        </section>
      </div>
      {/* <TrialLevelContainer /> */}
      {/* <div className="px-4 ">
        <PracticeHeader />
        <QuestionContainer />
        <div className="flex justify-between gap-6 w-full flex-wrap mt-8">
          <AnswerBTN label="[A]" text="4m/s" />
          <AnswerBTN label="[A]" text="4m/s" />
          <AnswerBTN label="[A]" text="4m/s" />
          <AnswerBTN label="[A]" text="4m/s" />
        </div>
      </div>
      <div className="absolute bottom-0 mb-6 w-full px-4 flex justify-center flex-col items-center gap-y-4">
        <Button className="py-6 w-full text-lg bg-disabled">Verify</Button>
      </div>
      <AnswerModal is_ans={false} /> */}
      {/* <PracticeResult /> */}
      {/* <CustomModal
        is_ans={false}
        header="Ooops! You got it wrong"
        btnText="Next"
      /> */}
      {/* <PowerUps /> */}
      {/* <BattleResult /> */}
      <NavBottomBar />
    </div>
  );
}
