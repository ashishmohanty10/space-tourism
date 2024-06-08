import Image from "next/image";
import HomeBGDesktop from "../../public/home/background-home-desktop.jpg";
import HomeBGTablet from "../../public/home/background-home-tablet.jpg";
import HomeBGMobile from "../../public/home/background-home-mobile.jpg";
export default function Home() {
  return (
    <div>
      <HomePageBG />

      <div className="w-full xl:flex justify-between items-center h-[80vh] text-white md:mt-44 xl:mt-0">
        <div className="xl:w-1/2 flex flex-col justify-between items-center xl:items-start mb-14 xl:mb-0">
          <h2 className="uppercase text-lg lg:text-sm mb-10">
            So, you want to travel to
          </h2>

          <h1 className="font-medium text-9xl mb-14">SPACE</h1>

          <p className="text-lg text-center lg:text-justify tracking-wider font-normal text-slate-400 leading-normal w-[96%]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </p>
        </div>

        <div className="xl:w-1/2 flex justify-center md:mt-60 xl:mt-0">
          <div className="w-72 h-72 xl:w-56 xl:h-56 bg-white rounded-full flex items-center justify-center text-black">
            <p className="text-2xl md:text-4xl font-bold tracking-widest">
              EXPLORE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Home page backgorund image
export const HomePageBG = () => {
  return (
    <div className="absolute top-0 left-0 w-full -z-20">
      <Image
        src={HomeBGMobile}
        alt="homepage background for tablet"
        className="min-h-screen object-cover md:hidden w-full"
      />

      <Image
        src={HomeBGTablet}
        alt="homepage background for tablet"
        className="hidden md:block min-h-screen object-cover xl:hidden w-full"
      />

      <Image
        src={HomeBGDesktop}
        alt="homepage background"
        className="hidden max-h-screen w-full object-cover xl:block"
      />
    </div>
  );
};
