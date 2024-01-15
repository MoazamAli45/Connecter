import Image from "next/image";
import Hero from "./components/Home/Hero";
import Help from "./components/Home/Help";
import Payment from "./components/Home/Payment";
import Video from "./components/Home/Video";

export default function Home() {
  return (
    <main>
      <Hero />
      <Help />
      <Payment />
      <Video />
    </main>
  );
}
