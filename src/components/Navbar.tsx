import { useState, useEffect } from "react";
import oxygenLogoBlack from "@/assets/logo-black.png";
import oxygenLogoWhite from "@/assets/logo-white.png";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const NavButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="text-foreground hover:text-primary transition-colors font-medium"
    >
      {children}
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={theme === "dark" ? oxygenLogoWhite : oxygenLogoBlack}
              alt="Oxygen Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-heading font-bold">Project Oxygen</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavButton onClick={() => scrollToSection("hero")}>Home</NavButton>
            <NavButton onClick={() => scrollToSection("product")}>OxyOne</NavButton>
            <NavButton onClick={() => scrollToSection("modules")}>AI Modules</NavButton>
            <NavButton onClick={() => scrollToSection("team")}>Team</NavButton>
            <NavButton onClick={() => scrollToSection("contact")}>Contact</NavButton>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <NavButton onClick={() => scrollToSection("hero")}>Home</NavButton>
              <NavButton onClick={() => scrollToSection("product")}>OxyOne</NavButton>
              <NavButton onClick={() => scrollToSection("modules")}>AI Modules</NavButton>
              <NavButton onClick={() => scrollToSection("team")}>Team</NavButton>
              <NavButton onClick={() => scrollToSection("contact")}>Contact</NavButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
