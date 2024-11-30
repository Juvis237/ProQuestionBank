import { FormSchema } from "@/schema/form-schema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export type OnBoardingProps = {
  img: string;
  title: string;
  content: string;
  btnText: string;
};

export type CustomTextProps = {
  text: string;
  size?: string;
  weight?: string;
  color?: string;
  customStyle?: string;
};

export type CustomHeaderProps = {
  text: string;
  size?: string;
  weight?: string;
  color?: string;
  customStyle?: string;
  customStyleChild?: string;
};

export type AnswerBTNProps = {
  text: string;
  label: string;
  width?: string;
};

export type AnswerModalProps = {
  is_ans: boolean;
};

export type CustomCheckboxProps = {
  level: { name: string };
  index: number;
  form: UseFormReturn<z.infer<typeof FormSchema>>;
};

export type CustomModalProps = {
  hideModal?: () => void;
  confirmAction?: () => void;
  confirmDisabled?: boolean;
  id?: string;
  btnText: string;
  header: string;
  is_ans?: boolean | string;
};

export type BattleProfileProps = {
  avarta: string;
  name: string;
};

export type BattleRoundSummaryProps = {
  is_active?: boolean;
  name: string;
  battleScore?: number;
  avarta: string;
  is_border?: boolean;
};

export type TimerModalProps = {
  header: string;
  is_ans: boolean;
  btnText: string;
};

export type LoginSchema = {
  email: string;
  password: string;
};

export type PracticeResultCardDetailProps = {
  text: string;
  btnText: string;
  icon: string;
  border: string;
};

export type QuestionCardProps = {
  isCardDisplay?: boolean;
  isInputQuestion?: boolean;
};

export type PowerCardProps = {
  label: string;
  value: string;
  background: string;
};

export type BattleProfileResultProps = {
  avarta: string;
  name: string;
  score: string;
  win?: boolean;
};

export type NavBarLinkProps = {
  link: string;
  name: string;
  icon: string;
};

export type NavTabProps = {
  image: string;
};

export type LearningOptionCardProps = {
  image: string;
  title: string;
  content: string;
  isDisplay?: boolean;
};

export type PracticeHeaderLayoutProps = {
  header: string;
  link?: string;
};

export type PracticeCardProps = {
  image: string;
  header: string;
  content: string;
  position?: boolean;
};

export type MathRendererProps = {
  equation: string;
  displayMode?: boolean;
};

export type AchievementCardProps = {
  image: string;
  text: string;
};
