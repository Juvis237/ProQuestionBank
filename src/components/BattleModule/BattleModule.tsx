import React from "react";
import CustomHeader from "../CustomHeader/CustomHeader";
import CustomText from "../CustomText/CustomText";
import { Button } from "../ui/button";

const BattleModule = () => {
  return (
    <div className="w-[60%] flex flex-col justify-center gap-5 items-center px-4 pt-6 pb-4 bg-orange_active battle_card_position rounded-3xl">
      <CustomHeader text="D3 league" weight="font-bold"/>
      <CustomText text="Compete with at least 500 coins to feature on the leader board" customStyle="text-sm" />
      <Button className="w-full bg-secondary hover:bg-secondary">
        Battle Now
      </Button>
    </div>
  );
};

export default BattleModule;
