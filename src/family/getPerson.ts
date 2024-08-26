import { z } from "zod";
import { Person, personSchema } from "@/family";

import family from "./family.json";

export function getPerson(id: string): Person {
  const people = z.array(personSchema).parse(family);

  const person = people.find((person) => person.id === id);

  if (person == null) {
    throw new Error(`Unable to find person ${id}`);
  }

  return person;
}
