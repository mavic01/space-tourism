import Nav from "../components/Nav";
import { useState } from "react";

const Technology = () => {
  const [activeNumber, setActiveNumber] = useState("1");
  return (
    <section className="min-h-screen lg:bg-[url('/background-technology-desktop.jpg')] md:bg-[url('/background-technology-tablet.jpg')]  bg-[url('/background-technology-mobile.jpg')] bg-cover bg-center bg-no-repeat">
      <Nav />

      <main className="lg:mt-2 mt:2 md:mt-8">
        <h2 className="lg:px-24 font-barlow-condensed text-white lg:text-xl md:text-lg md:px-8 text-center md:text-left tracking-[0.25em]">
          <span className="mr-4 opacity-[0.5]">03</span> SPACE LAUNCH 101
        </h2>

        {/* Mobile and Tablet */}
        <div className="lg:hidden flex flex-col min-h-screen text-white items-center justify-center mb-4 px-0 lg:px-24 py-12">
          {/* Top Image */}
          <div>
            {activeNumber === "1" && (
              <picture>
                {/* Mobile only (<768px) */}
                <source
                  media="(max-width: 767px)"
                  srcSet="/image-launch-vehicle-portrait.jpg"
                  className="w-full object-cover"
                />
                {/* Tablet only (768px–1023px) */}
                <source
                  media="(min-width: 768px) and (max-width: 1023px)"
                  srcSet="/image-launch-vehicle-landscape.jpg"
                  className="w-full object-cover"
                />
                {/* Fallback */}
                <img
                  src="/image-launch-vehicle-portrait.jpg"
                  className="w-full object-cover"
                  alt="Launch Vehicle Image"
                />
              </picture>
            )}
            {activeNumber === "2" && (
              <picture>
                {/* Mobile only (<768px) */}
                <source
                  media="(max-width: 767px)"
                  srcSet="/image-spaceport-portrait.jpg"
                  className="w-full object-cover"
                />
                {/* Tablet only (768px–1023px) */}
                <source
                  media="(min-width: 768px) and (max-width: 1023px)"
                  srcSet="/image-spaceport-landscape.jpg"
                  className="w-full object-cover"
                />
                {/* Fallback */}
                <img
                  src="/image-spaceport-portrait.jpg"
                  className="w-full object-cover"
                  alt="Launch Vehicle Image"
                />
              </picture>
            )}
            {activeNumber === "3" && (
              <picture>
                {/* Mobile only (<768px) */}
                <source
                  media="(max-width: 767px)"
                  srcSet="/image-space-capsule-portrait.jpg"
                  className="w-full object-cover"
                />
                {/* Tablet only (768px–1023px) */}
                <source
                  media="(min-width: 768px) and (max-width: 1023px)"
                  srcSet="/image-space-capsule-landscape.jpg"
                  className="w-full object-cover"
                />
                {/* Fallback */}
                <img
                  src="/image-space-capsule-portrait.jpg"
                  className="w-full object-cover"
                  alt="Launch Vehicle Image"
                />
              </picture>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center mt-6 gap-6">
            {["1", "2", "3"].map((num, index) => (
              <button
                onClick={() => setActiveNumber(num)}
                key={index}
                className={`w-12 h-12 cursor-pointer font-bellefair rounded-full flex items-center justify-center ${
                  activeNumber === num
                    ? "bg-white text-[#0B0D17]"
                    : "border border-[#999] text-white"
                } text-2xl`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Text Section */}
          <div>
            {activeNumber === "1" && (
              <div className="flex flex-col items-center justify-center mt-10 gap-6">
                <h2 className="text-white text opacity-[0.7] text-2xl font-bellefair">
                  THE TERMINOLOGY…
                </h2>
                <h2 className="text-white text md:text-4xl text-3xl font-bellefair">
                  LAUNCH VEHICLE
                </h2>
                <p className="text-center leading-relaxed max-w-md font-barlow text-[#D0D6F9] md:text-lg text-sm md:px-0 px-10">
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </p>
              </div>
            )}

            {activeNumber === "2" && (
              <div className="flex flex-col items-center justify-center mt-10 gap-6">
                <h2 className="text-white text opacity-[0.7] text-2xl font-bellefair">
                  THE TERMINOLOGY…
                </h2>
                <h2 className="text-white text md:text-4xl text-3xl font-bellefair">
                  SPACEPORT
                </h2>
                <p className="text-center leading-relaxed max-w-md font-barlow text-[#D0D6F9] md:text-lg text-sm md:px-0 px-10">
                  A spaceport or cosmodrome is a site for launching (or
                  receiving) spacecraft, by analogy to the seaport for ships or
                  airport for aircraft. Based in the famous Cape Canaveral, our
                  spaceport is ideally situated to take advantage of the Earth’s
                  rotation for launch.
                </p>
              </div>
            )}

            {activeNumber === "3" && (
              <div className="flex flex-col items-center justify-center mt-10 gap-6">
                <h2 className="text-white text opacity-[0.7] text-2xl font-bellefair">
                  THE TERMINOLOGY…
                </h2>
                <h2 className="text-white text md:text-4xl text-3xl font-bellefair">
                  SPACE CAPSULE
                </h2>
                <p className="text-center leading-relaxed max-w-md font-barlow text-[#D0D6F9] md:text-lg text-sm md:px-0 px-10">
                  A space capsule is an often-crewed spacecraft that uses a
                  blunt-body reentry capsule to reenter the Earth's atmosphere
                  without wings. Our capsule is where you'll spend your time
                  during the flight. It includes a space gym, cinema, and plenty
                  of other activities to keep you entertained.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Desktop */}
        <div className="lg:flex hidden min-h-screen text-white flex flex-col lg:flex-row gap-10 items-center justify-center px-6 lg:px-24 py-12">
          {/* Left Text Section */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-6">
              {["1", "2", "3"].map((num, index) => (
                <button
                  onClick={() => setActiveNumber(num)}
                  key={index}
                  className={`w-16 h-16 cursor-pointer font-bellefair rounded-full flex items-center justify-center ${
                    activeNumber === num
                      ? "bg-white text-[#0B0D17]"
                      : "border border-[#999] text-white"
                  } text-2xl`}
                >
                  {num}
                </button>
              ))}
            </div>
            {activeNumber === "1" && (
              <div className="flex flex-col gap-6">
                <h2 className="text-white text opacity-[0.7] text-2xl font-bellefair">
                  THE TERMINOLOGY…
                </h2>
                <h2 className="text-white text text-3xl font-bellefair">
                  LAUNCH VEHICLE
                </h2>
                <p className="leading-relaxed max-w-md font-barlow text-[#D0D6F9] md:text-lg text-sm">
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </p>
              </div>
            )}

            {activeNumber === "2" && (
              <div className="flex flex-col gap-8">
                <h2 className="text-white text opacity-[0.7] text-2xl font-bellefair">
                  THE TERMINOLOGY…
                </h2>
                <h2 className="text-white text text-3xl font-bellefair">
                  SPACEPORT
                </h2>
                <p className="leading-relaxed max-w-md font-barlow text-[#D0D6F9] md:text-lg text-sm">
                  A spaceport or cosmodrome is a site for launching (or
                  receiving) spacecraft, by analogy to the seaport for ships or
                  airport for aircraft. Based in the famous Cape Canaveral, our
                  spaceport is ideally situated to take advantage of the Earth’s
                  rotation for launch.
                </p>
              </div>
            )}

            {activeNumber === "3" && (
              <div className="flex flex-col gap-8">
                <h2 className="text-white text opacity-[0.7] text-2xl font-bellefair">
                  THE TERMINOLOGY…
                </h2>
                <h2 className="text-white text text-3xl font-bellefair">
                  SPACE CAPSULE
                </h2>
                <p className="leading-relaxed max-w-md font-barlow text-[#D0D6F9] md:text-lg text-sm">
                  A space capsule is an often-crewed spacecraft that uses a
                  blunt-body reentry capsule to reenter the Earth's atmosphere
                  without wings. Our capsule is where you'll spend your time
                  during the flight. It includes a space gym, cinema, and plenty
                  of other activities to keep you entertained.
                </p>
              </div>
            )}
          </div>

          {/* Right */}
          <div>
            {activeNumber === "1" && (
              <img
                className="mt-4 lg:mt-0 w-72 lg:w-[500px] object-cover"
                src="/image-launch-vehicle-portrait.jpg"
                alt="Launch Vehicle Image"
              />
            )}

            {activeNumber === "2" && (
              <img
                className="mt-4 lg:mt-0 w-72 lg:w-[500px] object-cover"
                src="/image-spaceport-portrait.jpg"
                alt="Launch Vehicle Image"
              />
            )}

            {activeNumber === "3" && (
              <img
                className="mt-4 lg:mt-0 w-72 lg:w-[500px] object-cover"
                src="/image-space-capsule-portrait.jpg"
                alt="Launch Vehicle Image"
              />
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Technology;
