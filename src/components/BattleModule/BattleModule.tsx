import React from "react";
import CustomHeader from "../CustomHeader/CustomHeader";
import CustomText from "../CustomText/CustomText";
import { Button } from "../ui/button";

const BattleModule = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-5">
      <CustomHeader text="D3 league" />
      <CustomText text="Compete with at least 500coins to feature on the leader board" />
      <Button className="w-full bg-secondary hover:bg-secondary">
        Battle Now
      </Button>
    </div>
  );
};

export default BattleModule;
