import AboutMe from "@/components/about-me";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

import { projects } from "@/constants";

export default function Home() {
  return (
    <>
      <AboutMe />
      <Projects projects={projects} />
      <Footer />
    </>
  );
}
