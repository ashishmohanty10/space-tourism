"use client";

import { TechnologyProp } from "@/types/types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useState } from "react";

interface TechnologyComponentProp {
  data: TechnologyProp[];
}

const TechnologuComponent: React.FC<TechnologyComponentProp> = ({ data }) => {
  const [currentTabs, setCurrentTabs] = useState(0);

  return (
    <div>
      <div className="flex justify-between items-center gap-x-10">
        <div className="flex flex-col gap-y-10">
          {data.map((_, idx) => (
            <button
              onClick={() => setCurrentTabs(idx)}
              className={cn(
                `w-[80px] h-[80px] rounded-full bg-black text-white border tect-2xl hover:text-slate-200 flex items-center justify-center ${
                  currentTabs === idx ? "bg-white text-black" : ""
                }`
              )}
            >
              {idx}
            </button>
          ))}
        </div>

        <div>
          {data.map((data, idx) => (
            <div
              key={idx}
              className={cn(
                `flex gap-x-10 ${currentTabs === idx ? "" : "hidden"}`
              )}
            >
              <div>
                <h2>{data.name}</h2>
                <p className="w-[50%]">{data?.description}</p>
              </div>
              <div>
                <Image src={data?.images.portrait} alt="technolgy image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologuComponent;