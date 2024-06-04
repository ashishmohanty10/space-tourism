import React from "react";
import DestinationDesktop from "../../../public/destination/background-destination-desktop.jpg";
import DestinationTablet from "../../../public/destination/background-destination-tablet.jpg";
import DestinationMobile from "../../../public/destination/background-destination-mobile.jpg";
import Image from "next/image";

const DestinationPage = () => {
  return (
    <div>
      <DestinationBG />
    </div>
  );
};

export default DestinationPage;

const DestinationBG = () => {
  return (
    <div className="absolute top-0 right-0 w-full -z-20">
      <Image
        src={DestinationDesktop}
        alt="destination bg"
        className="max-h-screen w-full object-cover"
      />
    </div>
  );
};
