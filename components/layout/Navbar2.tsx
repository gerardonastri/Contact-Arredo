"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import TransitionLink from "../TransitionLink";
import Form from "next/form";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your search logic here
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="max-w-[1700px] mx-auto px-4 lg:px-[3rem] h-16 flex items-center justify-between">
        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                onClick={handleLinkClick}
              >
                Products
              </TransitionLink>
              <TransitionLink
                href="/about"
                className="text-sm hover:text-gray-600 transition-colors"
                onClick={handleLinkClick}
              >
                About
              </TransitionLink>
              <TransitionLink
                href="/news"
                className="text-sm hover:text-gray-600 transition-colors"
                onClick={handleLinkClick}
              >
                News
              </TransitionLink>
              <TransitionLink
                href="/projects"
                className="text-sm hover:text-gray-600 transition-colors"
                onClick={handleLinkClick}
              >
                Projects
              </TransitionLink>
              <form onSubmit={handleSearch} className="mt-4">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-black"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </form>
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

        {/* Desktop Search Form */}
        <div className="hidden md:block">
          <Form scroll={false} action="/search" className="relative">
            <Input
              name="query"
              type="search"
              placeholder="Search..."
              className="lg:min-w-[250px] w-48 pl-10 pr-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-black"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </Form>
        </div>
      </nav>
    </header>
  );
}
