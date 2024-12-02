import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Pagina non trovata
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ci dispiace, non riusciamo a trovare la pagina che stai cercando.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}
