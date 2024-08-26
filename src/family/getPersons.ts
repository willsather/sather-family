import { z } from "zod";
import { Person, personSchema } from "@/family";

import family from "./family.json";

export function getPersons(): Person[] {
  return z.array(personSchema).parse(family);
}

export function getSomePersons(ids: string[]): Person[] {
  const people = z.array(personSchema).parse(family);

  return people.filter((person) => ids.includes(person.id));
}
