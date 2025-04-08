"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, LogIn } from "lucide-react";
import { useActionState } from "react";
import { handleLogin } from "../_actions/auth";
import AccentLink from "@/components/accent-link";
import GoogleSignInButton from "../_components/google-button";

export default function LoginPage() {
  const [error, action, isPending] = useActionState(handleLogin, {});

  return (
    <main className="h-screen grid place-items-center bg-secondary">
      <form
        action={action}
        className="bg-background rounded-md p-6 flex flex-col gap-4 w-3/4 md:w-2/5"
      >
        <h1 className="mx-auto font-bold text-2xl">Login</h1>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="jdoe@gmail"
          />
          {error.email && (
            <p className="text-destructive text-sm">{error.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
          />
          {error.password && (
            <p className="text-destructive text-sm">{error.password}</p>
          )}
        </div>
        <Button type="submit" disabled={isPending} variant="accent">
          {isPending ? (
            <>
              <span>Loading...</span>
              <Loader className="animate-spin" />
            </>
          ) : (
            <>
              <span>Login</span>
              <LogIn />
            </>
          )}
        </Button>
        <GoogleSignInButton />
        <div className="flex gap-1 text-sm">
          <p className="text-muted-foreground">Don&apos;t have an account?</p>
          <AccentLink href="/register">Register</AccentLink>
        </div>
      </form>
    </main>
  );
}
