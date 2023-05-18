import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <footer className="mx-[100px] my-20 space-y-20 text-gray-500">
      <div className="flex items-start justify-between">
        <Image alt="logo" src={"/confused.png"} width={64} height={64} />
        <div className="flex flex-col items-start gap-1">
          <p className="font-semibold">Site</p>
          <Link href={"/"} className="hover:text-violet-500">
            Home
          </Link>
        </div>
        <div className="flex flex-col items-start gap-1">
          <p className="font-semibold">Documentation</p>
          <Link href={"/"} className="hover:text-violet-500">
            Installation
          </Link>
          <Link href={"/"} className="hover:text-violet-500">
            Introduction
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-semibold">Resources</p>
          <Link
            href={"https://github.com/kareemmahlees/ajin-db"}
            target="_blank"
            className="hover:text-violet-500"
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-gray-400">
          Copyright &copy; 2023 Kareem Ebrahim
        </p>
        <p>
          Created with{" "}
          <Link
            href={"https://nextjs.org/"}
            className="text-blue-400 underline"
          >
            Nextjs
          </Link>
          , Powered by{" "}
          <Link
            href={"https://vercel.com/"}
            className="text-blue-400 underline"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
