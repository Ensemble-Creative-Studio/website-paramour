import "../globals.css";
import Image from "next/image";
import Hero from "@/components/Hero";
import BigSentence from "@/components/BigSentence";
import Header from "@/components/Header";
import FeaturedGridHome from "@/components/grid/FeaturedClientHome";
import HomeGridComponent from "@/components/grid/gridUtils/HomeGridComponent";
import ClientList from "@/components/ClientList";
import Footer from "@/components/Footer";
import Layout from "@/components/transition/PageTransition";
import {
  getHero,
  getClient,
  getFooter,
  getPageLegal,
} from "@/sanity/sanity-util";
export default async function Home() {
  const heroData = await getHero();
  const clientData = await getClient();
  const footerData = await getFooter();
  const pageLegalData = await getPageLegal();

  return (
    <Layout>
      <div className="">
        <Header />
        <main className="">
          <Hero heroData={heroData} />
          <div className=" padding-top-screen relative almostWhite md:px-10 home">
            <BigSentence heroData={heroData} />

            <HomeGridComponent heroData={heroData} />
            <div className="romie font-light uppercase text-center text-h1-mobile  credits-serif pt-48 md:pt-56 pb-1 ">
              Our Clients
            </div>
            <ClientList clientData={clientData} fontSize='credits-sans' />
            <Footer footerData={footerData} pageLegalData={pageLegalData} />
          </div>
        </main>
      </div>
    </Layout>
  );
}
