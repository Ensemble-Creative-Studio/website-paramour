"use client";
import "../globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactSentence from "@/components/ContactSentence";
import Footer from "@/components/Footer";
import { getFooter, getPageLegal } from "../../sanity/sanity-util";
export default async function Legal() {
  const pathname = usePathname();
  const url = pathname.split("/").pop();
  const footerData = await getFooter();
  const allPageLegalData = await getPageLegal();

  // Find the pageLegalData that matches the current URL
  const pageLegalData = allPageLegalData.find(
    (page) => page.slug.current === url
  );

  return (
    
    <div className="bg-white">
      <Link href="./">Go back</Link>

      <main>
        <h2>{pageLegalData.titre}</h2>

        <ContactSentence footerData={pageLegalData.editionText} />
      </main>
      <Footer footerData={footerData} pageLegalData={allPageLegalData} />
    </div>
 

  );
}
