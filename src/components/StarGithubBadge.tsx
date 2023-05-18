"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { FC, useState } from "react";
import clsx from "clsx";

const StarGithubBadge: FC = ({}) => {
  const [isInVisible, setIsInVisible] = useState(false);
  const classes = clsx(
    "fixed  bottom-5 left-1/2 z-50 flex h-[25px] -translate-x-1/2 items-center justify-center rounded-md bg-[#5f56d3] p-5 text-white",
    { invisible: isInVisible }
  );
  return (
    <div className={classes}>
      <button className="flex items-center gap-3 ">
        <Link
          href={"https://github.com/kareemmahlees/ajin-db"}
          target="_blank"
          className="rounded-lg hover:bg-[#4943a2]"
        >
          Star on GitHub ⭐
        </Link>
        <X
          className="rounded-lg hover:bg-[#4943a2]"
          onClick={(e) => {
            setIsInVisible(true);
          }}
        />
      </button>
    </div>
  );
};

export default StarGithubBadge;
