import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React from "react";
// import { Toaster } from "@/components/ui/toaster";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="pt-[100px]">
      <Navbar />
      {children}
      <Footer />

      {/* <Toaster /> */}
    </div>
  );
};

export default layout;
