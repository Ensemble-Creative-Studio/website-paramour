import "./globals.css";
import Image from "next/image";
import Hero from "@/components/Hero";
import BigSentence from "@/components/BigSentence";
import Header from "@/components/Header";
import FeaturedGridHome from "@/components/grid/FeaturedClientHome";
import ClientList from "@/components/ClientList";
import Footer from "@/components/Footer";
import { getHero, getClient,getFooter,getPageLegal } from "../sanity/sanity-util";
export default async function Home() {
  const heroData = await getHero();
  const clientData = await getClient();
  const footerData = await getFooter();
  const pageLegalData = await getPageLegal();


  return (
   

    <div className="">
      <Header/>
      <main>
        <Hero heroData={heroData} />
        <div className="z-10 padding-top-screen relative bg-white">
          <BigSentence heroData={heroData} />
          <FeaturedGridHome heroData={heroData} />
          <ClientList clientData={clientData} />
          <Footer footerData={footerData} pageLegalData={pageLegalData} />

        </div>
      </main>
    </div>
   

  );
}
