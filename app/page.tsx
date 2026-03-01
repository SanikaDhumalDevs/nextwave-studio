import Hero from "@/components/Hero";
import Services from "@/components/Services"; // <-- ADD THIS
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Policies from "@/components/Policies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <Services /> {/* <-- ADD THIS HERE */}
      <Portfolio />
      <Pricing />
      <Policies />
      <Footer />
    </main>
  );
}