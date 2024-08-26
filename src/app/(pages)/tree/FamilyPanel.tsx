"use client";

import { useState } from "react";

import { cn } from "@/utils";
import { Button } from "@/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/ui/Command";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/Popover";
import { Panel, useReactFlow } from "@xyflow/react";
import { ArrowDownIcon, CheckIcon } from "@radix-ui/react-icons";
import { Family, familySchema } from "@/family";

interface FamilyPanelProps {
  family: Family;
  setFamily: (family: Family) => void;
}

const families = ["Sather", "Juve"];

export default function FamilyPanel({ family, setFamily }: FamilyPanelProps) {
  const { fitView } = useReactFlow();
  const [open, setOpen] = useState(false);

  return (
    <Panel position="top-right">
      <Popover open={open} onOpenChange={setOpen}>
        <div className="flex items-center gap-3">
          <p className="text-muted-foreground text-sm text-gray-500">
            Select a family...
          </p>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {family}
              <ArrowDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
        </div>

        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search family..." />

            <CommandList>
              <CommandEmpty>No family found.</CommandEmpty>
              <CommandGroup>
                {families.map((familyName) => (
                  <CommandItem
                    key={familyName}
                    value={familyName}
                    onSelect={(val) => {
                      setFamily(familySchema.parse(val));
                      setTimeout(
                        async () =>
                          await fitView({ padding: 0.5, duration: 1000 })
                      );
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        family === familyName ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {familyName}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Panel>
  );
}
