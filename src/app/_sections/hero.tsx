import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import { ArrowRight, Book } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function HeroSection() {
  const session = await getSession();

  return (
    <section
      className="place-items-center grid h-screen"
      style={{
        backgroundImage: "url('/hero-bg-3.jpg')",
        backgroundSize: "cover",
        // start image at bottom
        backgroundPositionY: "bottom",
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <p className="mb-[-24px] text-muted-foreground italic">
          Write better. Stay authentic.
        </p>
        <h1 className="font-bold text-4xl">AI Writing Tools for Students</h1>
        <p className="mx-8 md:mx-0 max-w-3xl text-muted-foreground text-lg text-center">
          Sharpen your writing with AI tools designed to help you reword, clarify, and improve, while keeping your voice.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="#features">
              <span>Learn More</span>
              <Book />
            </Link>
          </Button>
          <Button asChild variant="accent">
            <Link
              href={session ? "https://write.jamai.dev" : "/register"}
              target={session ? "_blank" : ""}
            >
              <span>{session ? "Start Writing" : "Get Started"}</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
