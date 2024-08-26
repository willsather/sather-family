import FamilyTree from "@/app/(pages)/tree/FamilyTree";
import { getPersons } from "@/family";

export default function TreePage() {
  const persons = getPersons();

  return <FamilyTree persons={persons} />;
}
