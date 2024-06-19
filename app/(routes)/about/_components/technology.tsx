"use client";

import Header from "@/components/ui/header";
import { techStacks } from "@/constants";
import { IconType } from "react-icons";
import Skill from "./skill";

const Technology = () => {
  return (
    <section className="mt-8 px-1.5">
      <div className="bg-[#F7F7F7] dark:bg-[#2C2C2C] rounded-xl px-6 p-4">
        <Header label="My Technical Skills" />
        <div className="grid grid-cols-4 gap-x-5 gap-y-1 sm:gap-y-1.5 mt-6">
          {techStacks.map((techstack) => (
            <Skill
              key={techstack.name}
              name={techstack.name}
              icon={techstack.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
