"use client";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";

const languagesEmbeds = {
  Python: "https://img.icons8.com/color/96/python--v1.png",
  Javascript: "https://img.icons8.com/color/96/javascript--v1.png",
  Typescript: "https://img.icons8.com/color/96/typescript.png",
  Dart: "https://img.icons8.com/color/96/dart.png",
  Kotlin: "https://img.icons8.com/color/96/kotlin.png",
  Php: "/php.png",
  Cpp: "/c-.png",
};

const Langauges: FC = ({}) => {
  return (
    <section className="mt-20 flex flex-col items-center gap-5">
      <div
        className="flex h-[68px] w-[68px] items-center justify-center
      rounded-full bg-gradient-to-r from-[#7b63f6] to-[#a363f6] text-3xl font-bold text-white"
      >
        1
      </div>
      <div className="text-gray-600">
        <div className="space-y-3">
          <h3 className="text-center text-3xl font-bold text-black">
            Bring the tools you want.
          </h3>
          <p className="text-xl">
            AjinDB is compatable with whatever language that comes to your mind
          </p>
        </div>
        <div className=" mt-9 grid grid-flow-row grid-cols-4 gap-5 ">
          {Object.entries(languagesEmbeds).map((lang) => {
            let i = 1;
            return (
              <LanguageCard key={i} langEmbed={lang[1]} langName={lang[0]} />
            );
          })}
        </div>
        <div className="mt-9 flex items-center justify-center">
          <ArrowDownIcon
            fontSize={"4xl"}
            className="transition hover:translate-y-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Langauges;

interface LanguageCardProps {
  langName: string;
  langEmbed: string;
}

const LanguageCard: FC<LanguageCardProps> = ({ langName, langEmbed }) => {
  return (
    <div className="flex items-center rounded-md p-2 shadow-lg transition hover:shadow-sm">
      <Image alt={langName} src={langEmbed} width={64} height={64} />
      <h3 className="font-semibold text-gray-600">{langName}</h3>
    </div>
  );
};
