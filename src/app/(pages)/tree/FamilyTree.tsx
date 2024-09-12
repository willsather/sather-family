"use client";

import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Node, Edge } from "@xyflow/react";
import { useState } from "react";
import { Family } from "@/family";
import FamilyPanel from "@/app/(pages)/tree/FamilyPanel";
import CustomNode from "@/app/(pages)/tree/CustomNode";

interface FamilyTreeProps {
  all: {
    nodes: Node[];
    edges: Edge[];
  };
  sather: {
    nodes: Node[];
    edges: Edge[];
  };
  juve: {
    nodes: Node[];
    edges: Edge[];
  };
}

const nodeTypes = { custom: CustomNode };

export default function FamilyTree(props: FamilyTreeProps) {
  const [family, setFamily] = useState<Family | "All">("All");

  const getNodes = () => {
    if (family === "Sather") {
      return props.sather.nodes;
    }

    if (family === "Juve") {
      return props.juve.nodes;
    }

    return props.all.nodes;
  };

  const getEdges = () => {
    if (family === "Sather") {
      return props.sather.edges;
    }

    if (family === "Juve") {
      return props.juve.edges;
    }

    return props.all.edges;
  };

  return (
    <ReactFlow
      nodes={getNodes()}
      edges={getEdges()}
      nodeTypes={nodeTypes}
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
