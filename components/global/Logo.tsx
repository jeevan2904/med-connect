"use client";

import { FC } from "react";
import Link from "next/link";

export const Logo: FC = () => {
  return (
    <>
      <Link href="/" className="font-bold text-2xl text-white">
        <span className="text-blue-400">Med</span>Connect
      </Link>
    </>
  );
};
