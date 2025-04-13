"use server";

import Header from "@/components/header/header";
import FeedbackForm from "./_components/feedback-form";
import db from "@/db/db";
import ReviewList from "./_components/review-list";
import { getSession } from "@/lib/auth";
import Footer from "@/components/footer";

export default async function FeedbackPage() {
  const session = await getSession();
  const [reviews, userReview] = await Promise.all([
    db.review.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        rating: true,
        message: true,
        createdAt: true,
        user: {
          select: {
            email: true,
          },
        },
      },
    }),
    db.review.findUnique({
      where: {
        userId: session?.id ?? "",
      },
    }),
  ]);

  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 px-6 pt-32 min-h-screen">
        {session && !userReview && <FeedbackForm userId={session.id} />}
        <ReviewList reviews={reviews} />
      </main>
      <Footer />
    </>
  );
}
