import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
        <p className="font-semibold text-2xl">Document Editor</p>
        <p className="text-muted-foreground text-lg">
          Get real-time writing support with an AI editor that goes beyond surface-level fixes.
          jamAI not only improves your text, it explains each suggestion, helping you understand the why behind every change. With thoughtful, easy-to-follow feedback, you’ll grow as a writer with every use.
        </p>
        <Button asChild className="w-fit">
          <Link href="https://write.jamai.dev" target="_blank">
            <span>Get Started</span>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="w-3/4 lg:w-2/3 ">
        <Card className="w-full shadow-lg border border-gray-200 mt-8">
          <CardContent className="p-0">
            <video autoPlay loop muted playsInline className="w-full h-auto rounded-lg">
              <source src="/Grammar2.mp4" type="video/mp4"></source>
            </video>

          </CardContent>
        </Card>
        {/* <Image
          src="/text-editor-home.png"
          alt="Text Editor Site"
          className="border-2 rounded-lg w-full h-full"
          width={0}
          height={0}
          sizes="100vw"
        /> */}
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
