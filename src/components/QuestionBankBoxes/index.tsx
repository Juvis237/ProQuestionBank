import React from "react";
import { useRouter } from "next/navigation";

export type questionBox = {
  image: string;
  code: string;
  title: string;
  id: string;
};

type QuestionCardProps = {
  question: questionBox;
};
const QuestionBox: React.FC<QuestionCardProps> = ({ question }) => {
  const router = useRouter();
  const handleProfileClick = (question: questionBox) => {
    router.push(`/questionView/${question.id}`);
  };
  return (
    <div
      key={question.id}
      className="relative bg-white rounded-lg shadow-md hover:shadow-lg practice_card_position  transition cursor-pointer overflow-hidden"
      onClick={() => handleProfileClick(question)}
    >
      {/* question Image */}
      <img
        src={question.image}
        alt={`${question.code}'s profile`}
        className="w-full h-full object-cover"
      />

      {/* Overlay with question Info */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-4">
        <h3 className="text-lg font-semibold text-white">{question.code}</h3>
        <p className="text-sm text-gray-300">{question.title}</p>
      </div>
    </div>
  );
};

export default QuestionBox;
