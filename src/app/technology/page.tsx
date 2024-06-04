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
        src={TechnologyDesktop}
        alt="destination bg"
        className="max-h-screen w-full object-cover"
      />
    </div>
  );
};
