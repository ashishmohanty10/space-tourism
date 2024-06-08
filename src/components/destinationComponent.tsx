"use client";
import { DestinationProps } from "@/types/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useState } from "react";

interface DestinationComponentProp {
  data: DestinationProps[];
}

const DestinationComponent: React.FC<DestinationComponentProp> = ({ data }) => {
  const [currentTabs, setCurrentTabs] = useState(0);

  return (
    <div className="px-36 mx-auto">
      <div className="flex xl:justify-end justify-center gap-x-14 xl:-w-[50%]  mb-10">
        {data.map((data, idx) => (
          <div key={idx}>
            <button
              onClick={() => setCurrentTabs(idx)}
              className={cn(
                `h-[5vh] tracking-widest font-normal text-base uppercase text-slate-200 ${
                  currentTabs === idx ? "border-b border-slate-400" : ""
                }`
              )}
            >
              {data.name}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-between">
        {data.map((data, idx) => (
          <div
            key={idx}
            className={cn(`${currentTabs === idx ? "" : "hidden"}`)}
          >
            <div className="xl:flex justify-between gap-x-72 w-full">
              <div className="xl:w-1/2  flex justify-center items-center mb-10 xl:mb-0">
                <Image
                  src={data.images.webp}
                  alt="Destination Image"
                  className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] xl:w-[400px] xl:h-[400px]"
                />
              </div>

              <div className="xl:w-1/2 flex flex-col gap-y-4 ">
                <h2 className="text-8xl mb-8 font-normal uppercase tracking-wider text-center xl:text-start">
                  {data.name}
                </h2>

                <p className="mb-10 tracking-wider leading-6 text-center xl:text-start text-lg font-normal ">
                  {data.description}
                </p>

                <div className="flex justify-between items-center border-t border-slate-400 pt-5">
                  <p className="flex flex-col space-y-2">
                    <span className="text-normal text-slate-200 uppercase font-normal tracking-widest leading-6">
                      Avg. distance
                    </span>
                    <span>{data.distance}</span>
                  </p>

                  <p className="flex flex-col space-y-2">
                    <span className="text-normal text-slate-200  uppercase font-normal tracking-widest leading-6">
                      est. travel time
                    </span>
                    <span>{data.travel}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationComponent;
