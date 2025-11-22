import { motion } from "framer-motion";
import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Nitanshu Bhor",
    role: "Team Member",
    description: "Dedicated to healthcare innovation",
  },
  {
    name: "Vaishnavi Biradar",
    role: "Team Member",
    description: "Passionate about AI solutions",
  },
  {
    name: "Ishwari Gaikwad",
    role: "Team Member",
    description: "Focused on medical technology",
  },
  {
    name: "Janhvi Veer",
    role: "Team Member",
    description: "Committed to improving patient care",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">Our Team</h2>
          <p className="text-xl text-muted-foreground">
            Experts dedicated to revolutionizing healthcare
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 text-center space-y-4 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <User className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
