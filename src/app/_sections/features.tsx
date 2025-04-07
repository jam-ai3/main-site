import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturesSection() {
  return (
    <section
      id="features"
      className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen relative"
    >
      <div className="absolute top-0 left-0 w-full h-[64px] bg-gradient-to-b from-orange-100 to-background" />
      <div className="flex flex-col gap-6 max-w-2/3">
        <p className="text-2xl font-semibold">Flashcards Generator</p>
        <p className="text-lg text-muted-foreground">
          Quickly create flashcards to help you study. Simply upload your notes,
          syllabus, or enter some information about your course and generate a
          flashcard deck.
        </p>
        <Button asChild className="w-fit">
          <Link href="https://study.jamai.dev" target="_blank">
            <span>Get Started</span>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="w-3/4 lg:w-2/3">
        <Image
          src="/flashcards-home.webp"
          alt="Flashcards Site"
          className="border-2 rounded-lg w-full h-full"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </section>
  );
}
