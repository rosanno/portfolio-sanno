import { projects } from "@/constants";

import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Header from "@/components/ui/header";

export default function ProjectsPage() {
  return (
    <>
      <section className="px-8 mt-5">
        <Header label="Projects" />
        <div className="space-y-6 mt-12">
          <h1 className="text-3xl font-bold">My Works</h1>
          <p className="leading-8 text-base text-muted-foreground dark:text-gray-300/85">
            Explore my portfolio showcasing seamless
            interfaces and innovative designs. I specialize
            in creating user-centric experiences that
            prioritize functionality and inspire engagement.
          </p>
        </div>
      </section>
      <Projects projects={projects} />
      <Footer />
    </>
  );
}
