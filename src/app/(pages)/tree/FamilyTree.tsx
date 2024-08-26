"use client";

import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Node, Edge } from "@xyflow/react";
import { useState } from "react";
import { Family } from "@/family";
import FamilyPanel from "@/app/(pages)/tree/FamilyPanel";

interface FamilyTreeProps {
  sather: {
    nodes: Node[];
    edges: Edge[];
  };
  juve: {
    nodes: Node[];
    edges: Edge[];
  };
}

export default function FamilyTree(props: FamilyTreeProps) {
  const [family, setFamily] = useState<Family>("Sather");

  return (
    <ReactFlow
      nodes={family === "Sather" ? props.sather.nodes : props.juve.nodes}
      edges={family === "Sather" ? props.sather.edges : props.juve.edges}
      fitView
      fitViewOptions={{ padding: 0.5 }}
      panOnDrag
      zoomOnScroll
    >
      <FamilyPanel family={family} setFamily={setFamily} />
      <Background />
      <Controls />
    </ReactFlow>
  );
}
