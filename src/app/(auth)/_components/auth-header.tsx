import HeaderLink from "@/components/header/header-link";
import Image from "next/image";
import Link from "next/link";

const LOGO_SIZE = 64;

export default function AuthHeader() {
  return (
    <header className="absolute top-0 left-0 w-full py-4 px-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/logo-no-bg.png"
            alt="logo"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
          />
          <span className="text-xl font-semibold">JAMAi</span>
        </Link>
        <ul className="flex gap-6 text-muted-foreground text-sm">
          {/* <HeaderLink href="/about" title="About" /> */}
          <HeaderLink href="/contact" title="Contact" />
        </ul>
      </nav>
    </header>
  );
}
