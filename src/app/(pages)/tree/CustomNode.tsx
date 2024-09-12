import { Handle, Position, Node, NodeProps } from "@xyflow/react";
import { type Person } from "@/family";
import { getMonth } from "@/utils";

export default function CustomNode({
  data,
}: NodeProps<Node<{ person: Person }, "object">>) {
  const { person } = data;

  return (
    <div className="flex h-full w-full cursor-pointer items-center justify-center rounded border border-black bg-gray-100">
      <Handle type="target" position={Position.Top} />

      <a href={`/people/${person.id}`}>
        <div className="flex-col items-center text-center">
          <p className="m-0 font-bold">
            {person.firstName} {person.lastName}
          </p>
          <p className="m-0">
            b. {getMonth(person.birth.month)} {person.birth.year}
          </p>{" "}
          {person.death != null && (
            <p className="m-0">
              d. {getMonth(person.death.month)} {person.death.year}
            </p>
          )}
        </div>
      </a>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
