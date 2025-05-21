import { getSession } from "@/lib/auth";


export async function getUserEmail() {
    const session = await getSession();
    return session?.email ?? null
}