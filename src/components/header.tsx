import { getSession, logout } from "@/lib/auth";
import { Calendar, Grid, Notebook, Pencil } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";
import Image from "next/image";
import HeaderLink from "./header-link";

const LOGO_SIZE = 64;

export default async function Header() {
  const session = await getSession();
  const isAuthenticated = !!session?.id;

  return (
    <header className="py-4 fixed top-0 left-0 right-0 px-6 backdrop-blur-md">
      <nav className="grid grid-cols-3 items-center">
        <Link href="/" className="justify-self-start flex gap-2 items-center">
          <Image
            src="/logo-no-bg.png"
            alt="logo"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
          />
          <span className="font-semibold text-xl">JAMAi</span>
        </Link>
        <ul className="flex gap-6 justify-self-center text-sm text-muted-foreground">
          {/* <HeaderLink href="/about" title="About" /> */}
          <HeaderLink href="/pricing" title="Pricing" />
          <HeaderLink href="/contact" title="Contact" />
          {isAuthenticated && <HeaderLink href="/account" title="Account" />}
        </ul>
        <ul className="flex justify-self-end gap-2">
          {isAuthenticated ? (
            <>
              <Button onClick={logout} size="sm">
                Logout
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="accent">
                    <Grid />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href="https://write.jamai.dev"
                        target="_blank"
                        className="flex gap-2 items-center"
                      >
                        <Pencil />
                        <span>Write</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="https://study.jamai.dev"
                        target="_blank"
                        className="flex gap-2 items-center"
                      >
                        <Notebook />
                        <span>Study</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="https://plan.jamai.dev"
                        target="_blank"
                        className="flex gap-2 items-center"
                      >
                        <Calendar />
                        <span>Plan</span>
                      </Link>
                    </DropdownMenuItem>
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
