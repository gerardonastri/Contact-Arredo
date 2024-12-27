import Image from "next/image";

export default function NewsHero() {
  return (
    <section className="max-w-[1700px] mx-auto px-4 md:px-[3rem]">
      <div className="space-y-6 text-center">
        <span className="inline-block text-sm font-medium text-emerald-600">
          News
        </span>

        <h2 className="text-4xl md:text-5xl font-normal text-gray-900 max-w-3xl mx-auto leading-tight">
          Rimani aggiornato con le ultime notizie e approfondimenti di Contact
          Arredo
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Noi di Contact Arredo comprendiamo quanto sia importante rimanere
          aggiornati sulle ultime tendenze, sugli avvisi di mercato e sulle
          intuizioni del mercato immobiliare.
        </p>
      </div>

      <div className="mt-12">
        <div className="relative h-[600px] aspect-[16/9] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/news-hero.jpg"
            fill
            alt="Modern architectural design featuring wood and concrete elements"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
