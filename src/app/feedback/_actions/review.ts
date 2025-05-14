"use server";

import db from "@/db/db";
import { Rating } from "../_components/feedback-form";
import { redirect } from "next/navigation";
import { sendFeedbackEmail } from "@/email/feedback-auto-reply";

type CreateReviewResponse = {
  rating?: string;
  error?: string;
};

export async function createReview(
  userId: string,
  rating: Rating | null,
  message: string,
  email: string
): Promise<CreateReviewResponse> {
  if (!rating) return { rating: "Rating is required" };
  await db.review.create({
    data: {
      rating,
      message,
      userId,
    },
  });
  sendFeedbackEmail(email)
  redirect("/feedback");
}
