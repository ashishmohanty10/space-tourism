import React from "react";
import TechnologyDesktop from "../../../public/technology/background-technology-desktop.jpg";
import TechnologyTablet from "../../../public/technology/background-technology-tablet.jpg";
import Technologymobile from "../../../public/technology/background-technology-mobile.jpg";
import Image from "next/image";

const Crewpage = () => {
  return (
    <div>
      <TechnologyBG />
    </div>
  );
};

export default Crewpage;

const TechnologyBG = () => {
  return (
    <div className="absolute top-0 right-0 w-full -z-20">
      <Image
        src={Technologymobile}
        alt="homepage background for tablet"
        className="min-h-screen object-cover md:hidden w-full"
      />

      <Image
        src={Technologymobile}
        alt="homepage background for tablet"
        className="hidden min-h-screen object-cover xl:hidden w-full"
      />

      <Image
        src={TechnologyDesktop}
        alt="homepage background"
        className="hidden max-h-screen w-full object-cover xl:block"
      />
    </div>
  );
};
