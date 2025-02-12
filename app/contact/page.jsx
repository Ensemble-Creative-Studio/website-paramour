import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/transition/PageTransition";
import {
  getFooter,
  getPageLegal,
} from "../../sanity/sanity-util";
import MediumSentence from "@/components/MediumSentence";
import logo from "../../public/Logo.svg";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
export default async function Contact() {
  const footerData = await getFooter();

  const pageLegalData = await getPageLegal();
  return (
    <Layout>
      <div className="pt-12 md:pt-0">
        <Header />
        <main className="hidden md:block">
          <div className="z-10 relative almostWhite px-6 md:px-10">
            <div className="pt-48 flex justify-center pb-20 md:h-full md:pb-0 md:items-center md:w-full">
                <Image
                    className=" object-contain  mix-blend-difference contrast-50 md:h-full md:w-56"
                    priority
                    src={logo}
                    width={180}
                    height={180}
                    alt=""
                />
            </div>

            {/* Address */}
            <div className="pt-32 pb-16 md:pt-48 md:pb-24 flex flex-col gap-y-6 justify-center items-center text-center">
              <h3 className="portable-h3 credits-serif uppercase">Address</h3>
                <div className="credits-sans uppercase">
                    <PortableText value={footerData[0].adressText} />
                </div>
            </div>

            {/* Contact */}
            <div className="pt-12 pb-16 md:pb-24 flex flex-col gap-y-6 justify-center items-center text-center">
              <h3 className="portable-h3 credits-serif uppercase">Contact</h3>
                <div className="credits-sans uppercase">
                    <PortableText value={footerData[0].contactText} />
                </div>
            </div>

            {/* Socials */}
            <div className="pt-12 pb-16 md:pb-24 flex flex-col gap-y-6 justify-center items-center text-center">
              <h3 className="portable-h3 credits-serif uppercase">Socials</h3>
                <div className="credits-sans uppercase">
                    <PortableText value={footerData[0].SocialText} />
                </div>
            </div>

          </div>
        </main>
        <Footer footerData={footerData} pageLegalData={pageLegalData} />
      </div>
    </Layout>
  );
}
