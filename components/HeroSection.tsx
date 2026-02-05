"use client";

import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary-foreground/20 blur-3xl" />
      </div>

      <div className="relative z-10 container-narrow mx-auto px-4 py-32 text-center">
        {/* Hindi Quote */}
        <p className="hindi-text text-primary-foreground/90 text-xl md:text-2xl mb-4 animate-fade-in">
          सेवा परमो धर्मः
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
          Service is the
          <span className="block">Supreme Duty</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Through selfless service, we earn invisible blessings—<span className="hindi-text">पुण्य</span>.
          Join us in reaching those who truly need compassion, care, and a helping hand.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated px-8 py-6 text-base font-semibold"
          >
            <Heart className="w-5 h-5 mr-2" />
            Donate Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base font-semibold bg-transparent"
            onClick={scrollToContact}
          >
            <Users className="w-5 h-5 mr-2" />
            Join as Volunteer
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-foreground">10,000+</p>
            <p className="text-sm">Lives Touched</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-foreground">50+</p>
            <p className="text-sm">Programs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-foreground">100%</p>
            <p className="text-sm">Transparency</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/70 rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
