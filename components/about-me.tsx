"use client";

import { useEffect, useState } from "react";
import { CirclePlus, Copy } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";

function AboutMe() {
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
    <section className="py-6 px-5">
      <div className="flex items-center justify-between">
        <Header label="Fullstack Web Developer" />
        <div className="flex items-center gap-x-2 bg-green-500/20 dark:bg-green-500 dark:bg-opacity-20 p-2 md:pr-4 md:pl-2 md:py-1 rounded-full">
          <div className="size-2 bg-green-400 dark:bg-green-300/60 rounded-full" />
          <p className="uppercase text-xs hidden md:flex text-green-600">
            available for work
          </p>
        </div>
      </div>
      <div className="mt-12">
        <div className="space-y-3">
          <h1 className="text-4xl font-medium">
            I&apos;m Rosanno
          </h1>
          <p className="text-muted-foreground dark:text-gray-300/85 text-base">
            A Web Developer based in Philippines.
          </p>
          <div className="pt-4 space-x-3.5">
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
      </div>
    </section>
  );
}

export default AboutMe;
