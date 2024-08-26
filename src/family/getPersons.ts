import { z } from "zod";
import { Family, Person, personSchema } from "@/family";

import sathers from "./sather.json";
import juves from "./juve.json";

export function getPersons(): Person[] {
  const satherFamily = z.array(personSchema).parse(sathers);
  const juveFamily = z.array(personSchema).parse(juves);

  // remove any duplicate persons
  return Array.from(
    new Map(
      [...satherFamily, ...juveFamily].map((person) => [person.id, person])
    ).values()
  );
}

export function getPersonByFamily(family: Family): Person[] {
  if (family === "Juve") {
    return z.array(personSchema).parse(juves);
  }

  return z.array(personSchema).parse(sathers);
}

export function getSomePersons(ids: string[]): Person[] {
  const people = getPersons();

  return people.filter((person) => ids.includes(person.id));
}
