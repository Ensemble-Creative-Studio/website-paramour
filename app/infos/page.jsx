import "../globals.css";
import Hero from "@/components/Hero";
import MedieumSentence from "@/components/MediumSentence";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientList from "@/components/ClientList";
import { getInfos, getFooter, getPageLegal,getClient } from "../../sanity/sanity-util";
export default async function Infos() {
  const heroData = await getInfos();``
const footerData = await getFooter();
const clientData = await getClient();

const pageLegalData = await getPageLegal();
  return (
 

    <div className="">
      <Header/>
      <main>
        <Hero heroData={heroData} />
        <div className="z-10 padding-top-screen relative bg-white px-6">
            <div className="pt-32 pb-16 " >
                <h3 className="credits-sans">ABOUT</h3>
                <MedieumSentence heroData={heroData[0].aboutText} />
            </div>
            <div className="pt-32 pb-16">
                <h3 className="credits-sans">SERVICES</h3>
                <MedieumSentence heroData={heroData[0].serviceText} />
            </div>
            <ClientList clientData={clientData} />

            <Footer footerData={footerData} pageLegalData={pageLegalData}/>
        </div>
       
      </main>
 
    </div>


  );
}