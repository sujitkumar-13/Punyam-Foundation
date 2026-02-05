import { Target, Eye, Heart, GraduationCap, Users, Stethoscope } from "lucide-react";

const MissionSection = () => {
  const missionItems = [
    {
      icon: Stethoscope,
      title: "Child Health",
      description: "Ensuring every child has access to healthcare and nutrition",
      color: "primary",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Empowering through knowledge and skill development",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Women Empowerment",
      description: "Supporting women to become self-reliant and confident",
      color: "primary",
    },
    {
      icon: Heart,
      title: "Elder Care",
      description: "Providing dignity and care to our senior citizens",
      color: "secondary",
    },
  ];

  return (
    <section id="mission" className="section-padding gradient-subtle">
      <div className="container-narrow mx-auto">
        {/* Vision & Mission Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A world where selfless service is recognized as the highest duty, where 
              every individual has the opportunity to live with dignity, and where 
              compassion bridges the gap between privilege and need.
            </p>
            <p className="hindi-text text-primary font-medium mt-4">
              "सेवा परमो धर्मः"
            </p>
          </div>

          {/* Mission */}
          <div className="bg-card rounded-2xl p-8 shadow-card hover-lift">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Target className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To serve the marginalized and vulnerable through comprehensive programs 
              in health, education, women empowerment, and elder care—reaching those 
              who are often forgotten but most deserving of compassion.
            </p>
          </div>
        </div>

        {/* Mission Items */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Core Areas of Focus
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our mission manifests through dedicated programs that address fundamental needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-soft hover-lift group"
            >
              <div 
                className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  item.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                }`}
              >
                <item.icon 
                  className={`w-8 h-8 ${
                    item.color === "primary" ? "text-primary" : "text-secondary"
                  }`} 
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
