import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

// Importazione dei font locali
const myFont = localFont({
  src: "./fonts/font.otf",
  variable: "--font-myfont",
});

const gilmerRegular = localFont({
  src: "./fonts/Gilmer-Regular.otf",
  variable: "--font-gilmer",
});
// const poppins = Poppins({
//   style: "normal",
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "Contact Arredo",
  description:
    "Contact arredo offre numerosi prodotti per la realizzazione della tua casa. Pavimenti e rivestimenti, parquet, arredobagno, rubinetteria e box doccia. ",
  keywords: [
    "arredamento casa",
    "pavimenti",
    "rivestimenti",
    "parquet",
    "arredobagno",
    "rubinetteria",
    "box doccia",
    "design interni",
    "prodotti per la casa",
    "Contact Arredo",
  ],

  openGraph: {
    description:
      "Contact arredo offre numerosi prodotti per la realizzazione della tua casa. Pavimenti e rivestimenti, parquet, arredobagno, rubinetteria e box doccia.",
    images: ["/logo.png"],
    url: "https://contactarredo.it",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Arredo",
    description:
      "Contact arredo offre numerosi prodotti per la realizzazione della tua casa. Pavimenti e rivestimenti, parquet, arredobagno, rubinetteria e box doccia.",
    siteId: "",
    creator: "@gerardonastri",
    creatorId: "",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Contact Arredo",
    "url": "https://www.contactarredo.com/",
    "logo": "https://www.contactarredo.com/logo.png",
    "description": "Contact Arredo offre soluzioni di arredamento di alta qualità per la casa e l'ufficio.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Esempio, 123",
      "addressLocality": "Milano",
      "addressRegion": "MI",
      "postalCode": "20100",
      "addressCountry": "IT"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39 012 3456789",
      "contactType": "customer service",
      "availableLanguage": ["Italian", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/contactarredo",
      "https://www.instagram.com/contactarredo",
      "https://www.linkedin.com/company/contactarredo"
    ]
  };

  return (
    <html lang="en">
      <Head>
        <title>Contact Arredo - Arredamento di Qualità</title>
        
        {/* Inserimento JSON-LD per Schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>
      <body
        className={`${myFont.variable} ${gilmerRegular.variable} font-poppins antialiased`}
      >
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
