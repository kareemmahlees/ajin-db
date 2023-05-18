import CodeExample from "@/components/CodeExample";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Langauges from "@/components/Langauges";
import Metrics from "@/components/Metrics";
import RunningExample from "@/components/RunningExample";

export default function Home() {
  return (
    <>
      <Landing />
      <div className="mx-[10px] sm:mx-[30px] md:mx-[60px] lg:mx-[100px]">
        <CodeExample />
      </div>
      <Langauges />
      <div className="mx-[10px] sm:mx-[30px] md:mx-[60px] lg:mx-[100px]">
        <Features />
        <Metrics />
      </div>
      <RunningExample />
      <div className="mx-[10px] sm:mx-[30px] md:mx-[60px] lg:mx-[100px]">
        <Footer />
      </div>
    </>
  );
}
