"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
  technologies: string[] | undefined;
  live: string | undefined;
};

const ProjectDetails = ({
  title,
  description,
  image,
  technologies,
  live,
}: Props) => {
  return (
    <section className="px-6 py-4">
      <div className="space-y-5 mt-10">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-base leading-7 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="my-6">
        {live !== "" && (
          <Link
            href={live as string}
            target="_blank"
            className="bg-[#383838] text-white font-semibold dark:text-secondary-foreground hover:bg-[#383838]/80 rounded-md text-sm py-2.5 px-3 flex items-center w-fit"
          >
            Visit Website
            <FaArrowRight className="size-3.5 ml-2" />
          </Link>
        )}
      </div>
      <div className="bg-[#DCDDE1] dark:bg-[#E6E6E6] pt-10 pl-10 pr-3 mt-10">
        <div className="h-56 md:h-96 overflow-hidden rounded-tl-md rounded-tr-md shadow-sm">
          <Image
            src={image as string}
            alt={title as string}
            height={500}
            width={500}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies?.map((tecnology, index) => (
          <div
            key={index}
            className="bg-gray-400/20 rounded-full px-2 py-0.5 text-sm cursor-default"
          >
            {tecnology}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
