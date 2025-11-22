import { Pill, TrendingUp, Brain, Activity, Phone, DollarSign } from "lucide-react";

const modules = [
  {
    name: "MedO2",
    description: "Medicine information and interactions",
    icon: Pill,
  },
  {
    name: "PredO2",
    description: "Disease prediction and risk analysis",
    icon: TrendingUp,
  },
  {
    name: "MindO2",
    description: "Mental health support and wellness",
    icon: Brain,
  },
  {
    name: "FitO2",
    description: "BMI tracking and fitness guidance",
    icon: Activity,
  },
  {
    name: "ResQO2",
    description: "Emergency assistance and protocols",
    icon: Phone,
  },
  {
    name: "FundO2",
    description: "Medical finance support and planning",
    icon: DollarSign,
  },
];

const AIModules = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">AI Intelligence Modules</h2>
          <p className="text-xl text-muted-foreground">
            Specialized AI models powering Project Oxygen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module.name}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <module.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{module.name}</h3>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIModules;
