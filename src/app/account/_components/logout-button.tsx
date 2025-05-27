"use client";

import { LogOutIcon } from "lucide-react";
import MotionButtonAccount from "./motion-button-account";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", {
      method: "DELETE",
    });
    router.replace("/");
  }

  return (
    <MotionButtonAccount
      variant="default"
      onClick={handleLogout}
      type="submit"
      className="flex-1"
    >
      <LogOutIcon />
      <span>Logout</span>
    </MotionButtonAccount>
  );
}
