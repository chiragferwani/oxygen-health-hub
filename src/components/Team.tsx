import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    description: "15+ years in healthcare AI research",
  },
  {
    name: "Alex Rodriguez",
    role: "Lead AI Engineer",
    description: "Expert in medical machine learning",
  },
  {
    name: "Maya Patel",
    role: "Product Director",
    description: "Healthcare innovation specialist",
  },
];

const Team = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Team</h2>
          <p className="text-xl text-muted-foreground">
            Experts dedicated to revolutionizing healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border rounded-xl p-8 text-center space-y-4 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
