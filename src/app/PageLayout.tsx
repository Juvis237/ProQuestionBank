import NavBottomBar from "@/components/NavBottomBar/NavBottomBar";
import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBottomBar />
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
