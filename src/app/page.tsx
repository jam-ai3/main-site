import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "./_sections/hero";
import FeaturesSection from "./_sections/features";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
