import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import CustomHeader from "../CustomHeader/CustomHeader";

const DefaultHeader = () => {
  return (
    <div className="flex gap-x-8 absolute top-0 mt-6">
      <ChevronLeftIcon className="cursor-pointer w-6 h-6 text-secondary" />
      <CustomHeader
        text="TRIAL PRACTICE"
        color="text-secondary"
        weight="font-bold"
      />
    </div>
  );
};

export default DefaultHeader;
