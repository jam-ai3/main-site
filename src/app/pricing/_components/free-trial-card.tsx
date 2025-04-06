"use client";

import { FREE_TRIAL } from "@/lib/constants";
import ProductCard from "./product-card";
import { startFreeTrial } from "@/app/_actions/subscription";

type FreeTrialCardProps = {
  userId: string;
};

export default function FreeTrialCard({ userId }: FreeTrialCardProps) {
  return (
    <ProductCard
      product={FREE_TRIAL}
      userId={userId}
      isSubscribed={false}
      onClick={() => startFreeTrial(userId)}
    />
  );
}
