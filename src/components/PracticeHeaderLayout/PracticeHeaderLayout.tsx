import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { PracticeHeaderLayoutProps } from "@/types/types";
import CustomHeader from "../CustomHeader/CustomHeader";

const PracticeHeaderLayout: React.FC<PracticeHeaderLayoutProps> = ({
  header,
  link,
}) => {
  return (
    <nav className="fixed w-full top-0 z-10 mb-6">
      <section
        className={`bg-white box-shadow flex ${link ? "justify-between" : "justify-center"} items-center py-5 px-4 gap-5"`}
      >
        {link && (
          <Button asChild variant={"ghost"} className="px-0 self-center">
            <Link href={link}>
              <ChevronLeftIcon className="w-6 h-8" />
            </Link>
          </Button>
        )}
        <CustomHeader
          text={header}
          color={"text-secondary"}
          weight="font-bold"
          customStyle={link ? "capitalized" : ""}
        />
      </section>
    </nav>
  );
};

export default PracticeHeaderLayout;
