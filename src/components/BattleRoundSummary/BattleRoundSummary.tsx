import { BattleRoundSummaryProps } from "@/types/types";
import BattleProfile from "../BattleProfile/BattleProfile";
import BattleRounds from "../BattleRounds/BattleRounds";

const BattleRoundSummary: React.FC<BattleRoundSummaryProps> = ({
  //   is_active,
  // eslint-disable-next-line react/prop-types
  name,
  //   battleScore,
  // eslint-disable-next-line react/prop-types
  avarta,
  // eslint-disable-next-line react/prop-types
  is_border,
}) => {
  return (
    <section
      className={`w-1/2 ${is_border ? "border-r-2 border-dashed border-secondary" : ""} py-3`}
    >
      <div>
        <BattleProfile avarta={avarta} name={name} />
      </div>
      <BattleRounds />
    </section>
  );
};

export default BattleRoundSummary;
