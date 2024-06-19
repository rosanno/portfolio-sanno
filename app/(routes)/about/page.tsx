import Footer from "@/components/footer";
import Header from "@/components/ui/header";
import AboutMe from "./_components/about-me";
import Technology from "./_components/technology";

export default function AboutPage() {
  return (
    <>
      <section className="py-6 px-6">
        <Header label="About" />
      </section>
      <AboutMe />
      <Technology />
      <Footer />
    </>
  );
}
