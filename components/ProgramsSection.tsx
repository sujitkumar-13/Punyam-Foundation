import { 
  GraduationCap, 
  Heart, 
  Users, 
  Megaphone, 
  Palette, 
  Leaf, 
  Sparkles, 
  Wrench 
} from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Child Health & Education",
      description: "Comprehensive programs for children's physical and mental development through education and healthcare.",
      color: "primary",
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Training and support programs helping women achieve financial independence and social dignity.",
      color: "secondary",
    },
    {
      icon: Heart,
      title: "Elderly Care",
      description: "Dedicated care and support services for senior citizens, ensuring dignity in their golden years.",
      color: "primary",
    },
    {
      icon: Megaphone,
      title: "Public Awareness",
      description: "Community campaigns on health, hygiene, environment, and social responsibility.",
      color: "secondary",
    },
    {
      icon: Palette,
      title: "Art Therapy",
      description: "Healing through creative expression—art as a medium for emotional wellness and recovery.",
      color: "primary",
    },
    {
      icon: Sparkles,
      title: "Pran Tatva Therapy",
      description: "Traditional life force therapy based on ancient Vedic practices for holistic wellness.",
      color: "secondary",
    },
    {
      icon: Leaf,
      title: "Natural Therapy",
      description: "Nature-based healing approaches combining traditional wisdom with modern wellness practices.",
      color: "primary",
    },
    {
      icon: Wrench,
      title: "Skill Development",
      description: "Art-based and vocational training programs enabling self-reliance and sustainable livelihoods.",
      color: "secondary",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Our Programs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive initiatives designed to uplift communities through education, 
            healthcare, empowerment, and holistic wellness
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-soft hover-lift border border-transparent hover:border-primary/20 transition-all"
            >
              <div 
                className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center transition-all group-hover:scale-110 ${
                  program.color === "primary" 
                    ? "bg-primary/10 group-hover:bg-primary/20" 
                    : "bg-secondary/10 group-hover:bg-secondary/20"
                }`}
              >
                <program.icon 
                  className={`w-7 h-7 ${
                    program.color === "primary" ? "text-primary" : "text-secondary"
                  }`} 
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {program.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
