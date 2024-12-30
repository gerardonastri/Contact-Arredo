import React from "react";
import NewsHero from "./_components/news-hero";
import NewsGrid from "./_components/grid";
import ContactForm from "./_components/contact-form";
import { getNews } from "@/lib/news";

const page = async () => {
  const news = await getNews();
  return (
    <main>
      <NewsHero />
      <NewsGrid items={news} />
      <ContactForm />
    </main>
  );
};

export default page;
