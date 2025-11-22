import oxygenLogo from "@/assets/oxygen-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <img src={oxygenLogo} alt="Oxygen Logo" className="w-32 h-auto" />
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Project Oxygen. Breathing Intelligence into Healthcare.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
