import oxygenLogoBlack from "@/assets/logo-black.png";
import oxygenLogoWhite from "@/assets/logo-white.png";
import { useTheme } from "@/components/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <img
            src={theme === "dark" ? oxygenLogoWhite : oxygenLogoBlack}
            alt="Oxygen Logo"
            className="w-32 h-auto"
          />
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Project Oxygen. Breathing Intelligence into Healthcare.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
