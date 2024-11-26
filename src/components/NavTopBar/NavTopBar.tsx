import React from "react";
import { topNavLink } from "../../../data";
import NavTab from "../NavTab/NavTab";

const NavTopBar = () => {
  return (
    <nav className="fixed w-full top-0 z-10 mb-6">
      <section className="bg-white box-shadow flex justify-end items-center py-5 px-4 gap-5">
        {topNavLink.map((item, index) => (
          <NavTab key={index} image={item.icon} />
        ))}
      </section>
    </nav>
  );
};

export default NavTopBar;
