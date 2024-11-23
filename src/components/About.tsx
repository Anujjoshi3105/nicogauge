import { Banner1, Banner2, Banner3, Banner4 } from "@/data/data";
import Banner from "./Banner";

export default function About() {
  return (
    <>
      <Banner {...Banner1} />
      <Banner {...Banner2} />
      <Banner {...Banner3} />
      <Banner {...Banner4} />
    </>
  );
}
