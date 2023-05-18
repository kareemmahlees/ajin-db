import { FC } from "react";

const Metrics: FC = ({}) => {
  return (
    <div className="mt-20 flex flex-col items-center space-y-7 rounded-lg bg-black p-8">
      <h2 className="text-3xl font-bold text-white">
        Join the growing{" "}
        <span className="bg-gradient-to-r from-[#f55e55] to-[#f6ae62] bg-clip-text text-transparent">
          open-source
        </span>{" "}
        community of AjinDB developers
      </h2>
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <MetricCard title="3000+" description="Projects with AjinDB" />
        <MetricCard title="8000+" description="Github Stars" />
        <MetricCard title="1000+" description="Discord community members" />
      </div>
    </div>
  );
};

export default Metrics;

interface MetricCardProps {
  title: string;
  description: string;
}

const MetricCard: FC<MetricCardProps> = ({ title, description }) => {
  return (
    <div
      className="flex border-spacing-5 flex-col items-center space-y-2
    rounded-lg border-2 border-dashed border-gray-500 bg-gray-800 p-5
    text-white hover:border-solid hover:border-orange-500
    "
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="break-all">{description}</p>
    </div>
  );
};
