import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import AIModules from "@/components/AIModules";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Hero />
      <ProductShowcase />
      <AIModules />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
