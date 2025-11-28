import "../../globals.css";
import Link from "next/link";
import ContactSentence from "@/components/ContactSentence";
import Footer from "@/components/Footer";
import Layout from "@/components/transition/PageTransition";
import { getFooter, getPageLegal } from "@/sanity/sanity-util";

export default async function Legal({ params }) {
  const url = params.slug;
  const footerData = await getFooter();
  const allPageLegalData = await getPageLegal();

  // Find the pageLegalData that matches the current URL
  const pageLegalData = allPageLegalData.find(
    (page) => page.slug.current === url
  );

  return (
    <Layout>
    <div className="almostWhite LegalPage px-6 md:px-10 py-12 md:py-16 ">
      <Link className="itemFooter grey uppercase cursor-pointer leading-none" href="./">Close</Link>

      <main>
        <h2 className="md:pt-24 pt-24 pb-12  projectTitle">{pageLegalData?.titre}</h2>

        <ContactSentence footerData={pageLegalData?.editionText} />
      </main>
    </div>
    </Layout>

  );
}
