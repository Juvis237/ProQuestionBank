import { NavBarLinkProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBarLink: React.FC<NavBarLinkProps> = ({ link, name, icon }) => {
  const urlPath = usePathname();
  return (
    <Link href={link} className={`text-white`}>
      <div className="flex flex-col cursor-pointer justify-between items-center gap-y-2 relative">
        <div
          className={`${urlPath === link && "rounded-full border-8 border-white h-16 w-16 flex justify-center items-center absolute -top-12 bg-primary z-100"} ${urlPath === "/profile" ? "mr-4" : urlPath === "/" ? "ml-4" : ""}`}
        >
          <Image
            src={icon}
            width={urlPath === link ? 30 : 30}
            height={urlPath === link ? 30 : 30}
            alt=""
          />
        </div>
        <span
          className={`text-sm font-light ${urlPath === link ? "mt-8" : ""} ${urlPath === "/profile" ? "pr-4" : urlPath === "/" ? "pl-4" : ""}`}
        >
          {name}
        </span>
      </div>
    </Link>
  );
};

export default NavBarLink;
