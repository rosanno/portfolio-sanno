import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  name: string;
  icon: IconType;
};

const Skill = ({ name, icon: Icon }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="space-y-0.5">
      <div className="flex justify-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
          className="text-xs font-semibold capitalize bg-black/40 text-white dark:bg-gray-300/10 w-fit rounded-full px-1.5 py-0.5"
        >
          {name}
        </motion.span>
      </div>
      <div
        className="bg-white shadow-sm dark:bg-[#373737] flex items-center justify-center py-6 sm:py-8 rounded-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icon className="size-8" />
      </div>
    </div>
  );
};

export default Skill;
