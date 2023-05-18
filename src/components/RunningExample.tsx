import { Source_Code_Pro } from "next/font/google";
import { FC } from "react";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const RunningExample: FC = ({}) => {
  return (
    <div className="mt-60 flex w-full justify-center bg-black py-40 text-white ">
      <div className="flex flex-col items-start space-y-6">
        <h2 className="text-4xl font-bold">Get up and running in seconds</h2>
        <p className="text-2xl text-gray-400">AjinDB requires NodeJs 13+</p>
        <h4 className="text-3xl font-bold">
          Install our library to get started:
        </h4>
        <div className={`${sourceCodePro.className} space-y-4 text-lg`}>
          <p className="flex items-center">
            <span className="mr-3 text-2xl font-bold text-violet-500">$</span>
            npm install ajin-db
          </p>
          <p className="flex items-center">
            <span className="mr-3 text-2xl font-bold text-violet-500">$</span>
            npx ajin init
          </p>
          <p className="flex items-center">
            <span className="mr-3 text-2xl font-bold text-violet-500">$</span>
            npx ajin start
          </p>
        </div>
        <div className="text-2xl">
          <p>And you should have your database start!</p>
          <p>Check out the docs to learn more.</p>
        </div>
        <button className=" rounded-md bg-violet-500 px-4 py-2 font-bold transition hover:scale-110 hover:bg-violet-100 hover:text-violet-500">
          View Docs
        </button>
      </div>
    </div>
  );
};

export default RunningExample;
