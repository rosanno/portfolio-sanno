"use client";

import Link from "next/link";
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

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

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
                  "p-1.5 rounded-full text-gray-500 hover:bg-gray-300/20 hover:text-black dark:text-gray-400/70 hover:dark:bg-gray-300/5 hover:dark:text-white transition duration-300",
                  pathname === route.href &&
                    "bg-gray-300/5 dark:text-white"
                )}
              >
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
