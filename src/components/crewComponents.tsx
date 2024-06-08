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
    <div>
      <div>
        {data.map((data, idx) => (
          <div
            className={cn(
              `grid grid-cols-2 ${currentTabs === idx ? "" : "hidden"}`
            )}
          >
            <div></div>

            <div>
              <Image
                src={data?.images.webp}
                alt="crew image"
                className="w-[500px] h-[500px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start items-center gap-x-5">
        {data.map((_, idx) => (
          <button
            onClick={() => setCurrentTabs(idx)}
            className={cn(
              `w-[10px] h-[10px] rounded-full bg-slate-500 hover:bg-slate-200 ${
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
