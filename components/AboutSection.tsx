import { BookOpen, Heart, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fadeIn">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Meaning of <span className="text-gradient">Punyam</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Rooted in Vedic wisdom, driven by compassion
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal animation="slideRight" delay={0.2}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">From the Rigveda</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Punyam" (पुण्य) means merit, virtue, and the invisible blessings we accumulate
                    through righteous deeds. The ancient Vedanta teaches that selfless service
                    purifies the soul and creates lasting positive karma.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Foundation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Punyam Foundation was born from the belief that true service knows no boundaries.
                    We dedicate ourselves to reaching the truly needy—those often overlooked
                    by society—with compassion, dignity, and practical support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Service as Sacrifice</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every act of giving, every moment of care, every effort to uplift another
                    becomes an offering. This is the essence of सेवा—service that transforms
                    both the giver and the receiver.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual Element */}
          <ScrollReveal animation="slideLeft" delay={0.4}>
            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-subtle p-8 shadow-card">
                <div className="h-full rounded-xl border-2 border-dashed border-primary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="hindi-text text-4xl md:text-5xl text-primary font-semibold mb-4">
                      पुण्यं
                    </p>
                    <p className="text-lg text-foreground font-medium mb-2">Punyam</p>
                    <p className="text-muted-foreground text-sm">
                      "Merit accumulated through righteous deeds"
                    </p>
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground italic">
                        — Rigveda & Vedanta Philosophy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
