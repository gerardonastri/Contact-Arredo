"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import TransitionLink from "../TransitionLink";

const navigation = [
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "News", href: "/news" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
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
      <nav className="mx-auto max-w-[1700px] px-4 lg:px-[3rem] sm:px-6 pt-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl font-glimerBold">
            Contact Arredo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 z-[100]">
            {navigation.map((item) => (
              <TransitionLink
                key={item.name}
                href={item.href}
                className="text-sm font-glimerBold font-medium text-gray-900 hover:text-gray-600 transition-colors"
              >
                {item.name}
              </TransitionLink>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden bg-white z-[999]">
            <Sheet>
              <SheetTrigger title="Open navbar" asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                title="sidebar links"
                side="right"
                className="w-[240px] sm:w-[300px] bg-white z-[999]"
              >
                <div className="mt-6 flow-root">
                  <div className="space-y-4">
                    {navigation.map((item) => (
                      <TransitionLink
                        key={item.name}
                        href={item.href}
                        className="block font-glimerBold px-3 py-2 text-base text-black hover:bg-gray-50 rounded-md"
                      >
                        {item.name}
                      </TransitionLink>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
