import oxygenLogoTagline from "@/assets/oxygen-logo-tagline.png";
import oxygenGraphic from "@/assets/oxygen-graphic.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col items-center text-center space-y-12">
          <img 
            src={oxygenLogoTagline} 
            alt="Oxygen - Breathing Intelligence into Healthcare" 
            className="w-full max-w-2xl h-auto"
          />
          
          <div className="relative w-full max-w-md h-64 flex items-center justify-center">
            <img 
              src={oxygenGraphic} 
              alt="Oxygen Visual" 
              className="w-full h-full object-contain animate-pulse"
              style={{ animationDuration: '4s' }}
            />
          </div>

          <div className="space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              AI-Driven Healthcare Ecosystem
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming healthcare through intelligent technology. 
              Advanced AI solutions for medical professionals and patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
