"use client";

import { CrewMemberProp } from "@/types/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useState } from "react";

interface CrewComponentProp {
  data: CrewMemberProp[];
}

const CrewComponent: React.FC<CrewComponentProp> = ({ data }) => {
  const [currentTabs, setCurrentTabs] = useState(0);
  return (
    <div className="">
      <div className="flex justify-between items-center relative">
        {data.map((data, idx) => (
          <div
            className={cn(
              `grid grid-cols-2 ${currentTabs === idx ? "" : "hidden"}`
            )}
          >
            <div>
              <h2 className="text-2xl text-slate-600 uppercase font-medium tracking-wide mb-8">
                flight engineer
              </h2>

              <p className="text-5xl tracking-wider text-slate-200 mb-14">
                {data?.name}
              </p>

              <p className="text-lg font-normal tracking-wide leading-6">
                {data?.bio}
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={data?.images.webp}
                alt="crew image"
                className="object-contain  h-[600px]"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start items-center gap-x-5 absolute bottom-40    ">
        {data.map((_, idx) => (
          <button
            onClick={() => setCurrentTabs(idx)}
            className={cn(
              `w-[20px] h-[20px] rounded-full bg-slate-500 hover:bg-slate-200 ${
                currentTabs === idx ? "bg-slate-200" : ""
              }`
            )}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CrewComponent;
