import { Banner1, Banner2, Banner3, Banner4 } from "@/data/data";
import Banner from "./Banner";

export default function About() {
  return (
    <div className="space-y-12 md:space-y-20 md:p-12 px-4">
      <Banner {...Banner1} />
      <Banner {...Banner2} />
      <Banner {...Banner3} />
      <Banner {...Banner4} />
    </div>
  );
}
