import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative place-items-center grid grid-cols-1 md:grid-cols-2 min-h-screen"
    >
      <div className="top-0 left-0 absolute bg-gradient-to-b from-orange-100 to-background w-full h-[64px]" />
      <div className="flex flex-col gap-6 max-w-2/3">
        <p className="font-semibold text-2xl">Text Editor</p>
        <p className="text-muted-foreground text-lg">
          Get real-time writing help with an AI editor that not only improves
          your text but also explains each change. Learn as you write with
          clear, thoughtful suggestions that help you become a better writer.
        </p>
        <Button asChild className="w-fit">
          <Link href="https://write.jamai.dev" target="_blank">
            <span>Get Started</span>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="w-3/4 lg:w-2/3">
        <Image
          src="/text-editor-home.png"
          alt="Text Editor Site"
          className="border-2 rounded-lg w-full h-full"
          width={0}
          height={0}
          sizes="100vw"
        />
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
      <div className="flex flex-col gap-6 max-w-2/3">
        <p className="font-semibold text-2xl">Flashcards Generator</p>
        <p className="text-muted-foreground text-lg">
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
    </section>
  );
}
