"use client";

import { Grid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { HeaderProps } from "./client-header";

const LOGO_SIZE = 64;

export default function FullHeader({ isAuthenticated }: HeaderProps) {
  return (
    <header className="top-0 right-0 left-0 z-10 fixed backdrop-blur-md px-6 py-4">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-no-bg.png"
            alt="logo"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
          />
          <span className="font-semibold text-xl">jamAI</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="accent">
              <Grid />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Pages</DropdownMenuLabel>
              {!isAuthenticated && (
                <DropdownMenuItem asChild>
                  <Link href="/login">
                    <span>Login</span>
                  </Link>
                </DropdownMenuItem>
              )}
              {!isAuthenticated && (
                <DropdownMenuItem asChild>
                  <Link href="/register">
                    <span>Register</span>
                  </Link>
                </DropdownMenuItem>
              )}
              {/* <DropdownMenuItem asChild>
                <Link href="/pricing">
                  <span>Pricing</span>
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem asChild>
                <Link href="/contact">
                  <span>Contact</span>
                </Link>
              </DropdownMenuItem>
              {isAuthenticated && (
                <DropdownMenuItem asChild>
                  <Link href="/account">
                    <span>Account</span>
                  </Link>
                </DropdownMenuItem>
              )}
              {isAuthenticated && (
                <DropdownMenuItem asChild>
                  <Link href="/feedback">
                    <span>Feedback</span>
                  </Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Apps</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href="https://write.jamai.dev" target="_blank">
                  <span>Write</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://study.jamai.dev" target="_blank">
                  <span>Study</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}
