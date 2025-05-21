"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/lib/auth";
import { LogOutIcon } from "lucide-react";
import MotionButtonAccount from "./motion-button-account";

export default function LogoutButton() {
  return (
    <MotionButtonAccount variant="default" onClick={logout}>
      <span>Logout</span>
      <LogOutIcon />
    </MotionButtonAccount>
  );
}
