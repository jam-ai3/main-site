import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import { ArrowRight, Book } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function HeroSection() {
  const session = await getSession();

  return (
    <section
      className="h-screen grid place-items-center"
      style={{
        backgroundImage: "url('/hero-bg-3.jpg')",
        backgroundSize: "cover",
        // start image at bottom
        backgroundPositionY: "bottom",
      }}
    >
      <div className="flex flex-col gap-6 items-center">
        <p className="text-muted-foreground italic mb-[-24px]">
          Write, study, organize
        </p>
        <h1 className="text-4xl font-bold">AI Tools for Students</h1>
        <p className="text-muted-foreground text-lg max-w-3xl text-center mx-8 md:mx-0">
          Prepare for your classes with a suite of AI-powered tools designed to
          help you take on your courses with ease
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="#features">
              <span>Learn More</span>
              <Book />
            </Link>
          </Button>
          <Button asChild variant="accent">
            <Link href={session ? "/pricing" : "/register"}>
              <span>Get Started</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
