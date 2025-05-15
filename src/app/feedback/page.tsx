"use server";

import Header from "@/components/header/header";
import FeedbackForm from "./_components/feedback-form";
import db from "@/db/db";
import { getSession } from "@/lib/auth";
import Footer from "@/components/footer";

export default async function FeedbackPage() {
  const session = await getSession();
  const review = await db.review.findUnique({
    where: {
      userId: session?.id ?? "",
    },
  });
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 px-6 pt-32 min-h-screen">
        {session && <FeedbackForm userId={session.id} disabled={!!review} email={session.email}/>}
      </main>
      <Footer />
    </>
  );
}
