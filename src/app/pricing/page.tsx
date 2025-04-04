import Footer from "@/components/footer";
import Header from "@/components/header";
import { PRODUCTS_ARRAY } from "@/lib/constants";
import ProductCard from "./_components/product-card";
import { getSession } from "@/lib/auth";
import db from "@/db/db";

export default async function PricingPage() {
  const session = await getSession();
  const subscription = await db.subscription.findUnique({
    where: { userId: session?.id ?? "" },
  });
  const isSubscribed =
    (subscription &&
      subscription.isActive &&
      subscription.expiresAt.getTime() > Date.now()) ??
    false;

  return (
    <>
      <Header />
      <main className="h-screen pb-32 pt-48 px-16 flex justify-evenly">
        {PRODUCTS_ARRAY.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            userId={session?.id}
            isSubscribed={isSubscribed}
          />
        ))}
      </main>
      <Footer absolute />
    </>
  );
}
