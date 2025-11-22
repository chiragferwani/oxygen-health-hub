import { motion } from "framer-motion";
import { Pill, TrendingUp, Brain, Activity, Phone, DollarSign, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const modules = [
  {
    name: "MedO2",
    description: "Medicine information and interactions",
    icon: Pill,
    link: "https://oxygenmedo2.streamlit.app/",
  },
  {
    name: "PredO2",
    description: "Disease prediction and risk analysis",
    icon: TrendingUp,
    link: "https://oxygenpredo2.streamlit.app/",
  },
  {
    name: "FitO2",
    description: "BMI tracking and fitness guidance",
    icon: Activity,
    link: "https://oxygenfito2.streamlit.app/",
  },
  {
    name: "MindO2",
    description: "Mental health support and wellness",
    icon: Brain,
    comingSoon: true,
  },
  {
    name: "ResQO2",
    description: "Emergency assistance and protocols",
    icon: Phone,
    comingSoon: true,
  },
  {
    name: "FundO2",
    description: "Medical finance support and planning",
    icon: DollarSign,
    comingSoon: true,
  },
];

const AIModules = () => {
  const navigate = useNavigate();

  const handleModuleClick = (module: typeof modules[0]) => {
    if (module.link) {
      window.location.href = module.link;
    } else if (!module.comingSoon) {
      navigate(`/chatbot/${module.name.toLowerCase()}`);
    }
    // If coming soon, do nothing
  };

  return (
    <section id="modules" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">AI Intelligence Modules</h2>
          <p className="text-xl text-muted-foreground">
            Specialized AI models powering Project Oxygen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleModuleClick(module)}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between space-x-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-heading font-bold">{module.name}</h3>
                      {module.comingSoon && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </div>
                {!module.comingSoon && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIModules;
