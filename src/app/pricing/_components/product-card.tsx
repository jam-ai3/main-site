"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Product, UNAUTH_REDIRECT_PATH } from "@/lib/constants";
import { formatPercent, formatPrice } from "@/lib/utils";
import { redirect } from "next/navigation";
import { createCheckoutSession } from "../_actions/stripe";

type ProductCardProps = {
  product: Product;
  userId?: string;
  isSubscribed?: boolean;
  onClick?: () => void;
};

export default function ProductCard({
  product,
  userId,
  isSubscribed,
  onClick,
}: ProductCardProps) {
  async function handlePurchase() {
    if (!userId) redirect(UNAUTH_REDIRECT_PATH);
    const url = await createCheckoutSession(product, userId);
    if (!url) return;
    redirect(url);
  }

  return (
    <Card key={product.id} className="max-w-1/3 relative">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">
          {formatPrice(product.priceInPennies)}
        </CardTitle>
        {product.discount && (
          <p className="text-muted-foreground">
            {formatPercent(product.discount)} off
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className="w-full"
          onClick={onClick || handlePurchase}
          disabled={isSubscribed}
          variant="accent"
        >
          <span>Buy Now</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
