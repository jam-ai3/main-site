"use client";

import Footer from "@/components/footer";
import useWindowSize from "@/hooks/useWindowSize";
import { MD_WIDTH } from "@/lib/constants";

export default function PricingFooter() {
  const { width } = useWindowSize();

  return <Footer absolute={width > MD_WIDTH} />;
}
