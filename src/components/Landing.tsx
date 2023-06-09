"use client";
import { FC, useState } from "react";
import { Input, useToast } from "@chakra-ui/react";

interface LandingProps {}

const Landing: FC<LandingProps> = ({}) => {
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState<string>("");
  const toast = useToast();
  return (
    <div className="head-img flex h-[600px] w-full items-center justify-center  bg-cover bg-fixed bg-center bg-no-repeat ">
      <div className="flex flex-col items-center space-y-9">
        <h1 className="text-7xl font-bold text-gray-800">AjinDB</h1>
        <p className="capitalize text-gray-500">
          a database that will never exist
        </p>
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <Input
            placeholder="Your email address..."
            width={"50"}
            isInvalid={valid}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              if (value === "") {
                setValid(true);
              } else {
                setValid(false);
                setValue("");
                toast({
                  title: "You have been waitlisted",
                  description: "You can now safely wait forever",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }
            }}
            className="rounded-md bg-black px-4 py-2 text-sm font-bold capitalize text-white"
          >
            join the forever waiting list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
