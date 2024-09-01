import {
  ActivityLogIcon,
  CheckboxIcon,
  InfoCircledIcon,
  MixIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export const pages = [
  {
    name: "Family Tree",
    href: "/tree",
    icon: ActivityLogIcon,
    description: "View the family tree",
    color: "from-green-400 to-green-600",
    size: "md:col-span-5 md:row-span-2",
  },
  {
    name: "Family Members",
    href: "/people",
    icon: PersonIcon,
    description: "Browse all family members",
    color: "from-yellow-400 to-yellow-600",
    size: "md:col-span-3 md:row-span-1",
  },
  {
    name: "Raw Data",
    href: "/data",
    icon: MixIcon,
    description: "Look at the raw family data",
    color: "from-purple-400 to-purple-600",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    name: "About",
    href: "/about",
    icon: InfoCircledIcon,
    description: "Learn about this project",
    color: "from-blue-400 to-blue-600",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    name: "To Do",
    href: "/todo",
    icon: CheckboxIcon,
    description: "What things still need to be done",
    color: "from-yellow-400 to-orange-600",
    size: "md:col-span-4 md:row-span-1",
  },
];
