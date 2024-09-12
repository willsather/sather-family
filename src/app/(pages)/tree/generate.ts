import dagre from "dagre";
import { Node, Edge } from "@xyflow/react";
import { Person } from "@/family";

const NODE_WIDTH = 250;
const NODE_HEIGHT = 100;
const SPOUSE_SPACING = NODE_WIDTH + 20; // space between spouses

const createGraphLayout = (nodes: Node[], edges: Edge[]) => {
  const g = new dagre.graphlib.Graph();

  const layoutOptions = {
    rankdir: "TB", // direction for the layout: TB (top-bottom), LR (left-right)
    ranksep: 150, // vertical separation between nodes
    nodesep: 275, // horizontal separation between nodes
  };

  g.setGraph(layoutOptions);

  g.setDefaultEdgeLabel(() => ({}));

  nodes.forEach((node) => {
    g.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
  });

  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  dagre.layout(g);

  nodes.forEach((node) => {
    const nodeWithPosition = g.node(node.id);
    node.position = {
      x: nodeWithPosition.x - NODE_WIDTH / 2,
      y: nodeWithPosition.y - NODE_HEIGHT / 2,
    };
  });
};

export function generateFamilyTree(persons: Person[]): {
  nodes: Node[];
  edges: Edge[];
} {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const personMap = new Map<string, Person>(persons.map((p) => [p.id, p]));

  // Track paired spouses and adjust positions later
  const spousePairs: { husbandId: string; wifeId: string }[] = [];

  persons.forEach((person) => {
    const nodeId = person.id;

    // Skip if this person is already paired as a spouse
    if (
      spousePairs.some(
        (pair) => pair.husbandId === nodeId || pair.wifeId === nodeId
      )
    ) {
      return;
    }

    let spouseId = null;
    if (person.marriages && person.marriages.length > 0) {
      spouseId = person.marriages[0].spouse;
      spousePairs.push({ husbandId: nodeId, wifeId: spouseId });
    }

    // Create the node for the person
    nodes.push({
      id: nodeId,
      type: "custom",
      data: { person },
      position: { x: 0, y: 0 }, // Position will be set by Dagre and adjusted later
      style: { width: NODE_WIDTH, height: NODE_HEIGHT },
    });

    if (spouseId) {
      nodes.push({
        id: spouseId,
        type: "custom",
        data: { person: personMap.get(spouseId) },
        position: { x: 0, y: 0 },
        style: { width: NODE_WIDTH, height: NODE_HEIGHT },
      });
    }

    // Add edges for children
    person?.children?.forEach((childId) => {
      if (personMap.has(childId)) {
        edges.push({
          id: `parent-${nodeId}-${childId}`,
          source: nodeId,
          target: childId,
          type: "smoothstep",
        });

        if (spouseId) {
          edges.push({
            id: `parent-${spouseId}-${childId}`,
            source: spouseId,
            target: childId,
            type: "smoothstep",
          });
        }
      }
    });
  });

  // Apply the Dagre layout to nodes and edges
  createGraphLayout(nodes, edges);

  // Manually adjust positions of spouse pairs to be side by side
  spousePairs.forEach(({ husbandId, wifeId }) => {
    const husbandNode = nodes.find((node) => node.id === husbandId);
    const wifeNode = nodes.find((node) => node.id === wifeId);

    if (husbandNode && wifeNode) {
      // Align on the Y-axis
      wifeNode.position.y = husbandNode.position.y;

      // Position wife next to husband on the X-axis
      wifeNode.position.x = husbandNode.position.x + SPOUSE_SPACING;
    }
  });

  return { nodes, edges };
}
