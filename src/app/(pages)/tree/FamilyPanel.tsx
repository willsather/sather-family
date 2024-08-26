import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/Dropdown";
import { Button } from "@/ui/Button";
import { Panel, useReactFlow } from "@xyflow/react";
import { Family } from "@/family";

interface FamilyPanelProps {
  setFamily: (family: Family) => void;
}

export default function FamilyPanel({ setFamily }: FamilyPanelProps) {
  const { fitView } = useReactFlow();

  const handleClick = async (value: Family) => {
    setFamily(value);
    setTimeout(async () => await fitView({ padding: 0.5, duration: 1000 }));
  };

  return (
    <Panel position="top-right">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="mx-8">
          <Button variant="outline">Select a family</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-8 w-24">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => void handleClick("Sather")}>
              <span>Sather</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => void handleClick("Juve")}>
            <span>Juve</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Panel>
  );
}
