import Nav from "../components/Nav.tsx";
const Home = () => {
  return (
    <section className="min-h-screen lg:bg-[url('/background-home-desktop.jpg')] md:bg-[url('/background-home-tablet.jpg')]  bg-[url('/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat">
      <Nav />
      <main className="flex items-center lg:justify-between md:mx-auto mx-auto flex-col space-y-16 md:space-y-8 lg:flex-row mt-[90px] md:px-32 w-[88%]">
        <div className="max-w-lg md:space-y-4 space-y-6 md:text-center text-center lg:text-left leading-relaxed">
          <p className="font-barlow-condensed text-3xl text-[#D0D6F9]">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="font-bellefair md:text-9xl text-6xl text-white">SPACE</p>
          <p className="text-[#D0D6F9] md:text-lg text-base">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="bg-white flex items-center justify-center md:text-3xl text-lg mb-18 md:mt-0 text-[#0B0D17] font-bellefair font-bold rounded-full h-32 w-32 md:w-52 md:h-52">
          EXPLORE
        </div>
      </main>
    </section>
  );
};

export default Home;

