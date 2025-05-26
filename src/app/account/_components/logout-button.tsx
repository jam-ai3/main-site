"use client";

import { logout } from "@/lib/auth";
import { LogOutIcon } from "lucide-react";
import MotionButtonAccount from "./motion-button-account";

export default function LogoutButton() {
  return (
    <MotionButtonAccount
      variant="default"
      onClick={async () => await logout("/")}
      className="flex-1"
    >
      <LogOutIcon />
      <span>Logout</span>
    </MotionButtonAccount>
  );
}
