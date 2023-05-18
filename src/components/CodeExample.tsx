import { FC } from "react";
import { Zap } from "lucide-react";
import Image from "next/image";

interface CodeExampleProps {}

const CodeExample: FC<CodeExampleProps> = ({}) => {
  return (
    <div className="mx-[100px] mt-12 space-y-6">
      <div className="flex items-center space-x-32 ">
        <div className="flex basis-1/2 flex-col items-start gap-7">
          <Zap width={64} height={64} />
          <h2 className="text-3xl font-bold">Plazingly Fast.</h2>
          <p className="text-lg text-gray-600">
            Build with the language you want in a matter of seconds
          </p>
          <div className="flex items-center gap-5 font-semibold">
            <div className=" inline-flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#f4f3fc] font-bold text-[#5f56d3]">
              1
            </div>
            <p>Any use case.</p>
          </div>
          <p className="text-lg text-gray-600">
            With AjinDB you can create collections and tables just as you do in
            SQL and NoSQL databases
          </p>
          <div className="flex items-center gap-5 font-semibold">
            <div className=" inline-flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#f4f3fc] font-bold text-[#5f56d3]">
              1
            </div>
            <p>Use with whatever language.</p>
          </div>
          <p className="text-lg text-gray-600">
            AjinDB is compatible with a variety of languages
          </p>
        </div>
        <div className="basis-1/2">
          <Image
            alt="code example"
            src={"/code.png"}
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeExample;
