import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 left-0 w-full md:px-0 px-10 lg:py-6 md:py-0 py-6 lg:pl-4 md:pl-7">
      <div className="relative flex justify-between  items-center">
        <div className="flex items-center justify-center">
          <img
            className="md:w-12 md:h-12 w-10 h-10"
            src="/logo.png"
            alt="Logo"
          />
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="bg-white w-[42%] h-[0.01rem] z-40 absolute left-24 hidden lg:flex"></div>

        <div className="hidden md:flex space-x-8 md:bg-[#191B26] lg:bg-white/10 lg:backdrop-blur-md px-32 py-6 font-barlow-condensed shadow-lg border border-white/20">
          <a
            className="relative space-x-4 text-white hover:text-gray-200 transition-colors text-lg group"
            href="/"
          >
            <span className="font-bold mr-2">00</span> Home
            <span className="absolute left-0 -bottom-6 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>

          <a
            className="relative space-x-4 text-white hover:text-gray-200 transition-colors text-lg group"
            href="/destination"
          >
            <span className="font-bold mr-2">01</span> Destination
            <span className="absolute left-0 -bottom-6 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>

          <a
            className="relative space-x-4 text-white hover:text-gray-200 transition-colors text-lg group"
            href="/crew"
          >
            <span className="font-bold mr-2">02</span> Crew
            <span className="absolute left-0 -bottom-6 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>

          <a
            className="relative space-x-4 text-white hover:text-gray-200 transition-colors text-lg group"
            href="/technology"
          >
            <span className="font-bold mr-2">03</span> Technology
            <span className="absolute left-0 -bottom-6 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-[#191B26] px-6 py-6 space-y-6 font-barlow-condensed border-l border-white/20 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          } md:hidden z-50`}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>

          <div className="mt-12 space-y-6">
            <a
              href="/"
              className="block text-white text-lg hover:text-gray-200 transition-colors"
            >
              <span className="font-bold mr-2">00</span>
              Home
            </a>
            <a
              href="/destination"
              className="block text-white text-lg hover:text-gray-200 transition-colors"
            >
              <span className="font-bold mr-2">01</span>
              Destination
            </a>
            <a
              href="/crew"
              className="block text-white text-lg hover:text-gray-200 transition-colors"
            >
              <span className="font-bold mr-2">02</span>
              Crew
            </a>
            <a
              href="/technology"
              className="block text-white text-lg hover:text-gray-200 transition-colors"
            >
              <span className="font-bold mr-2">03</span>
              Technology
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
