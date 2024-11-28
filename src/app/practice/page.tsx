// import AnswerBTN from "@/components/AnswerBTN/AnswerBTN";
// import PracticeHeader from "@/components/PracticeHeader/PracticeHeader";
// import QuestionContainer from "@/components/QuestionContainer/QuestionContainer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import React from "react";
import PageLayout from "../PageLayout";
import PracticeHeaderLayout from "@/components/PracticeHeaderLayout/PracticeHeaderLayout";
import { CustomHeader } from "@/components/CustomHeader/CustomHeader";
import CustomText from "@/components/CustomText/CustomText";
import PracticeCardContainer from "@/components/PracticeCardContainer/PracticeCardContainer";

const page = () => {
  return (
    <PageLayout>
      <>
        <PracticeHeaderLayout header="Practice" />
        <section className="px-4 pt-[5rem] pb-32">
          <CustomHeader
            text="Practice or Prepare for Exam?"
            weight="font-bold"
          />
          <CustomText
            text="Take short quizzes or full tests to get you ready for your Examination"
            size="text-sm"
            customStyle="mb-8 mt-4"
          />
          <div className="flex gap-4 flex-col items-center">
            <PracticeCardContainer />
          </div>
        </section>
      </>
    </PageLayout>
  );
  // <>
  {
    /* <div className="px-4 ">
        <PracticeHeader />
        <QuestionContainer /> */
  }

  {
    /* isSelect */
  }
  {
    /* <div className={`flex justify-between gap-6 w-full flex-wrap mt-8`}>
          <AnswerBTN label="[A]" text="4m/s" />
          <AnswerBTN label="[B]" text="4m/s" />
          <AnswerBTN label="[C]" text="4m/s" />
          <AnswerBTN label="[D]" text="4m/s" />
        </div> */
  }

  {
    /* isInput */
  }
  {
    /* <div className="w-full">
          <Input
            type="text"
            name="question"
            className="focus:outline-none border-t-0 border-l-0 border-r-0 rounded-none shadow-none border-b-4 outline-none border-secondary border-dashed mb-1 mt-12"
          />
          <span className="text-disabled text-sm">Fill answer here</span>
        </div> */
  }

  {
    /* isDraggable */
  }
  {
    /* <div className="w-full flex justify-center items-center mt-14 flex-col">
          <div className="w-[60%] border-4 rounded-md border-dashed border-secondary h-32"></div>
          <span className="text-disabled text-sm pt-2">Drag answer from below and drop here</span>
        </div> */
  }

  {
    /* draggable answers */
  }
  {
    /* <div className={`flex justify-evenly gap-6 w-full flex-wrap py-8`}>
          <AnswerBTN label="" text="4m/s" width="w-[25%]" />
          <AnswerBTN label="" text="4m/s" width="w-[25%]" />
          <AnswerBTN label="" text="4m/s" width="w-[25%]" />
          <AnswerBTN label="" text="4m/s" width="w-[25%]" />
          <AnswerBTN label="" text="4m/s" width="w-[25%]" />
        </div> */
  }
  {
    /* </div> */
  }

  {
    /* isDraggle is true position is absolute is removed and bottom-0 is also removed */
  }
  {
    /* <div
        className={`absolute bottom-0 mb-6 w-full px-4 flex justify-center flex-col items-center gap-y-4`}
      >
        <Button className="py-6 w-full text-lg bg-disabled">Verify</Button>
      </div> */
  }

  // </>
  // );
};

export default page;
