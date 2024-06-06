import Image from "next/image";
import HomeBGDesktop from "../../public/home/background-home-desktop.jpg";
import HomeBGTablet from "../../public/home/background-home-tablet.jpg";
export default function Home() {
  return (
    <div className="">
      <HomePageBG />

      <div className="w-full lg:flex justify-between items-center h-[80vh] text-white">
        <div className="w-1/2">
          <h2 className="uppercase text-sm mb-5">So, you want to travel to </h2>

          <h1 className="text-9xl mb-5">SPACE</h1>

          <p className="text-balance tracking-wider font-normal text-slate-400 leading-normal">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </p>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center text-black">
            <p className="text-4xl font-bold tracking-widest">EXPLORE</p>
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
        src={HomeBGDesktop}
        alt="homepage background"
        className="hidden max-h-screen w-full object-cover lg:block"
      />

      <Image
        src={HomeBGTablet}
        alt="homepage background for tablet"
        className="min-h-screen object-fill lg:hidden w-full"
      />
    </div>
  );
};
