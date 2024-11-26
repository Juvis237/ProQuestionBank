import React from "react";
import PracticeResultCard from "../PracticeResultCard/PracticeResultCard";
import { XMarkIcon } from "@heroicons/react/24/outline";

const PracticeResult = () => {
  return (
    <div className="result_bg bg-primary h-screen">
      <XMarkIcon className="w-12 h-12 pt-3 float-right text-white font-bold cursor-pointer" />
      <PracticeResultCard />
    </div>
  );
};

export default PracticeResult;
