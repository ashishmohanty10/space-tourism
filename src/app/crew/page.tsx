import React from "react";
import CrewDesktop from "../../../public/crew/background-crew-desktop.jpg";
import CrewTablet from "../../../public/crew/background-crew-tablet.jpg";
import CrewMobile from "../../../public/crew/background-crew-mobile.jpg";
import Image from "next/image";

const Crewpage = () => {
  return (
    <div>
      <CrewBG />
    </div>
  );
};

export default Crewpage;

const CrewBG = () => {
  return (
    <div className="absolute top-0 right-0 w-full -z-20">
      <Image
        src={CrewMobile}
        alt="homepage background for tablet"
        className="min-h-screen object-cover md:hidden w-full"
      />

      <Image
        src={CrewTablet}
        alt="homepage background for tablet"
        className="hidden min-h-screen object-cover xl:hidden w-full"
      />

      <Image
        src={CrewDesktop}
        alt="homepage background"
        className="hidden max-h-screen w-full object-cover xl:block"
      />
    </div>
  );
};
