import Header from "@/components/ui/header";
import Footer from "@/components/footer";
import ContactForm from "./_components/contact-form";

export default function ContactPage() {
  return (
    <>
      <section className="py-6 px-5">
        <div className="flex items-center justify-between">
          <Header label="Hire Me" />
          <div className="flex items-center gap-x-2 bg-green-500/20 dark:bg-green-500 dark:bg-opacity-20 p-2 md:pr-4 md:pl-2 md:py-1 rounded-full">
            <div className="size-2 bg-green-400 dark:bg-green-300/60 rounded-full" />
            <p className="uppercase text-xs hidden md:flex text-green-600">
              available for work
            </p>
          </div>
        </div>
        <div className="mt-10 space-y-6">
          <h1 className="text-3xl font-bold">
            Web Development Inquiry
          </h1>
          <p className="dark:text-gray-200/60">
            Got an idea and need website help? Reach out now
          </p>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
