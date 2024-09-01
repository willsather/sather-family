import FamilyTree from "@/app/(pages)/tree/FamilyTree";
import { useMemo } from "react";
import { getPersonsByFamily, getPersons } from "@/family";
import { generateFamilyTree } from "@/app/(pages)/tree/generate";

export default function TreePage() {
  const { nodes, edges } = useMemo(() => {
    const persons = getPersons();
    return generateFamilyTree(persons);
  }, []);

  const { nodes: satherNodes, edges: satherEdges } = useMemo(() => {
    const persons = getPersonsByFamily("Sather");
    return generateFamilyTree(persons);
  }, []);

  const { nodes: juveNodes, edges: juveEdges } = useMemo(() => {
    const persons = getPersonsByFamily("Juve");
    return generateFamilyTree(persons);
  }, []);

  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <FamilyTree
        all={{ nodes, edges }}
        sather={{ nodes: satherNodes, edges: satherEdges }}
        juve={{ nodes: juveNodes, edges: juveEdges }}
      />
    </div>
  );
}
