"use client";

import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#213D75] text-[#E4EDFF] py-16 mt-[80px]">
      <div className="max-w-[1700px] mx-auto px-4 md:px-[3rem]">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-5xl font-light text-[#E4EDFF] mb-6">
              Parla con Noi per Creare il Tuo Spazio Unico.
            </h2>
            <p className="text-[#E4EDFF]">
              Un bagno ben progettato è il cuore pulsante di una casa, un luogo
              di rifugio e di rigenerazione che riflette il comfort e lo stile
              della vita domestica. Noi di Contact ti aiuteremo, passo dopo
              passo, nella progettazione del tuo principale luogo di comfort
            </p>
          </div>
          <div className="relative h-[180px] lg:h-[240px] rounded-2xl overflow-hidden">
            <Image
              src="/hero/img-5.webp"
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
            <h3 className="text-[#E4EDFF] text-lg font-medium mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#E4EDFF] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#E4EDFF] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#E4EDFF] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#E4EDFF] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#E4EDFF] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info Section */}
          <div>
            <h3 className="text-[#E4EDFF] text-lg font-medium mb-6">
              Company Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Via Nazionale, 247 Nocera Superiore (SA)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>contact.arredo@virgilio.it</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+39 3881009344</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-1" />
                <div>
                  <p>Mon - Fri: 9:00 - 13:00, 16:00-20:00</p>
                  <p>Sat: 9:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-[#E4EDFF] text-lg font-medium mb-6">
              Social Media
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://www.instagram.com/contact.arredo/"
                  className="hover:text-[#E4EDFF] transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/contactarredo/"
                  className="hover:text-[#E4EDFF] transition-colors"
                >
                  Facebook
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/linkedin"
                  className="hover:text-[#E4EDFF] transition-colors"
                >
                  LinkedIn
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-[#E4EDFF] text-lg font-medium mb-6">Find Us</h3>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12093.07219363671!2d14.681305999999998!3d40.734127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bc0b5e44a36bb%3A0xcfbda39a45386f28!2sContact%20arredo%20S.R.L%20-%20ARREDO%20BAGNO%2C%20PAVIMENTI%2C%20PARQUET%2C%20RISTRUTTURAZIONI!5e0!3m2!1sit!2sus!4v1734951490556!5m2!1sit!2sus"
                width="100%"
                height="100%"
                title="Contact Arredo Position"
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
