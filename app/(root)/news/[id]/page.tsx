"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sections = [
  { id: "organize", title: "Organize Your Contacts" },
  { id: "group-chats", title: "Master the Art of Group Chats" },
  { id: "multimedia", title: "Utilize Multimedia Features" },
  { id: "privacy", title: "Be Mindful of Privacy Settings" },
  { id: "emojis", title: "Embrace Emojis and GIFs" },
  { id: "reduce", title: "Reduce Your Conversations" },
  { id: "updates", title: "Stay Informed About Updates" },
  { id: "etiquette", title: "Practice Digital Etiquette" },
];

export default function NewsArticleDetail() {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const progressRef = useRef<HTMLDivElement>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      if (sectionRefs.current[id]) {
        observer.observe(sectionRefs.current[id]!);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setReadingProgress(calculateReadingProgress());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateReadingProgress = () => {
    if (!progressRef.current) return 0;
    const element = progressRef.current;
    const totalHeight = element.clientHeight - window.innerHeight;
    const windowScrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (windowScrollTop === 0) return 0;
    if (windowScrollTop > totalHeight) return 100;
    return Math.round((windowScrollTop / totalHeight) * 100);
  };

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article className="relative max-w-[1700px] mx-auto" ref={progressRef}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="px-4 lg:px-[3rem] py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-8 flex flex-col items-center text-center">
            <Link
              href="/news"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
            <div className="space-y-4">
              <span className="inline-block text-sm text-emerald-950 rounded-3xl font-bold py-2 px-3 bg-emerald-50">
                Features
              </span>
              <h1 className="text-3xl md:text-4xl font-bold lg:max-w-[70%] mx-auto">
                How to Use Message Apps to Communicate and Share
              </h1>
              <p className="text-gray-600">22 Januar 2024 • 04:45 AM</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[3/2] md:aspect-[2/1] mb-12">
            <Image
              src="/images/hero.webp"
              alt="People working on laptops"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar - Hidden on mobile */}
            <aside className="hidden lg:block lg:col-span-1 lg:sticky lg:top-20 lg:self-start">
              <div className="space-y-4">
                {sections.map(({ id, title }) => (
                  <div key={id} className="relative">
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-left pl-8 py-2 text-sm",
                        activeSection === id
                          ? "text-black font-semibold"
                          : "text-gray-500 hover:text-gray-700"
                      )}
                      onClick={() => scrollToSection(id)}
                    >
                      {title}
                    </Button>
                    <div 
                      className={cn(
                        "absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200",
                        activeSection === id && "bg-black"
                      )}
                    />
                    <div 
                      className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-200",
                        activeSection === id && "bg-black"
                      )}
                    />
                  </div>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              <p className="text-gray-600 leading-relaxed text-lg">
                In the fast-paced digital age, messaging apps have become an
                integral part of our daily communication. Whether you&apos;re
                keeping in touch with friends, family, or colleagues, learning to
                use all of these messaging apps effectively can enhance your
                communication experience. Here are some tips on how to make the
                most out of message apps to communicate and share seamlessly.
              </p>

              {sections.map(({ id, title }) => (
                <section
                  key={id}
                  id={id}
                  ref={(el) => {
                    sectionRefs.current[id] = el;
                  }}
                  className="space-y-4 scroll-mt-20"
                >
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </section>
              ))}

              {/* Social Share */}
              <div className="flex items-center space-x-4 pt-8 border-t">
                <span className="text-sm text-gray-600">Share Article</span>
                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Reading Progress Indicator */}
      <div className="fixed bottom-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm">
        {readingProgress}% read
      </div>
    </article>
  );
}