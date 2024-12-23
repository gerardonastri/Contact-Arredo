import { Coffee, Users, BookOpen, Briefcase } from "lucide-react";

export default function Culture() {
  return (
    <div className="bg-[#C1A47B] lg:bg-transparent w-full mx-auto p-6 z-[2]">
      <div className="flex flex-col lg:flex-row gap-8">
        <p className="hidden lg:block mt-2 text-white">
          Il nostro team con le nostre politiche
        </p>
        {/* Left Section */}
        <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-between space-y-6">
          <div>
            <h2 className="text-4xl text-center lg:text-right font-glimerBold text-[#571A06]">
              La nostra cultura
            </h2>
            <p className="mt-2 text-white text-center lg:text-right lg:max-w-[70%] ml-auto">
              Crediamo che il nostro lavoro non si limiti alla creazione di
              mobili e arredi, ma che sia un’opportunità per costruire relazioni
              solide e durature con i nostri clienti e collaboratori.
            </p>
          </div>
          <div className="aspect-video">
            <img
              src="/images/team.jpeg"
              alt="Team consultation"
              className="rounded-2xl w-full  object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 space-y-2">
          <div className="aspect-video hidden lg:block">
            <img
              src="/images/team.jpeg"
              alt="Team meeting"
              className="rounded-2xl w-full h-[266px] object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Coffee,
                title: "Consulenza",
                text: "Ascoltiamo le tue esigenze per creare soluzioni su misura, guidandoti in ogni fase del progetto",
              },
              {
                icon: Users,
                title: "Collaborazione",
                text: "Lavoriamo fianco a fianco con i nostri clienti e partner per trasformare idee in realtà.",
              },
              {
                icon: BookOpen,
                title: "Formazione",
                text: "Investiamo nel nostro team per garantire competenze sempre aggiornate e innovative.",
              },
              {
                icon: Briefcase,
                title: "Supporto",
                text: "Offriamo assistenza continua, anche dopo la realizzazione, per garantirti un'esperienza senza pensieri.",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-xl">
                <div className="w-10 h-10 bg-[#571A06] rounded-full mb-1 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-glimerBold text-[#571A06] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
