import React, { useMemo } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { generateFamilyTree } from "./generate";
import { Person } from "@/family";

interface FamilyTreeProps {
  persons: Person[];
}

export default function FamilyTree({ persons }: FamilyTreeProps) {
  const { nodes, edges } = useMemo(
    () => generateFamilyTree(persons),
    [persons]
  );

  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.5 }}
        panOnDrag
        zoomOnScroll
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
