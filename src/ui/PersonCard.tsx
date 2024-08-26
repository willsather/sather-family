import { Person } from "@/family";
import { getCountryEmoji, getMonth } from "@/utils";
import Link from "next/link";

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <Link href={`/people/${person.id}`}>
      <div className="w-full min-w-64 overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
        <div className="p-6">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            {person.firstName} {person.lastName}
          </h2>
          <p className="mb-1 text-gray-600">
            Born: {getMonth(person.birth.month)} {person.birth.year}{" "}
            {getCountryEmoji(person.birth.country)}
          </p>
          {person.death && (
            <p className="text-gray-600">
              Died: {getMonth(person.death.month)} {person.death.year}{" "}
              {getCountryEmoji(person.death.country)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
