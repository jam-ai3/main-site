"use client";

import useWindowSize from "@/hooks/useWindowSize";
import { MD_WIDTH } from "@/lib/constants";
import MobileHeader from "./mobile-header";
import FullHeader from "./full-header";

export type HeaderProps = {
  isAuthenticated: boolean;
};

export default function ClientHeader(props: HeaderProps) {
  const { width } = useWindowSize();

  if (width < MD_WIDTH) return <MobileHeader {...props} />;
  return <FullHeader {...props} />;
}
