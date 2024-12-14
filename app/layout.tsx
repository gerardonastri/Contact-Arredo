import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

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
  return (
    <html lang="en">
      <body
        className={`${myFont.variable} ${gilmerRegular.variable} font-poppins antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
