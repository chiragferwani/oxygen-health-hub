import { Activity, Heart, Brain, Zap, Phone, Pill } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">OxyOne</h2>
          <p className="text-xl text-muted-foreground">
            Your Compact Futuristic Medical Assistant
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-square bg-card rounded-2xl flex items-center justify-center border border-border">
            <div className="w-48 h-48 rounded-full bg-primary/5 flex items-center justify-center">
              <Activity className="w-24 h-24 text-primary" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Intelligent Health Companion</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              OxyOne is a state-of-the-art medical assistant designed to provide instant access 
              to health information, fitness guidance, mental wellness support, emergency assistance, 
              and medicine-related queries—all in one compact device.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Health Monitoring</p>
                  <p className="text-sm text-muted-foreground">Real-time insights</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Brain className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-semibold">AI-Powered</p>
                  <p className="text-sm text-muted-foreground">Smart responses</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Instant Access</p>
                  <p className="text-sm text-muted-foreground">24/7 availability</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-primary" />
                <div>
                  <p className="font-semibold">Emergency Ready</p>
                  <p className="text-sm text-muted-foreground">Quick response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
