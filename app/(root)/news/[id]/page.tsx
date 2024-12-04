"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article className="max-w-[1700px] mx-auto px-4 lg:px-[3rem] py-8">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX }}
      />
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
            <span className="text-sm text-emerald-950 rounded-3xl font-bold py-2 px-3 bg-emerald-50">
              Features
            </span>
            <h1 className="text-4xl font-bold lg:max-w-[70%] mx-auto text-center">
              How to Use Message Apps to Communicate and Share
            </h1>
            <p className="text-gray-600">22 Januar 2024 • 04:45 AM</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[2/1] mb-12">
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
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-4 lg:sticky lg:top-20 lg:self-start">
            {sections.map(({ id, title }) => (
              <Button
                key={id}
                variant="ghost"
                className={`w-full justify-start text-left ${
                  activeSection === id
                    ? "text-black font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => scrollToSection(id)}
              >
                {title}
              </Button>
            ))}
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            <p className="text-gray-600 leading-relaxed">
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
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {/* Content for each section */}
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
              <Button variant="ghost" size="icon">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
