import { StaticImageData } from "next/image";

export type DataProp = {
  name: string;
  images: {
    png: StaticImageData;
    webp: StaticImageData;
  };
  description: string;
  distance: string;
  travel: string;
};
