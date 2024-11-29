import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-[100px] bg-black text-white px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1700px] md:px-[2rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Engage with Us in
              <br />
              Conversation.
            </h2>
            <p className="text-gray-400 max-w-xl">
              In a global world based on communication, a brand must look beyond
              its borders, open up to new experiences, and dare to be different.
              Meeting the brightest minds of one&apos;s time is the most
              effective way to nurture creativity
            </p>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <Image
              src="/images/hero.webp"
              alt="Modern interior with shelving and furniture"
              fill
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 border-t border-gray-800 pt-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">About</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Customer Service</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Prices and Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Social Media</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <a href="#" className="inline-block">
              <span className="sr-only">Contact Arredo</span>
              <h2 className="text-4xl font-bold">Contact Arredo</h2>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
