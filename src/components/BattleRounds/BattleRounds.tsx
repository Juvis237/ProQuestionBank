import React from "react";

const BattleRounds = () => {
  // Original array of items
  const items = Array.from({ length: 15 }, (_, index) => `Item ${index + 1}`);

  // Mapping to create 3 groups of 5 items each
  const groupedItems = Array.from({ length: 3 }, (_, i) =>
    items.slice(i * 5, i * 5 + 5),
  );

  return (
    <div className="flex w-full justify-center items-center flex-col">
      {groupedItems.map((group, groupIndex) => (
        <div key={groupIndex} className="flex my-2">
          {group.map((item, itemIndex) => {
            const overallIndex = groupIndex * 5 + itemIndex;
            const backgroundColor =
              overallIndex >= 10
                ? "bg-disabled"
                : Math.random() > 0.5
                  ? "bg-destructive"
                  : "bg-success";

            return (
              <span
                key={itemIndex}
                className={`inline-block w-3 h-3 rounded-full mx-1 ${backgroundColor}`}
              ></span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default BattleRounds;
