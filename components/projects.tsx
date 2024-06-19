"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { GoArrowRight } from "react-icons/go";
import {
  useParams,
  usePathname,
  useRouter,
} from "next/navigation";

import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  projects: {
    title: string;
    slug: string;
    year: string;
    type: string;
    live: string;
    technologies: string[];
    description: string;
    image: string;
  }[];
};

const Projects = ({ projects }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const truncateDescription = (
    text: string,
    length: number
  ) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + "...";
  };

  return (
    <section className="mt-8 px-1.5">
      <div
        className={cn(
          "bg-[#F7F7F7] dark:bg-[#2C2C2C] rounded-xl px-6 pb-4",
          pathname !== "/projects" ? "pt-7" : "pt-4"
        )}
      >
        {pathname !== "/projects" && (
          <div className="flex items-center justify-between">
            <Header
              label={
                params.slug ? "Other Projects" : "Projects"
              }
            />
            <Button
              variant="dark"
              size="sm"
              onClick={() => router.push("/projects")}
            >
              View All{" "}
              <GoArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        )}
        <div
          className={cn(
            "mt-6 space-y-2.5",
            pathname !== "/projects" ? "mt6" : "mt-0"
          )}
        >
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="block"
            >
              <div className="bg-white shadow-sm dark:bg-[#373737] px-6 py-4 rounded-xl flex items-center justify-between">
                <div className="space-y-2">
                  <h1 className="text-lg font-medium">
                    {project.title}
                  </h1>
                  <p className="text-sm text-gray-400 dark:text-gray-300">
                    {truncateDescription(
                      project.description,
                      60
                    )}
                  </p>
                </div>
                <ChevronRight className="size-5 dark:text-gray-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
