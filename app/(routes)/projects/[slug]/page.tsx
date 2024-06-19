import { projects } from "@/constants";

import Description from "./_components/description";
import ProjectDetails from "./_components/project-details";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

export default function ProjectDescriptionPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find(
    (project) => project.slug === params.slug
  );

  const filteredProjects = projects.filter(
    (project) => project.slug !== params.slug
  );

  return (
    <>
      <Description
        year={project?.year}
        type={project?.type}
      />
      <ProjectDetails
        title={project?.title}
        description={project?.description}
        image={project?.image}
        technologies={project?.technologies}
        live={project?.live}
      />
      <Projects projects={filteredProjects} />
      <Footer />
    </>
  );
}
