import Link from "next/link";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import ContactSentence from "./ContactSentence";
import logo from "../public/Logo.svg";
import { getCurrentYear } from "./utils/getYear";
export default function Footer({ footerData, pageLegalData }) {
  const currentYear = getCurrentYear();
  return (
    <footer className="z-10 pt-24">
      <div className=" flex justify-center pb-20">
        <Image
          className=" object-contain  mix-blend-difference  "
          priority
          src={logo}
          width={210}
          height={180}
          alt="Logo param"
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className=" text-center">
          <h3 className="pb-5">ADRESS</h3>
          <ContactSentence footerData={footerData[0].adressText} />
        </div>
        <div className=" text-center">
          <h3 className="pb-5">CONTACT</h3>
          <ContactSentence footerData={footerData[0].contactText} />
        </div>
        <div className=" text-center">
          <h3 className="pb-5">SOCIALS</h3>
          <ContactSentence footerData={footerData[0].SocialText} />
        </div>
        <div className=" text-center">
          <h3 className="pb-5 uppercase">©paramour {currentYear}</h3>
          {pageLegalData.map((page, index) => (
            <div key={index}>
              <Link href={page.slug.current}>{page.titre}</Link>
            </div>
          ))}
          <Link href='https://ensemble.ooo'>Site by ensemble.ooo</Link>
        </div>
        <div className="text-center">
         
        </div>
      </div>
    </footer>
  );
}
