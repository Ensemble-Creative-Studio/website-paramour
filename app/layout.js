import ClientLayout from "./ClientLayout";
import Script from "next/script";
import { getHero } from "@/sanity/sanity-util";
import "./globals.css"; // Assurez-vous d'importer vos styles globaux ici si ce n'est pas déjà fait ailleurs

export async function generateMetadata() {
  const homeData = await getHero();
  // getHero retourne un tableau, on prend le premier élément
  const data = homeData[0];
  const seo = data?.seo;

  return {
    title: seo?.seoTitle || "Paramour",
    description: seo?.seoDescription || "Paramour is a paris based production agency dedicated to the fashion and lifestyle industries",
    openGraph: {
      images: seo?.seoImage?.asset ? [
        {
          url: seo.seoImage.asset.url, // Assurez-vous que votre requête GROQ récupère l'URL de l'asset pour seoImage
          width: 1200,
          height: 630,
          alt: seo.seoImage.alt || seo.seoTitle,
        }
      ] : [],
    },
  };
}

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-674321134" strategy="afterInteractive" />
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-674321134');
          `}
        </Script>
      </head>
      <ClientLayout params={params}>
        {children}
      </ClientLayout>
    </html>
  );
}
