import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { MethodSection } from "@/components/MethodSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { AboutSection } from "@/components/AboutSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <MethodSection />
        <DifferentialsSection />
        <ComparisonSection />
        <AboutSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
