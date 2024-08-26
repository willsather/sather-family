import { getPersons } from "@/family";

export default function TodoPage() {
  const people = getPersons();

  const peopleWhoNeedImages = people
    .filter((person) => person.image == null)
    .map((person) => person.id);

  const peopleWhoNeedBirthMonths = people
    .filter((person) => person.birth.month <= 0)
    .map((person) => person.id);

  const peopleWhoNeedBirthYears = people
    .filter((person) => person.birth.year <= 0)
    .map((person) => person.id);

  const peopleWhoNeedDeathMonths = people
    .filter((person) => person.death != null && person.death.month <= 0)
    .map((person) => person.id);

  const peopleWhoNeedDeathYears = people
    .filter((person) => person.death != null && person.death.year <= 0)
    .map((person) => person.id);

  return (
    <div className="flex gap-4 rounded-lg bg-gray-100 p-4 shadow-inner">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">
            Missing Images
          </h2>
        </div>
        <pre className="overflow-x-auto rounded border border-gray-200 bg-white p-4">
          <code className="font-mono text-sm text-gray-800">
            {JSON.stringify(peopleWhoNeedImages, null, 2)}
          </code>
        </pre>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">
            Missing Birth Months
          </h2>
        </div>
        <pre className="overflow-x-auto rounded border border-gray-200 bg-white p-4">
          <code className="font-mono text-sm text-gray-800">
            {JSON.stringify(peopleWhoNeedBirthMonths, null, 2)}
          </code>
        </pre>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">
            Missing Birth Months
          </h2>
        </div>
        <pre className="overflow-x-auto rounded border border-gray-200 bg-white p-4">
          <code className="font-mono text-sm text-gray-800">
            {JSON.stringify(peopleWhoNeedBirthYears, null, 2)}
          </code>
        </pre>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">
            Missing Death Months
          </h2>
        </div>
        <pre className="overflow-x-auto rounded border border-gray-200 bg-white p-4">
          <code className="font-mono text-sm text-gray-800">
            {JSON.stringify(peopleWhoNeedDeathMonths, null, 2)}
          </code>
        </pre>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">
            Missing Death Years
          </h2>
        </div>
        <pre className="overflow-x-auto rounded border border-gray-200 bg-white p-4">
          <code className="font-mono text-sm text-gray-800">
            {JSON.stringify(peopleWhoNeedDeathYears, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}
