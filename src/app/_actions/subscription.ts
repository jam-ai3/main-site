"use server";

import db from "@/db/db";
import { redirect } from "next/navigation";

export async function startFreeTrial(userId: string) {
  const existing = await db.user.findUnique({ where: { id: userId } });
  if (!existing) return "No user found with this ID";
  if (existing?.freeTrialStart !== null) return "Free trial already used";
  await db.user.update({
    where: { id: userId },
    data: { freeTrialStart: new Date() },
  });
  redirect("/account");
}
