import React from "react";
import { onBoardingDataSet } from "../../../data";
import OnBoarding from "../OnBoarding/OnBoarding";

const OnBoardingContainer = () => {
  return (
    <div className="bg-primary bg_img">
      {onBoardingDataSet.map((onboard, index) => (
        <OnBoarding
          key={index}
          img={onboard.img}
          title={onboard.title}
          content={onboard.content}
          btnText={onboard.btnText}
        />
      ))}
    </div>
  );
};

export default OnBoardingContainer;
