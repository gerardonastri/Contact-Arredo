import React from "react";
import NewsHero from "./_components/news-hero";
import NewsGrid from "./_components/grid";
import ContactForm from "./_components/contact-form";

const page = () => {
  return (
    <main>
      <NewsHero />
      <NewsGrid />
      <ContactForm />
    </main>
  );
};

export default page;
