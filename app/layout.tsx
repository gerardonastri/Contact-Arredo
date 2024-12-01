import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  openGraph: {
    description:
      "The Ultimate Nextjs 14 Starter Kit for quickly building your SaaS, giving you time to focus on what really matters",
    images: [
      "https://utfs.io/f/8a428f85-ae83-4ca7-9237-6f8b65411293-eun6ii.png",
    ],
    url: "https://starter.rasmic.xyz/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextjs Starter Kit",
    description:
      "The Ultimate Nextjs 14 Starter Kit for quickly building your SaaS, giving you time to focus on what really matters",
    siteId: "",
    creator: "@rasmic",
    creatorId: "",
    images: [
      "https://utfs.io/f/8a428f85-ae83-4ca7-9237-6f8b65411293-eun6ii.png",
    ],
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
      </body>
    </html>
  );
}
