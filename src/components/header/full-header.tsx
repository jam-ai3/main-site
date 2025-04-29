"use client";

import { Grid, Notebook, Pencil } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeaderLink from "./header-link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { HeaderProps } from "./client-header";

const LOGO_SIZE = 64;

export default function FullHeader({ isAuthenticated }: HeaderProps) {
  return (
    <header className="top-0 right-0 left-0 z-10 fixed backdrop-blur-md px-6 py-4">
      <nav className="items-center grid grid-cols-3">
        <Link href="/" className="flex justify-self-start items-center gap-2">
          <Image
            src="/logo-no-bg.png"
            alt="logo"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
          />
          <span className="font-semibold text-xl">JAMAi</span>
        </Link>
        <ul className="flex justify-self-center gap-6 text-muted-foreground text-sm">
          {/* <HeaderLink href="/about" title="About" /> */}
          {/* <HeaderLink href="/pricing" title="Pricing" /> */}
          <HeaderLink href="/contact" title="Contact" />
          {isAuthenticated && <HeaderLink href="/account" title="Account" />}
          {isAuthenticated && <HeaderLink href="/feedback" title="Feedback" />}
        </ul>
        <ul className="flex justify-self-end gap-2">
          {isAuthenticated ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="accent">
                    <Grid />
                    <span>Apps</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href="https://write.jamai.dev"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <Pencil />
                        <span>Write</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="https://study.jamai.dev"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <Notebook />
                        <span>Study</span>
                      </Link>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem>
                      <Link
                        href="https://plan.jamai.dev"
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <Calendar />
                        <span>Plan</span>
                      </Link>
                    </DropdownMenuItem> */}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <li>
                <Button asChild size="sm">
                  <Link href="/login" className="p-4">
                    <span className="font-semibold text-sm">Login</span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button asChild size="sm" variant="accent">
                  <Link href="/register" className="p-4">
                    <span className="font-semibold text-sm">Register</span>
                  </Link>
                </Button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
