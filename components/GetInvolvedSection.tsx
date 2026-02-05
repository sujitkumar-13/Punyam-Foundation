import { Button } from "@/components/ui/button";
import { Users, Handshake, Building2 } from "lucide-react";

const GetInvolvedSection = () => {
  const options = [
    {
      icon: Users,
      title: "Volunteer With Us",
      description: "Give your time and skills to make a direct impact in communities",
      cta: "Join as Volunteer",
      color: "primary",
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Collaborate on initiatives that align with your organization's values",
      cta: "Become a Partner",
      color: "secondary",
    },
    {
      icon: Building2,
      title: "CSR Collaboration",
      description: "Fulfill your corporate social responsibility through meaningful programs",
      cta: "Explore CSR Options",
      color: "primary",
    },
  ];

  return (
    <section className="section-padding gradient-subtle">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get Involved</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join the <span className="text-gradient">Movement</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            There are many ways to contribute to our mission beyond donations. 
            Find the right way for you to make a difference.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover-lift text-center"
            >
              <div 
                className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                  option.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                }`}
              >
                <option.icon 
                  className={`w-8 h-8 ${
                    option.color === "primary" ? "text-primary" : "text-secondary"
                  }`} 
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {option.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {option.description}
              </p>
              <Button 
                variant={option.color === "primary" ? "default" : "outline"}
                className={option.color === "primary" ? "gradient-cta" : "border-secondary text-secondary hover:bg-secondary/10"}
              >
                {option.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
