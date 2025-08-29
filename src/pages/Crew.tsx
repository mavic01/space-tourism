import { useState } from "react";
import Nav from "../components/Nav";

const crewInfo = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/image-douglas-hurley.png",
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. He became the first South African to travel to space as a space tourist.",
    image: "/image-mark-shuttleworth.png",
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18 and is a test pilot.",
    image: "/image-victor-glover.png",
  },
  {
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS.",
    image: "/image-anousheh-ansari.png",
  },
];

const Crew = () => {
  const [current, setCurrent] = useState(0);
  const crew = crewInfo[current];
  return (
    <section className="min-h-screen lg:bg-[url('/background-crew-desktop.jpg')] md:bg-[url('/background-crew-tablet.jpg')]  bg-[url('/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat">
      <Nav />
      <main className="lg:mt-2 mt:2 md:mt-8">
        <h2 className="lg:px-24 font-barlow-condensed text-white lg:text-xl md:text-lg md:px-8 text-center md:text-left tracking-[0.25em]">
          <span className="mr-4 opacity-[0.5]">02</span> MEET YOUR CREW
        </h2>
        <div className="min-h-screen text-white flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-10">
          {/* Left Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-3">
              <p className="lg:text-3xl text-xl text-gray-300 uppercase font-bellefair">
                {crew.role}
              </p>
              <h1 className="text-4xl lg:text-5xl font-serif uppercase font-bellefair">
                {crew.name}
              </h1>
              <p className="leading-relaxed max-w-md mx-auto text-lg text-[#D0D6F9] lg:mx-0 font-barlow">
                {crew.description}
              </p>
            </div>
            {/* Dots */}
            <div className="flex justify-center lg:justify-start space-x-3 pt-6">
              {crewInfo.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    current === index ? "bg-white scale-110" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center mt-10 lg:mt-0">
            <img
              src={crew.image}
              alt={crew.name}
              className="w-72 lg:w-[400px] object-cover"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Crew;
