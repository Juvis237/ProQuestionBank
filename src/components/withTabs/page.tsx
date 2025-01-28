"use client";

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface WithTabsProps {
  tab1: React.ReactNode;
  tab2: React.ReactNode;
  tab1Label: string;
  tab2Label: string;
}

const withTabs = (WrappedComponent: React.FC<WithTabsProps>) => {
  const HOC: React.FC<WithTabsProps> = ({
    tab1,
    tab2,
    tab1Label,
    tab2Label,
  }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handlers = useSwipeable({
      onSwipedLeft: () => setActiveTab((prev) => (prev === 0 ? 1 : prev)),
      onSwipedRight: () => setActiveTab((prev) => (prev === 1 ? 0 : prev)),
    });

    return (
      <div {...handlers} className="flex flex-col h-screen ">
        {/* Tab Navigation */}
        <div className="flex bg-white shadow-lg ">
          <button
            onClick={() => setActiveTab(0)}
            className={`flex-1 text-center border-b-4 p-4 ${
              activeTab === 0
                ? "border-b-4 border-[#e63946] text-[#e63946]" // Thicker red border for active tab
                : "border-gray-200 dark:border-gray-500"
            }`}
          >
            {tab1Label}
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`flex-1 text-center border-b-4  p-4 ${
              activeTab === 1
                ? "border-b-4 border-[#e63946] text-[#e63946]" // Thicker red border for active tab
                : "border-gray-200 dark:border-gray-500"
            }`}
          >
            {tab2Label}
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 0 ? tab1 : tab2}
        </div>
      </div>
    );
  };

  return HOC;
};

export default withTabs;
