"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted !== "true") {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
                <p className="text-gray-700 text-sm sm:text-base">
                  Utilizziamo i cookie per migliorare la tua esperienza sul
                  nostro sito. Questi includono cookie essenziali per il
                  funzionamento di alcuni componenti.
                  <a
                    href="/privacy-policy"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    Scopri di più sulla nostra politica sui cookie
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <Button
                  onClick={acceptCookies}
                  className="bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Accetta tutti i cookie
                </Button>
                <button
                  onClick={() => setShowBanner(false)}
                  className="ml-4 text-gray-500 hover:text-gray-700"
                  aria-label="Chiudi banner dei cookie"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
