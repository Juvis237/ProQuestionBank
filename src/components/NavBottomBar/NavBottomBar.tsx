"use client";
import React from "react";
import { dashboardLink } from "../../../data";
import NavBarLink from "../NavBarLInk/NavBarLInk";

const NavBottomBar = () => {
  return (
    <nav className="fixed w-full bottom-0 z-10">
      <section className="bg-primary box-shadow flex justify-between items-center py-2 px-4">
        {dashboardLink.map((item, index) => (
          <NavBarLink
            key={index}
            link={item.link}
            name={item.name}
            icon={item.icon}
          />
        ))}
      </section>
    </nav>
  );
};

export default NavBottomBar;
