"use client";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  return (
    <>
      <nav className="fixed z-50 flex w-full justify-center border-b-[1px] border-gray-300 bg-white">
        <div className="flex w-11/12 items-center justify-between p-3">
          <Link href={"/"}>
            <div className="flex items-center gap-5">
              <Image
                alt="AjinDB icon"
                src={"/confused.png"}
                width={40}
                height={40}
              />
              <h3 className="text-2xl font-bold text-slate-900">AjinDB</h3>
            </div>
          </Link>
          <ul className="flex items-center gap-5">
            <li>
              <Link href={"/about"}>
                <h3 className="text-gray-600">About</h3>
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/kareemmahlees/ajin-db"}
                target="_blank"
              >
                <Image
                  alt="github icon"
                  src={"/github.png"}
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
