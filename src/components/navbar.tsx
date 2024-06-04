"use client";

import React from "react";
import Logo from "../../public/shared/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center h-24 relative px-16">
      <div>
        <Image src={Logo} alt="Logo of the brand" sizes="40" />
      </div>

      <div className="h-0.5 bg-slate-200 w-[98vh] absolute z-10"></div>

      <nav className="flex items-center gap-x-5 py-4 px-6 backdrop-blur-sm  absolute  right-0 h-[10vh]">
        {navLink.map((data, idx) => (
          <Link
            href={data.href}
            className={`flex space-x-1 items-center text-slate-200 uppercase tracking-widest text-sm ${
              pathname === data.href ? "border-b border-slate-200 " : ""
            }`}
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
