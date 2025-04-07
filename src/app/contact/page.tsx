import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { ContactForm } from "./_components/contact-form";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-[1fr_10fr_1fr] md:grid-cols-[1fr_4fr_1fr] items-center h-screen">
        <div />
        <ContactForm
          title="Contact Us"
          description="Let us know what features you'd like to see next or what we can improve on"
        />
        <div />
      </main>
      <Footer absolute />
    </>
  );
}
