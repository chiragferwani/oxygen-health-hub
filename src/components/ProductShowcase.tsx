import { motion } from "framer-motion";
import { Heart, Brain, Zap, Phone } from "lucide-react";
import oxyoneHardware from "@/assets/oxyone-hardware.png";

const ProductShowcase = () => {
  return (
    <section id="product" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight">OxyOne</h2>
          <p className="text-xl text-muted-foreground">
            Your Compact Futuristic Medical Assistant
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="aspect-square bg-card rounded-2xl flex items-center justify-center border border-border p-8 overflow-hidden"
          >
            <img 
              src={oxyoneHardware} 
              alt="OxyOne Hardware Device" 
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-heading font-bold">Intelligent Health Companion</h3>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
