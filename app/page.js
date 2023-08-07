import "./globals.css";
import Image from "next/image";
import Hero from "@/components/Hero";
import BigSentence from "@/components/BigSentence";
import Header from "@/components/Header";
import FeaturedGridHome from "@/components/grid/FeaturedClientHome";
import ClientList from "@/components/ClientList";
import Footer from "@/components/Footer";
import Layout from "@/components/transition/PageTransition";
import {
  getHero,
  getClient,
  getFooter,
  getPageLegal,
} from "../sanity/sanity-util";
export default async function Home() {
  const heroData = await getHero();
  const clientData = await getClient();
  const footerData = await getFooter();
  const pageLegalData = await getPageLegal();

  return (
    <Layout>
      <div className="">
        <Header />
        <main>
          <Hero heroData={heroData} />
          <div className=" padding-top-screen relative bg-white">
            <BigSentence heroData={heroData} />
            <FeaturedGridHome heroData={heroData} />
            <div className="romie font-light uppercase text-center text-h1-mobile pt-48 pb-1 ">
              Our Client
            </div>
            <ClientList clientData={clientData} fontSize='projectTitle' />
            <Footer footerData={footerData} pageLegalData={pageLegalData} />
          </div>
        </main>
      </div>
    </Layout>
  );
}
