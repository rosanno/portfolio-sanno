import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="hover:bg-gray-300/10 p-1 rounded-full"
      role="button"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      {theme === "dark" ? (
        <motion.div
          key="moon"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          exit={{ y: -20 }}
        >
          <Sun className="size-6 text-[#909090]" />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          exit={{ y: 20 }}
        >
          <Moon className="size-6 text-[#909090]" />
        </motion.div>
      )}
    </div>
  );
}
