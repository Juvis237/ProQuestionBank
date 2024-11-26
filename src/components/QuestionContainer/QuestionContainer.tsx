import React from "react";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import QuestionCard from "../QuestionCard/QuestionCard";

const QuestionContainer = () => {
  return (
    <div>
      <CustomHeader
        text="Topic: Mechanics"
        color={"text-secondary-foreground"}
        weight="font-bold mt-3"
      />
      <QuestionCard isCardDisplay isInputQuestion />
    </div>
  );
};

export default QuestionContainer;
