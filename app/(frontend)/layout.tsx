"use client";

import { FC, ReactNode } from "react";

import { Navbar } from "@/components/frontend";

const FrontendLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <section>{children}</section>
    </>
  );
};

export default FrontendLayout;
