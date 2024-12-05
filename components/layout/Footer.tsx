"use client";

import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white/80 py-16 mt-[80px]">
      <div className="max-w-[1700px] mx-auto px-4 md:px-[3rem]">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-5xl font-light text-white mb-6">
              Engage with Us in Conversation.
            </h2>
            <p className="text-white/60">
              In a global world based on communication, a brand must look beyond
              its borders, open up to new experiences, and dare to be different.
              Meeting the brightest minds of one&apos;s time is the most
              effective way to nurture creativity
            </p>
          </div>
          <div className="relative h-[120px] lg:h-[180px] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero.webp"
              alt="Modern interior design"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">
              Company Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Design Street, Milan, Italy</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>contact@company.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+39 123 456 7890</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-1" />
                <div>
                  <p>Mon - Fri: 9:00 - 18:00</p>
                  <p>Sat: 10:00 - 16:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">
              Social Media
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/instagram"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/facebook"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="/linkedin"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Find Us</h3>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6046.535730008974!2d14.67872581229173!3d40.73413103614012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bc0b5e44a36bb%3A0xcfbda39a45386f28!2sContact%20arredo%20S.R.L%20-%20ARREDO%20BAGNO%2C%20PAVIMENTI%2C%20PARQUET%2C%20RISTRUTTURAZIONI!5e0!3m2!1sit!2sit!4v1733415238295!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
