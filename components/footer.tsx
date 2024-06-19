"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CirclePlus, Copy } from "lucide-react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { cn } from "@/lib/utils";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
      console.log("false");
    }, 1000);
  }, [isCopied]);

  const handleCopy = () => {
    const text = "rosannomacabuhay@gmail.com";
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <footer
      className={cn(
        "px-1.5",
        pathname !== "/contact" ? "pt-20" : "pt-5"
      )}
    >
      {pathname !== "/contact" && (
        <div className="flex flex-col items-center text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">
              Let&apos;s work together.
            </h1>
            <p className="dark:text-gray-400">
              Transforming Concepts into Seamless User
              Experiences
            </p>
          </div>
          <div
            className="pt-8 space-x-3.5"
            onClick={() => router.push("/contact")}
          >
            <Button variant="dark" size="sm">
              <CirclePlus className="size-3.5 mr-1.5" />
              Hire Me
            </Button>
            <Button
              variant="darkOutline"
              size="sm"
              onClick={handleCopy}
            >
              <Copy className="size-3.5 mr-2" />
              {isCopied ? (
                <motion.span
                  key="copied"
                  initial={{ x: 20 }}
                  animate={{ x: 0 }}
                  exit={{ x: -20 }}
                >
                  Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  exit={{ x: 20 }}
                >
                  Copy Email
                </motion.span>
              )}
            </Button>
          </div>
        </div>
      )}
      <div
        className={cn(
          "mt-16 bg-[#F7F7F7] dark:bg-[#2C2C2C] rounded-xl px-5 py-7",
          pathname !== "/contact" ? "mt-16" : "mt-0"
        )}
      >
        <div className="flex items-center justify-between">
          <Header label="Follow Me" />
          <div className="flex items-center gap-x-1.5">
            <Link
              href="https://github.com/rosanno"
              target="_blank"
              className="hover:bg-gray-300/50 dark:hover:bg-black/15 rounded-full p-1 transition duration-300"
            >
              <IoLogoGithub className="size-10 bg-white border dark:bg-black/30 p-1.5 rounded-full" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rosanno-m-b7bb04206/"
              target="_blank"
              className="hover:bg-gray-300/50 dark:hover:bg-black/15 rounded-full p-1 transition duration-300"
            >
              <IoLogoLinkedin className="size-10 bg-white border dark:bg-black/30 p-1.5 rounded-full" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-normal mt-2 bg-[#F7F7F7] dark:bg-[#2C2C2C] rounded-xl px-5 py-7">
        <p className="dark:text-gray-400 text-sm">
          &copy; 2024 Copyrights - Rosanno Macabuhay
        </p>
      </div>
    </footer>
  );
};

export default Footer;
