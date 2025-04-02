import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoLine from "@/components/info-line";
import db from "@/db/db";
import { getSession } from "@/lib/auth";
import { UNAUTH_REDIRECT_PATH, WEEK_IN_MS } from "@/lib/constants";
import { capitalize } from "@/lib/utils";
import { Subscription, User } from "@prisma/client";
import { redirect } from "next/navigation";

function formatSubscriptionType(user: User, subscription: Subscription | null) {
  if (subscription && subscription.expiresAt.getTime() > Date.now())
    return capitalize(subscription.type);
  return user.createdAt.getTime() + WEEK_IN_MS > Date.now()
    ? "Free Trial"
    : "None";
}

function formatSubscriptionExpires(
  user: User,
  subscription: Subscription | null
) {
  if (subscription && subscription.expiresAt.getTime() > Date.now())
    return subscription.expiresAt.toLocaleDateString();
  const freeTrial = user.createdAt.getTime() + WEEK_IN_MS;
  return freeTrial > Date.now()
    ? new Date(freeTrial).toLocaleDateString()
    : "N/A";
}

export default async function AccountPage() {
  const session = await getSession();
  const [user, subscription] = await Promise.all([
    db.user.findUnique({ where: { id: session?.id ?? "" } }),
    db.subscription.findUnique({ where: { userId: session?.id ?? "" } }),
  ]);

  if (!user) redirect(UNAUTH_REDIRECT_PATH);

  return (
    <>
      <Header />
      <main className="h-screen pt-36 flex flex-col items-center gap-6">
        <h1 className="font-bold text-2xl">Your Account</h1>
        <div className="w-2/3 space-y-6">
          <InfoLine label="Email" value={user.email} />
          <InfoLine
            label="Subscription"
            value={formatSubscriptionType(user, subscription)}
          />
          <InfoLine
            label="Subscription Expires"
            value={formatSubscriptionExpires(user, subscription)}
          />
          <InfoLine
            label="Subscription Renews"
            value={
              subscription?.isActive === undefined
                ? "N/A"
                : subscription.isActive
                ? "Yes"
                : "No"
            }
          />
        </div>
      </main>
      <Footer absolute />
    </>
  );
}
