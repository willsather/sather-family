"use client";

import { useState } from "react";
import Link from "next/link";
import { getPersons } from "@/family";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { getCountryEmoji } from "@/utils/getCountryEmoji";
import { getMonth } from "@/utils/getMonth";
import PersonCard from "@/ui/PersonCard";

export default function PeoplePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const people = getPersons();

  const filteredPeople = people.filter((person) =>
    `${person.firstName} ${person.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-2xl font-extrabold text-gray-900 md:text-4xl">
          Family Members
        </h1>

        <div className="mx-auto mb-8 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search people..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <MagnifyingGlassIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPeople.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        {filteredPeople.length === 0 && (
          <p className="mt-8 text-center text-gray-500">
            No people found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
