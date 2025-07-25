"use client";

import { FC } from "react";
import { SearchIcon } from "lucide-react";

export const SearchBar: FC = () => {
  return (
    <>
      <form className="relative w-full flex items-center gap-2 my-2 p-2 rounded-full border-2 border-blue-400 bg-slate-100">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search By Category, Symptoms etc.,"
          className="flex-1 text-sm border-0 outline-0 pl-7 pe-2 text-slate-600 placeholder:text-slate-500"
        />

        <SearchIcon className="absolute top-3.5 left-3.5 w-4 h-4 text-slate-500" />

        <button
          type="submit"
          className="bg-blue-400 py-1 px-2.5 rounded-full cursor-pointer text-slate-50 text-sm font-medium"
        >
          Search
        </button>
      </form>
    </>
  );
};
