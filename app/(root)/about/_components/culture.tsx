import { Coffee, Users, BookOpen, Briefcase } from "lucide-react";

export default function Culture() {
  return (
    <div className="w-full mx-auto p-6 z-[2]">
      <div className="flex flex-col lg:flex-row gap-8">
        <p className="mt-2 text-white">
          Il nostro team con le nostre politiche
        </p>
        {/* Left Section */}
        <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-between space-y-6">
          <div>
            <h2 className="text-4xl text-right font-bold text-[#571A06]">
              La nostra cultura
            </h2>
            <p className="mt-2 text-white text-right lg:max-w-[70%] ml-auto">
              Lorem ipsum dolor sit amet consectetur. At vel feugiat massa quis
              semper quam massa eget. Eu dictum est at dui suscipit velit. Lorem
              ipsum dolor sit amet consectetur. At vel feugiat massa quis semper
              quam massa eget.
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
          <div className="aspect-video">
            <img
              src="/images/team.jpeg"
              alt="Team meeting"
              className="rounded-2xl w-full h-[266px] object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Coffee, title: "Consulenza" },
              { icon: Users, title: "Collaborazione" },
              { icon: BookOpen, title: "Formazione" },
              { icon: Briefcase, title: "Supporto" },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-xl">
                <div className="w-10 h-10 bg-[#571A06] rounded-full mb-1 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#571A06] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white">
                  Lorem ipsum dolor sit amet consectetur. At et massa quis
                  fringilla. Nunc ut sit lacus tellus.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
