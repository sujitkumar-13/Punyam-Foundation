"use client";

import { useEffect, useState, useRef } from "react";
import { Heart, Users, FolderOpen, MapPin } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Heart,
      value: 10000,
      suffix: "+",
      label: "Lives Impacted",
      color: "primary",
    },
    {
      icon: FolderOpen,
      value: 50,
      suffix: "+",
      label: "Programs Conducted",
      color: "secondary",
    },
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "Active Volunteers",
      color: "primary",
    },
    {
      icon: MapPin,
      value: 25,
      suffix: "+",
      label: "Communities Served",
      color: "secondary",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="section-padding gradient-subtle">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <ScrollReveal animation="fadeIn">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Our Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Making a <span className="text-gradient">Difference</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every number represents a life touched, a family supported, a community strengthened
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} animation="scaleIn" delay={0.1 * index}>
              <div className="bg-card rounded-2xl p-8 text-center shadow-card hover-lift">
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${stat.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                    }`}
                >
                  <stat.icon
                    className={`w-8 h-8 ${stat.color === "primary" ? "text-primary" : "text-secondary"
                      }`}
                  />
                </div>
                <div className="mb-2">
                  <span
                    className={`text-4xl md:text-5xl font-bold ${stat.color === "primary" ? "text-primary" : "text-secondary"
                      }`}
                  >
                    {isVisible ? <AnimatedCounter end={stat.value} /> : 0}
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Be part of our growing impact
          </p>
          <p className="hindi-text text-primary text-xl font-medium">
            "आपका योगदान किसी का जीवन बदल सकता है"
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Your contribution can change someone's life
          </p>
        </div>
      </div>
    </section>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return <>{count.toLocaleString()}</>;
};

export default ImpactSection;
