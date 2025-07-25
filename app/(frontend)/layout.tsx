"use client";

import { FC, ReactNode } from "react";

import { MegaMenu, Navbar } from "@/components/frontend";

const FrontendLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="bg-blue-500 py-1">
        <div className="container">
          <MegaMenu />
        </div>
      </div>

      <section>{children}</section>
    </>
  );
};

export default FrontendLayout;
