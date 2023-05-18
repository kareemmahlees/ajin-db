"use client";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { GitForkIcon, TerminalIcon, ServerIcon, ImagePlus } from "lucide-react";
import React, { FC } from "react";

const Features: FC = ({}) => {
  return (
    <section className="mx-[100px] mt-20 flex flex-col items-center gap-5">
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gradient-to-r from-[#c563f4] to-[#e863ef] text-3xl font-bold text-white">
        2
      </div>
      <div className="space-y-7 ">
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-center text-3xl font-bold text-black">
            Out of the box features
          </h3>
          <p className="text-xl text-gray-600">
            AjinDB ships with a variety of built in tooling
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          <FeatureCard
            title="Your Schema, Your Migrations"
            description="Create and manage your migrations without the need of external tools, AjinDB already has it."
          >
            <GitForkIcon size={55} />
          </FeatureCard>
          <FeatureCard
            title="Use your terminal, bruh!"
            description="AjinDB comes with a CLI tool that can manage your whole database."
          >
            <TerminalIcon size={55} />
          </FeatureCard>
          <FeatureCard
            title="Deploy Anywhere"
            description="AjinDB can easly be deployed to any hosting platform."
          >
            <ServerIcon size={55} />
          </FeatureCard>
          <FeatureCard
            title="Use your own Storage"
            description="AjinDB ships with a ready-to-use blob storage."
          >
            <ImagePlus size={55} />
          </FeatureCard>
        </div>
        <div className="mt-9 flex items-center justify-center text-gray-600">
          <ArrowDownIcon
            fontSize={"4xl"}
            className="transition hover:translate-y-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

interface FeatureCardProps {
  children: React.ReactNode; // the icon
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start gap-4 rounded-lg p-8 shadow-lg">
      {children}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
