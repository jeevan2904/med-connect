"use client";

import { FC } from "react";
import Link from "next/link";

import { megaMenuConfig } from "@/config";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export const MegaMenu: FC = () => {
  return (
    <>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {megaMenuConfig.map(({ title, services }, i: number) => (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger className="text-slate-50 cursor-pointer hover:bg-slate-300 hover:text-slate-800 rounded-md">
                {title}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="bg-slate-100 min-w-md z-50 border border-slate-200 p-2 rounded-lg">
                <ul className="border-0 outline-0 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map(({ name, slug, description }, j: number) => (
                    <li key={slug}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/services/${slug}`}
                          className="hover:bg-slate-200 text-slate-600"
                        >
                          <h3 className="font-semibold text-sm">{name}</h3>

                          <p className="text-slate-500 text-xs line-clamp-2">
                            {description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
