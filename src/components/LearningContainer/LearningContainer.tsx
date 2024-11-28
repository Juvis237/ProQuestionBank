import React from "react";
import { learningData } from "../../../data";
import CustomHeader from "../CustomHeader/CustomHeader";
import LearningOptionCard from "../LearningOptionCard/LearningOptionCard";

const LearningContainer = () => {
  return (
    <section className="flex flex-col gap-4 justify-between items-center mt-4">
      {learningData.map((lesson, index) => {
        return (
          <div key={index}>
            <CustomHeader
              text={lesson.header}
              color="text-secondary"
              weight="font-bold"
              customStyle="mb-4 capitalize"
            />
            <div className="flex flex-col gap-2 justify-between items-center">
              {lesson.lessons.map((lessonItem, index) => (
                <LearningOptionCard
                  key={index}
                  image={lessonItem.image}
                  title={lessonItem.title}
                  content={lessonItem.content}
                  isDisplay={lessonItem.isDisplay}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default LearningContainer;
