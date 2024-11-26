import ProtectRoute from "@/components/ProtectRoute/ProductRoute";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectRoute>
      <main>{children}</main>
    </ProtectRoute>
  );
};

export default AppLayout;
