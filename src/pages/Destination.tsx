import { useState } from "react";
import Nav from "../components/Nav";

const Destination = () => {
  const [activeTab, setActivetab] = useState<string>("MOON");
  return (
    <div className="min-h-screen lg:bg-[url('/background-destination-desktop.jpg')] md:bg-[url('/background-destination-tablet.jpg')]  bg-[url('/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat">
      <Nav />
      <main className="flex align-center flex-col md:mt-10">
        <h1 className="lg:px-32 font-barlow-condensed text-white lg:text-2xl md:text-lg md:px-8 text-center md:text-left tracking-[0.25em]">
          <span className="mr-4 opacity-[0.5]">01</span>PICK YOUR DESTINATION
        </h1>

        <div className="md:px-40 px-10 flex lg:flex-row flex-col mt-12 mb-4 lg:gap-28 gap-14">
          {/* Left Moon and co. */}
          {activeTab === "MOON" && <img className="lg:w-90 lg:h-90 lg:self-start md:w-60 md:h-60 md:mx-auto w-40 h-40 mx-auto" src="/image-moon.png" alt="Moon Image" />}
          {activeTab === "MARS" && <img className="lg:w-90 lg:h-90 lg:self-start md:w-60 md:h-60 md:mx-auto w-40 h-40 mx-auto" src="/image-mars.png" alt="Moon Image" />}
          {activeTab === "EUROPA" && <img className="lg:w-90 lg:h-90 lg:self-start md:w-60 md:h-60 md:mx-auto w-40 h-40 mx-auto" src="/image-europa.png" alt="Moon Image" />}
          {activeTab === "TITAN" && <img className="lg:w-90 lg:h-90 lg:self-start md:w-60 md:h-60 md:mx-auto w-40 h-40 mx-auto" src="/image-titan.png" alt="Moon Image" />}
          
          {/* Right */}
          <div className="md:mt-2">
            <div className="flex justify-center lg:justify-start space-x-8 text-white font-barlow-condensed text-lg opacity-[0.8]">
              {["MOON", "MARS", "EUROPA", "TITAN"].map((tab, index) => (
                <p className={`cursor-pointer ${activeTab === tab ? "border-b-2 border-[#fff] text-white" : "text-[#D0D6F9] hover:text-[#a2a9d5]"}`} onClick={() => setActivetab(tab)} key={index}>
                  {tab}
                </p>
              ))}
            </div>
            {/* Moon */}
            {activeTab === "MOON" && (
              <div className="flex flex-col justify-center lg:justify-start my-8 max-w-lg text-center lg:text-left">
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-white font-bellefair">MOON</h1>
                <p className="text-[#D0D6F9]  text-lg text-center lg:text-left font-barlow leading-relaxed sm:mt-0 mt-4">
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <hr className="text-white my-10 opacity-[0.5]" />
                <div className="flex items-center md:space-x-26 md:flex-row flex-col md:gap-0 gap-6 justify-center lg:justify-start">
                  <div className="space-y-2">
                    <p className="text-[#D0D6F9] font-barlow text-sm whitespace-nowrap">AVG DISTANCE</p>
                    <h2 className="font-bellefair text-white text-2xl whitespace-nowrap">384,400 KM</h2>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#D0D6F9] font-barlow text-sm whitespace-nowrap">EST. TRAVEL TIME</p>
                    <h2 className="font-bellefair text-white text-2xl whitespace-nowrap">3 DAYS</h2>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "MARS" && (
              <div className="flex flex-col justify-center lg:justify-start my-8 max-w-lg text-center lg:text-left">
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-white font-bellefair">MARS</h1>
                <p className="text-[#D0D6F9] text-justify text-lg md:text-center lg:text-left font-barlow leading-relaxed">
                  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                </p>
                <hr className="text-white my-10 opacity-[0.5]" />
                <div className="flex items-center md:space-x-26 md:flex-row flex-col md:gap-0 gap-6 justify-center lg:justify-start">
                  <div className="space-y-2">
                    <p className="text-[#D0D6F9] font-barlow text-sm whitespace-nowrap">AVG DISTANCE</p>
                    <h2 className="font-bellefair text-white text-2xl whitespace-nowrap">225 MIL. KM</h2>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#D0D6F9] font-barlow text-sm whitespace-nowrap">EST. TRAVEL TIME</p>
                    <h2 className="font-bellefair text-white text-2xl whitespace-nowrap">9 MONTHS</h2>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "EUROPA" && (
              <div className="flex flex-col justify-center lg:justify-start my-8 max-w-lg text-center lg:text-left">
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-white font-bellefair">EUROPA</h1>
                <p className="text-[#D0D6F9] text-justify text-lg md:text-center lg:text-left font-barlow leading-relaxed">
                  The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                </p>
                <hr className="text-white my-10 opacity-[0.5]" />
                <div className="flex items-center md:space-x-26 md:flex-row flex-col md:gap-0 gap-6 justify-center lg:justify-start">
                  <div className="space-y-2">
                    <p className="text-[#D0D6F9] font-barlow text-sm whitespace-nowrap">AVG DISTANCE</p>
                    <h2 className="font-bellefair text-white text-2xl whitespace-nowrap">628 MIL. KM</h2>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#D0D6F9] font-barlow text-sm whitespace-nowrap">EST. TRAVEL TIME</p>
                    <h2 className="font-bellefair text-white text-2xl whitespace-nowrap">3 YEARS</h2>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "TITAN" && (
              <div className="flex flex-col justify-center lg:justify-start my-8 max-w-lg text-center lg:text-left">
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-white font-bellefair">TITAN</h1>
                <p className="text-[#D0D6F9] text-justify text-lg md:text-center lg:text-left font-barlow leading-relaxed">
                  The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                </p>
                <hr className="text-white my-10 opacity-[0.5]" />
                <div className="flex items-center md:space-x-26 md:flex-row flex-col md:gap-0 gap-6 justify-center lg:justify-start">
                  <div className="space-y-2">
                    <p className="text-[#D0D6F9] font-barlow text-sm whitespace-nowrap">AVG DISTANCE</p>
                    <h2 className="font-bellefair text-white text-2xl whitespace-nowrap">1.6 BIL. KM</h2>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#D0D6F9] font-barlow text-sm whitespace-nowrap">EST. TRAVEL TIME</p>
                    <h2 className="font-bellefair text-white text-2xl whitespace-nowrap">7 YEARS</h2>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
