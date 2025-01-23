import { Button } from "@/components/ui/button";
import React from "react";
import Culture from "./_components/culture";
import Carousel from "./_components/carousel";
import AboutForm from "./_components/about-form";

const About = () => {
  return (
    <main className="pt-[20px] md:pt-[80px]">
      <div className="px-[3rem] max-w-[1700px] mx-auto">
        <h2 className="text-3xl md:text-6xl font-glimerBold">
          Contact arredo,{" "}
          <span className="text-[#213D75]">
            ti <br className="hidden md:inline-block py-2" />
            aiutiamo
          </span>{" "}
          a costruire il <br className="hidden md:inline-block" />
          tuo sogno
        </h2>
        <Button className="bg-[#213D75] text-white mt-5">
          <a href="/products">
            Guarda il catalogo
          </a>
        </Button>
      </div>
      <div className="relative hidden lg:block">
        <img
          src="/images/about.svg"
          className="w-full h-[1200px] -mt-16 absolute top-0 left-0 z-0"
          alt=""
        />
      </div>
      <div className="relative lg:px-[3rem] max-w-[1700px] mx-auto mt-12 lg:mt-[250px] z-[2]">
        <Culture />
      </div>
      <div className="mt-[100px] md:mt-[200px] px-[3rem] max-w-[1700px] mx-auto">
        <Carousel />
      </div>
      <div className="mt-[100px]">
        <AboutForm />
      </div>
    </main>
  );
};

export default About;
