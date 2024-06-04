"use client";

import React from "react";
import Logo from "../../public/shared/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center h-32 relative px-20 ">
      <Link href={"/"}>
        <Image src={Logo} alt="Logo of the brand" sizes="40" />
      </Link>

      <div className="h-0.5 bg-slate-500 w-[98vh] left-48 absolute z-10"></div>

      <nav className="flex items-center  gap-x-10 py-4 px-20 backdrop-blur-lg absolute  right-0 h-[10vh]">
        {navLink.map((data, idx) => (
          <Link
            href={data.href}
            className={cn(
              `flex space-x-2 items-center text-slate-200 uppercase tracking-widest text-sm h-[10vh] pb-4 ${
                pathname === data.href ? "border-b border-slate-400" : ""
              }`
            )}
            key={idx}
          >
            <span className="">{data.number}</span>
            <span className="text-normal">{data.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

const navLink = [
  {
    number: "00",
    label: "Home",
    href: "/",
  },
  {
    number: "01",
    label: "Destination",
    href: "/destination",
  },
  {
    number: "02",
    label: "Crew",
    href: "/crew",
  },
  {
    number: "03",
    label: "Technology",
    href: "/technology",
  },
];
