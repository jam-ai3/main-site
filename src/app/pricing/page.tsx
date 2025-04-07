import Header from "@/components/header/header";
import { PRODUCTS_ARRAY } from "@/lib/constants";
import ProductCard from "./_components/product-card";
import { getSession } from "@/lib/auth";
import db from "@/db/db";
import FreeTrialCard from "./_components/free-trial-card";
import PricingFooter from "./_components/footer";

export default async function PricingPage() {
  const session = await getSession();
  const [user, subscription] = await Promise.all([
    db.user.findUnique({ where: { id: session?.id ?? "" } }),
    db.subscription.findUnique({ where: { userId: session?.id ?? "" } }),
  ]);
  const isSubscribed =
    (subscription &&
      subscription.isActive &&
      subscription.expiresAt.getTime() > Date.now()) ??
    false;

  return (
    <>
      <Header />
      <main className="min-h-screen pb-32 pt-48 px-16 flex flex-col md:flex-row md:justify-evenly gap-8">
        {!subscription && user && user.freeTrialStart === null && (
          <FreeTrialCard userId={user.id} />
        )}
        {PRODUCTS_ARRAY.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            userId={user?.id}
            isSubscribed={isSubscribed}
          />
        ))}
      </main>
      <PricingFooter />
    </>
  );
}
