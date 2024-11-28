import React from "react";
import { Button } from "../ui/button";
import BattleProfileResult from "../BattleProfileResult/BattleProfileResult";
import CustomHeader from "../CustomHeader/CustomHeader";

const BattleResultCard = () => {
  return (
    <div
      className={`absolute bottom-0 h-auto bg-white w-full px-4 pt-4 flex flex-col items-center rounded-tl-[2rem] rounded-tr-[2rem]`}
    >
      <CustomHeader text="You WON!" customStyle="font-bold pt-6" />

      <div className="flex justify-between gap-2 w-full py-8 items-center">
        <BattleProfileResult
          name="ProAssistant"
          score="10/15"
          avarta="/assets/profile-1.svg"
        />
        <div className="w-[50px] h-[50px] rounded-full bg-secondary text-white uppercase flex justify-center items-center mt-10">
          vs
        </div>
        <BattleProfileResult
          name="You"
          score="13/15"
          avarta="/assets/avarta-2.svg"
          win
        />
      </div>
      <div className="pb-9 w-full">
        <Button className="w-full py-6">Start Practicing</Button>
      </div>
    </div>
  );
};

export default BattleResultCard;
