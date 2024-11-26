import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ProtectRoute = ({ children }: Props) => {
  return <>{children}</>;
};

export default ProtectRoute;
