import "./globals.css";
import Image from "next/image";
import Hero from "@/components/Hero";
import BigSentence from "@/components/BigSentence";
import Header from "@/components/Header";
import { getHero } from "../sanity/sanity-util";
export default async function Home() {
  const heroData = await getHero();
  return (
    <div className="">
      <Header/>
      <main>
        <Hero heroData={heroData} />
        <div className="z-10 padding-top-screen relative bg-white">
          <BigSentence heroData={heroData} />
        </div>
      </main>
    </div>
  );
}
