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
import CompleteProfileContainer from "@/components/CompleteProfileContainer/CompleteProfileContainer";
import LearningContainer from "@/components/LearningContainer/LearningContainer";
import NavBottomBar from "@/components/NavBottomBar/NavBottomBar";
import NavTopBar from "@/components/NavTopBar/NavTopBar";

export default function Home() {
  return (
    // remove relative from this div and uncomment this code
    <div className="relative">
      <NavTopBar />
      <div className="px-4 pb-32">
        <CompleteProfileContainer />
        <LearningContainer />
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
