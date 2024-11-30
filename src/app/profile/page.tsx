import React from "react";
import PageLayout from "../PageLayout";
import PracticeHeaderLayout from "@/components/PracticeHeaderLayout/PracticeHeaderLayout";
import ProfileAchievementContainer from "@/components/ProfileAchievementContainer/ProfileAchievementContainer";

const page = () => {
  return (
    <PageLayout>
      <>
        <PracticeHeaderLayout header="Profile" />
        <div className="pt-[5rem] px-4 pb-32">
          <ProfileAchievementContainer />
        </div>
      </>
    </PageLayout>
  );
};

export default page;
