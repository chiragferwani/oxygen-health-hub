import { motion } from "framer-motion";
import oxygenLogoTaglineBlack from "@/assets/logo-text-black.png";
import oxygenLogoTaglineWhite from "@/assets/logo-text-white.png";
import { useTheme } from "@/components/ThemeProvider";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src={theme === "dark" ? oxygenLogoTaglineWhite : oxygenLogoTaglineBlack}
            alt="Oxygen - Breathing Intelligence into Healthcare"
            className="w-full max-w-2xl h-auto"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
              AI-Driven Healthcare Ecosystem
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming healthcare through intelligent technology.
              Advanced AI solutions for medical professionals and patients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
