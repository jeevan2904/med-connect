"use client";

import { FC } from "react";
import Link from "next/link";
import { Pill } from "lucide-react";

import { SearchBar } from "./SearchBar";
import { TransitionalText } from "../global";

const textArr = [
  "Accupuncture",
  "Massage",
  "Chiropractor",
  "Dental",
  "Cosmetic",
  "Dietician",
  "Speech Therapist",
  "Occupational Therapist",
];

export const HeroSection: FC = () => {
  return (
    <>
      <section className="bg-blue-900 min-h-[70vh] flex items-center">
        <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-4">
            <h1 className="flex items-start gap-2 flex-wrap font-bold text-2xl md:text-3xl text-slate-50">
              Book your
              <span className="text-blue-500">
                <TransitionalText textArr={textArr} />
              </span>
              sessions now.
            </h1>

            <p className="font-normal italic text-sm text-slate-100">
              Health shouldn&apos;t be a puzzle, we are cutting through the B.S
              to bring you simple, affordable and transparent healthcare.
            </p>

            <SearchBar />

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="w-[50%] font-semibold text-sm text-white px-3 py-1.5 text-center bg-blue-400 rounded-full"
              >
                Need Doctor Urgently
              </Link>

              <Link
                href="/"
                className="w-[50%] flex items-center justify-center gap-2 font-semibold text-sm text-white px-3 py-1.5 text-center bg-transparent border border-blue-500 rounded-full hover:text-blue-500 hover:border-slate-100"
              >
                <Pill className="w-3.5 h-3.5 text-blue-500" />
                Need a Refill
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex flex-col pr-4 border-r border-slate-400">
                <h2 className="font-semibold text-2xl text-white">12,500 +</h2>

                <span className="text-sm text-slate-200">Active Clients</span>
              </div>

              <div className="flex flex-col pr-4 border-r border-slate-400">
                <h2 className="font-semibold text-2xl text-white">1000 +</h2>

                <span className="text-sm text-slate-200">Active Patients</span>
              </div>

              <div className="flex flex-col">
                <h2 className="font-semibold text-2xl text-white">400 +</h2>

                <span className="text-sm text-slate-200">Active Doctors</span>
              </div>
            </div>
          </div>

          <div className=""></div>
        </div>
      </section>
    </>
  );
};
