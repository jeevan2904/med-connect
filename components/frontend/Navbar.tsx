"use client";

import { FC } from "react";
import Link from "next/link";

import { Logo } from "../global";

export const Navbar: FC = () => {
  return (
    <>
      <header className="h-14 lg:h-[60px] bg-blue-900 border-b border-blue-300/20">
        <div className="container h-full flex items-center justify-between">
          <Logo />

          <nav className=""></nav>

          <Link
            href="/login"
            className="text-white text-sm font-medium bg-blue-500 py-1 px-2.5 rounded-sm hover:text-blue-900"
          >
            Login &rarr;
          </Link>
        </div>
      </header>
    </>
  );
};
