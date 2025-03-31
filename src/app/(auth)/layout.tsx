import { getSession } from "@/lib/auth";
import { AUTH_REDIRECT_PATH } from "@/lib/constants";
import { redirect } from "next/navigation";
import AuthHeader from "./_components/auth-header";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (session?.id) return redirect(AUTH_REDIRECT_PATH);

  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}
