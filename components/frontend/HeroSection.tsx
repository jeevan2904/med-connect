"use client";

import { FC } from "react";
import Link from "next/link";

import { SearchBar } from "./SearchBar";

export const HeroSection: FC = () => {
  return (
    <>
      <section className="bg-blue-900 min-h-[80vh] flex items-center">
        <div className="container mt-8 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl md:text-3xl text-slate-50">
              Kickstart Startup Website with TailGrids
            </h1>

            <p className="font-normal italic text-sm text-slate-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              eveniet fugiat consequatur magnam ad nulla hic numquam ratione
              quaerat temporibus.
            </p>

            <SearchBar />

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="w-[50%] font-semibold text-sm text-white px-3 py-1.5 text-center bg-blue-400 rounded-full"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className=""></div>
        </div>
      </section>
    </>
  );
};
