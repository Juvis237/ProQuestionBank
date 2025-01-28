"use client";
// import AnswerBTN from "@/components/AnswerBTN/AnswerBTN";
// import BattleHeader from "@/components/BattleHeader/BattleHeader";
// import BattleRoundSummary from "@/components/BattleRoundSummary/BattleRoundSummary";
// import QuestionCard from "@/components/QuestionCard/QuestionCard";
// import TimerModal from "@/components/TimerModal/TimerModal";
// import { Button } from "@/components/ui/button";
import React from "react";
import PageLayout from "../../PageLayout";
import CustomText from "@/components/CustomText/CustomText";
import CustomHeader from "@/components/CustomHeader/CustomHeader";

import withTabs from "@/components/withTabs/page";

const WrappedComponent = withTabs(({ tab1, tab2, tab1Label, tab2Label }) => (
  <div>
    {tab1}
    {tab2}
  </div>
));

const ViewQuestion = () => {
  // Example image URLs (replace with your actual image URLs)
  const images = [
    "/questions/ps03_page-0001.jpg",
    "/questions/ps03_page-0002.jpg",
  ];

  return (
    <div className="w-full border-2 overflow-y-auto max-h-screen">
      <div className="relative">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative mb-4">
            {/* Image container */}
            <img
              src={imageUrl}
              alt={`Question Image ${index + 1}`}
              className="w-full h-auto"
            />
            {/* Transparent overlay to prevent downloads */}
            <div
              className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"
              style={{ pointerEvents: "none" }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const page = () => {
  // const { id } = useParams(); // Get the `id` from the URL
  return (
    <PageLayout>
      <div className="bg-primary min-h-screen relative">
        <section className="px-4 pt-5 pb-6">
          <CustomHeader
            text="Question Viewer"
            weight="font-bold"
            color="text-white"
            customStyle="text-center"
          />
          <CustomText
            text="Just Testing the Waters out"
            size="text-sm"
            color="text-white"
            customStyle="mt-4 text-center"
          />
          <div className="flex gap-4 flex-col items-center"></div>
        </section>
        <div className="bg-white px-6 py-6 pb-32 rounded-tr-3xl rounded-tl-3xl min-h-[80vh] absolute w-full">
          <WrappedComponent
            tab1={<ViewQuestion />}
            tab2={<div>Solution Viewer</div>}
            tab1Label="Question"
            tab2Label="Solution"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
