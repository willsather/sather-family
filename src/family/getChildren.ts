import { getPerson, getSomePersons, Person } from "@/family";

export function getChildren(parentId: string): Person[] {
  const person = getPerson(parentId);

  if (person.children == null) {
    return [];
  }

  return getSomePersons(person.children);
}
