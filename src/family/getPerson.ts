import { getPersons, Person } from "@/family";

export function getPerson(id: string): Person {
  const people = getPersons();

  const person = people.find((person) => person.id === id);

  if (person == null) {
    throw new Error(`Unable to find person ${id}`);
  }

  return person;
}
