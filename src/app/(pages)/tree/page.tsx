import FamilyTree from "@/app/(pages)/tree/FamilyTree";
import { useMemo } from "react";
import { getPersonByFamily } from "@/family";
import { generateFamilyTree } from "@/app/(pages)/tree/generate";

export default function TreePage() {
  const { nodes: satherNodes, edges: satherEdges } = useMemo(() => {
    const persons = getPersonByFamily("Sather");
    return generateFamilyTree(persons);
  }, []);

  const { nodes: juveNodes, edges: juveEdges } = useMemo(() => {
    const persons = getPersonByFamily("Juve");
    return generateFamilyTree(persons);
  }, []);

  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <FamilyTree
        sather={{ nodes: satherNodes, edges: satherEdges }}
        juve={{ nodes: juveNodes, edges: juveEdges }}
      />
    </div>
  );
}
