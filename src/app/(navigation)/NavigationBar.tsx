"use client";

import Link from "next/link";
import { useState } from "react";
import { pages } from "@/app/(navigation)/data";
import { DropdownMenuIcon } from "@radix-ui/react-icons";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-8">
        <div className="flex h-16 justify-between md:h-20">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 md:text-4xl"
            >
              Sather Family
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center">
            {pages.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`ml-4 rounded-md bg-gradient-to-r px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out
                            lg:min-w-36 ${item.color} text-white
                            hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-${
                              item.color.split("-")[1]
                            }`}
              >
                <span className="flex items-center justify-center">
                  <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <DropdownMenuIcon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {pages.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md bg-gradient-to-r px-3 py-2 text-base font-medium transition-colors duration-200
                            ease-in-out ${item.color} text-white
                            hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-${
                              item.color.split("-")[1]
                            }`}
              >
                <span className="flex items-center">
                  <item.icon className="mr-2 h-5 w-5" aria-hidden="true" />
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
