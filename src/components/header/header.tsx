import { getSession } from "@/lib/auth";
import ClientHeader from "./client-header";

export default async function Header() {
  const session = await getSession();
  const isAuthenticated = !!session?.id;

  return <ClientHeader isAuthenticated={isAuthenticated} />;
}
