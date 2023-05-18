"use client";
import Image from "next/image";
import { FC } from "react";
import { Divider } from "@chakra-ui/react";
import Link from "next/link";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  return (
    <>
      <nav className="fixed w-full flex justify-center bg-white z-50">
        <div className="flex items-center justify-between w-11/12 p-3">
          <Link href={"/"}>
            <div className="flex items-center gap-5">
              <Image
                alt="AjinDB icon"
                src={"/confused.png"}
                width={40}
                height={40}
              />
              <h3 className="font-bold text-2xl text-slate-900">AjinDB</h3>
            </div>
          </Link>
          <ul className="flex items-center gap-5">
            <li>
              <Link href={"/about"}>
                <h3 className="text-gray-600">About</h3>
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/kareemmahlees/ajin-db"}>
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
      <Divider color={"black"} />
    </>
  );
};

export default Nav;
