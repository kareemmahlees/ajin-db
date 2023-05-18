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
      <CodeExample />
      <Langauges />
      <Features />
      <Metrics />
      <RunningExample />
      <Footer />
    </>
  );
}
