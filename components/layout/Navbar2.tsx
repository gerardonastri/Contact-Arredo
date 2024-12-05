"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import TransitionLink from "../TransitionLink";

export default function Navbar2() {
  const [isOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="max-w-[1700px] mx-auto px-4 lg:px-[3rem] h-16 flex items-center justify-between">
        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <div className="space-y-1.5">
                <motion.span
                  className="block w-6 h-0.5 bg-black"
                  animate={{ width: isOpen ? "0px" : "24px" }}
                />
                <motion.span
                  className="block w-4 h-0.5 bg-black"
                  animate={{ width: isOpen ? "0px" : "16px" }}
                />
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] bg-white z-[250]"
          >
            <nav className="flex flex-col gap-4">
              <TransitionLink
                href="/products"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                Products
              </TransitionLink>
              <TransitionLink
                href="/about"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                About
              </TransitionLink>
              <TransitionLink
                href="/news"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                News
              </TransitionLink>
              <TransitionLink
                href="/projects"
                className="text-sm hover:text-gray-600 transition-colors"
              >
                Projects
              </TransitionLink>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <TransitionLink
            href="/products"
            className="text-sm hover:text-gray-600 transition-colors"
          >
            Products
          </TransitionLink>
          <TransitionLink
            href="/about"
            className="text-sm hover:text-gray-600 transition-colors"
          >
            About
          </TransitionLink>
          <TransitionLink
            href="/news"
            className="text-sm hover:text-gray-600 transition-colors"
          >
            News
          </TransitionLink>
          <TransitionLink
            href="/projects"
            className="text-sm hover:text-gray-600 transition-colors"
          >
            Projects
          </TransitionLink>
        </div>

        {/* Logo */}
        <TransitionLink
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <h1 className="text-2xl font-glimerBold">Contact Arredo</h1>
        </TransitionLink>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          {/* <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User account</span>
          </Button> */}
        </div>
      </nav>
    </header>
  );
}
