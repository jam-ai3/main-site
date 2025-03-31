import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoLine from "@/components/info-line";
import db from "@/db/db";
import { getSession } from "@/lib/auth";
import { UNAUTH_REDIRECT_PATH } from "@/lib/constants";
import { redirect } from "next/navigation";

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
          <InfoLine label="Subscription" value={subscription?.type ?? "None"} />
          <InfoLine
            label="Subscription Expires"
            value={subscription?.expiresAt.toLocaleDateString() ?? "N/A"}
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
