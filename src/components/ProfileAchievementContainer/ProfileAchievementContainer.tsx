import React from "react";
import { achievementCardData } from "../../../data";
import AchievementCard from "../AchievementCard/AchievementCard";

const ProfileAchievementContainer = () => {
  return (
    <div>
      <div className="bg-white box-shadow flex justify-between flex-wrap w-full gap-4 p-4 rounded-2xl">
        {achievementCardData.map((cardData, index) => (
          <AchievementCard
            key={index}
            image={cardData.image}
            text={cardData.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileAchievementContainer;
