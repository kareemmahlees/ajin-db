"use client";
import { redirect } from "next/navigation";
import { FC } from "react";

interface StarGithubBadgeProps {}

const StarGithubBadge: FC<StarGithubBadgeProps> = ({}) => {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex h-[25px] -translate-x-1/2 items-center justify-center rounded-md bg-[#5f56d3] p-5 text-white hover:bg-[#4943a2]">
      <button
        onClick={(e) => redirect("https://github.com/kareemmahlees/ajin-db")}
      >
        Star on GitHub ⭐
      </button>
    </div>
  );
};

export default StarGithubBadge;
