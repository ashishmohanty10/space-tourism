"use client";
import { DataProp } from "@/types/types";
import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface DestinationComponentProp {
  data: DataProp[];
}

const DestinationComponent: React.FC<DestinationComponentProp> = ({ data }) => {
  const [currentTabs, setCurrentTabs] = useState(0);

  return (
    <div>
      <div className="flex justify-end gap-x-20 -w-[50%] pr-12">
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

      <div className="mt-10">
        {data.map((data, idx) => (
          <div
            key={idx}
            className={cn(
              `flex justify-between gap-x-80 w-full ${
                currentTabs === idx ? "" : "hidden"
              }`
            )}
          >
            <div className="w-1/2  flex justify-center items-center">
              <Image
                src={data.images.webp}
                alt="Destination Image"
                className="w-[400px] h-[400px] "
              />
            </div>

            <div className="w-1/2">
              <h2 className="text-8xl mb-10">{data.name}</h2>

              <p className="mb-5 tracking-wider leading-6">
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
        ))}
      </div>
    </div>
  );
};

export default DestinationComponent;
