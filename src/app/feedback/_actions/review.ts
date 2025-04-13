"use server";

import db from "@/db/db";
import { Rating } from "../_components/feedback-form";
import { redirect } from "next/navigation";

type CreateReviewResponse = {
  rating?: string;
  error?: string;
};

export async function createReview(
  userId: string,
  rating: Rating | null,
  message: string
): Promise<CreateReviewResponse> {
  if (!rating) return { rating: "Rating is required" };
  await db.review.create({
    data: {
      rating,
      message,
      userId,
    },
  });
  redirect("/feedback");
}
