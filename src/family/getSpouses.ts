import { getPerson, getSomePersons, Person } from "@/family";

export function getSpouses(id: string): Person[] {
  const person = getPerson(id);

  if (person.marriages == null) {
    return [];
  }

  const spouseIds = person.marriages.map(({ spouse }) => spouse);

  return getSomePersons(spouseIds);
}
