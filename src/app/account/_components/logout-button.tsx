"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/lib/auth";
import { LogOutIcon } from "lucide-react";

export default function LogoutButton() {
  return (
    <Button variant="default" onClick={logout}>
      <span>Logout</span>
      <LogOutIcon />
    </Button>
  );
}
