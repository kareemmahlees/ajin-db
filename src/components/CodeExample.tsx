import { FC, HTMLAttributes } from "react";
import { Zap } from "lucide-react";
import Image from "next/image";

interface CodeExampleProps extends HTMLAttributes<HTMLDivElement> {}

const CodeExample: FC<CodeExampleProps> = ({}) => {
  return (
    <div className="mt-12 space-y-6">
      <div className="flex flex-col items-center space-y-5 sm:flex-col sm:space-y-5 md:flex-row md:space-x-32">
        <div className="flex basis-1/2 flex-col items-start gap-7">
          <Zap width={64} height={64} />
          <h2 className="text-3xl font-bold">Blazingly Fast.</h2>
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
        <div className="sm:basis-0 md:basis-1/2">
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
