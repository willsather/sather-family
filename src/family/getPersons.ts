import { z } from "zod";
import { Family, Person, personSchema } from "@/family";

import core from "./core.json";
import sathers from "./sather.json";
import juves from "./juve.json";

export function getPersons(): Person[] {
  const coreFamily = z.array(personSchema).parse(core);
  const satherFamily = z.array(personSchema).parse(sathers);
  const juveFamily = z.array(personSchema).parse(juves);

  return combinePeople(satherFamily, juveFamily, coreFamily);
}

export function getPersonsByFamily(family: Family): Person[] {
  const coreFamily = z.array(personSchema).parse(core);

  if (family === "Juve") {
    return combinePeople(coreFamily, z.array(personSchema).parse(juves));
  }

  return combinePeople(coreFamily, z.array(personSchema).parse(sathers));
}

export function getSomePersons(ids: string[]): Person[] {
  const people = getPersons();

  return people.filter((person) => ids.includes(person.id));
}

function combinePeople(...people: Person[][]): Person[] {
  // remove any duplicate persons
  return Array.from(
    new Map(people.flat().map((person) => [person.id, person])).values()
  );
}
