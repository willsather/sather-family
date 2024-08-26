import { getCountryEmoji } from "@/utils/getCountryEmoji";
import { getChildren, getPerson, getSpouses } from "@/family";
import { getMonth } from "@/utils/getMonth";
import { PersonIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/cn";
import PersonCard from "@/ui/PersonCard";

export default function PersonPage({ params }: { params?: { id?: string } }) {
  if (params?.id == null) {
    throw new Error("Person not found");
  }

  const person = getPerson(params?.id);
  const spouses = getSpouses(person.id);
  const children = getChildren(person.id);

  return (
    <div className="my-8">
      <div className="p-6">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          {person.firstName} {person.lastName}
        </h2>

        <p
          className={cn("mb-1 flex items-center gap-2 text-gray-600", {
            "text-blue-400": person.sex === "Male",
            "text-pink-400": person.sex === "Female",
          })}
        >
          <PersonIcon />
          {person.sex}
        </p>

        <p className="mb-1 text-gray-600">
          <b>Born:</b> {getMonth(person.birth.month)} {person.birth.year}{" "}
          {getCountryEmoji(person.birth.country)}
        </p>

        {person.death && (
          <p className="text-gray-600">
            <b>Died:</b> {getMonth(person.death.month)} {person.death.year}{" "}
            {getCountryEmoji(person.death.country)}
          </p>
        )}

        {spouses.length > 0 && (
          <>
            <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
              Spouse(s)
            </h3>
            <div className="flex gap-2">
              {spouses.map((spouse) => (
                <PersonCard key={spouse.id} person={spouse} />
              ))}
            </div>
          </>
        )}

        {children.length > 0 && (
          <>
            <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
              Children
            </h3>
            <div className="flex gap-2 overflow-auto py-4">
              {children.map((child) => (
                <PersonCard key={child.id} person={child} />
              ))}
            </div>
          </>
        )}

        <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-900">
          Raw Data
        </h3>
        <pre className="overflow-x-auto rounded border border-gray-200 bg-white p-4">
          <code className="font-mono text-sm text-gray-800">
            {JSON.stringify(person, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}
