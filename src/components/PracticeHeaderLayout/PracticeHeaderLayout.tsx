import React from "react";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { PracticeHeaderLayoutProps } from "@/types/types";

const PracticeHeaderLayout: React.FC<PracticeHeaderLayoutProps> = ({
  header,
  link,
}) => {
  return (
    <nav className="fixed w-full top-0 z-10 mb-6">
      <section className="bg-white box-shadow flex justify-between items-center py-5 px-4 gap-5">
        <Button asChild variant={'ghost'} className="px-0 self-center">
          <Link href={link}>
            <ChevronLeftIcon className="w-6 h-8" />
          </Link>
        </Button>
        <CustomHeader text={header} />
      </section>
    </nav>
  );
};

export default PracticeHeaderLayout;
