"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { RiHome3Line } from "react-icons/ri";
import { CirclePlus } from "lucide-react";
import {
  LuUserCircle2,
  LuFolderClosed,
} from "react-icons/lu";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/mode-toggle";
import { useState } from "react";

const routes = [
  {
    href: "/",
    icon: <RiHome3Line />,
    label: "Home",
  },
  {
    href: "/about",
    icon: <LuUserCircle2 />,
    label: "About",
  },
  {
    href: "/projects",
    icon: <LuFolderClosed />,
    label: "Projects",
  },
];

type HoverState = {
  [key: string]: boolean;
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [hovered, setHovered] = useState<HoverState>({});

  const handleMouseEnter = (href: string) => {
    setHovered((prev) => ({ ...prev, [href]: true }));
  };

  const handleMouseLeave = (href: string) => {
    setHovered((prev) => ({ ...prev, [href]: false }));
  };

  return (
    <div className="fixed inset-x-2">
      <nav className="dark:bg-[#212121]/60 bg-white shadow-sm dark:shadow-none backdrop-blur-md border border-gray-300/5 rounded-[11px] dark:text-white w-full sm:max-w-2xl md:max-w-xl mx-auto py-3.5 px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "p-1.5 rounded-full flex flex-col gap-x-1 items-center text-gray-500 hover:bg-gray-300/20 hover:text-black dark:text-gray-400/70 hover:dark:bg-gray-300/5 hover:dark:text-white transition duration-300",
                  pathname === route.href &&
                    "bg-gray-300/5 dark:text-white"
                )}
                onMouseEnter={() =>
                  handleMouseEnter(route.href)
                }
                onMouseLeave={() =>
                  handleMouseLeave(route.href)
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hovered[route.href] ? 1 : 0,
                    y: hovered[route.href] ? -20 : 5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="-translate-y-7 absolute text-xs text-white bg-black/60 dark:bg-gray-500/40 px-2 rounded-full"
                >
                  {route.label}
                </motion.div>
                <div className="text-2xl">{route.icon}</div>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-x-4">
            <ModeToggle />
            <Button
              variant="dark"
              size="sm"
              onClick={() => router.push("/contact")}
            >
              <CirclePlus className="size-3.5 mr-1" />
              Hire Me
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
