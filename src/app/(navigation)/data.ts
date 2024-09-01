import {
  ActivityLogIcon,
  CameraIcon,
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
    color: "from-green-500 to-lime-400",
    size: "sm:col-span-3 sm:row-span-2 lg:col-span-5 lg:row-span-2",
  },
  {
    name: "Family Members",
    href: "/people",
    icon: PersonIcon,
    description: "Browse all family members",
    color: "from-yellow-400 to-orange-500",
    size: "sm:col-span-3 sm:row-span-2 lg:col-span-3 lg:row-span-2",
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: CameraIcon,
    description: "Browse all family members",
    color: "from-purple-400 to-purple-600",
    size: "sm:col-span-4 sm:row-span-1 lg:col-span-4 lg:row-span-1",
  },
  {
    name: "About",
    href: "/about",
    icon: InfoCircledIcon,
    description: "Learn about this project",
    color: "from-blue-400 to-blue-600",
    size: "sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    name: "Raw Data",
    href: "/data",
    icon: MixIcon,
    description: "Look at the raw family data",
    color: "from-gray-400 to-gray-600",
    size: "sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    name: "To Do",
    href: "/todo",
    icon: CheckboxIcon,
    description: "What things still need to be done",
    color: "from-rose-400 to-pink-500",
    size: "sm:col-span-4 sm:row-span-1 lg:col-span-12 lg:row-span-1",
  },
];
