import { NavTabProps } from "@/types/types";
import Image from "next/image";
import React from "react";

const NavTab: React.FC<NavTabProps> = ({ image }) => {
  return (
    <div className="">
      <Image src={image} width={25} height={25} alt="" />
    </div>
  );
};

export default NavTab;
