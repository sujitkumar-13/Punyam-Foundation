"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Eye, CheckCircle } from "lucide-react";
import { DonationModal } from "./DonationModal";

const DonationSection = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustPoints = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your donation is protected with bank-grade security",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Track how every rupee is utilized",
    },
    {
      icon: CheckCircle,
      title: "Direct Impact",
      description: "Funds go directly to those in need",
    },
  ];

  return (
    <>
      <section id="donate" className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero opacity-95" />

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />

        <div className="relative z-10 container-narrow mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            {/* Header */}
            <div className="mb-8">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/20 mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary-foreground animate-pulse-soft" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Your Contribution Becomes<br />
                <span className="hindi-text">पुण्य</span> — Invisible Blessings
              </h2>
              <p className="text-lg text-primary-foreground/85 leading-relaxed">
                When you give selflessly, you earn merit that transcends this world.
                Your donation doesn't just change lives—it transforms your own spirit
                through the sacred act of giving.
              </p>
            </div>

            {/* Donation Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated px-8 py-6 text-lg font-semibold"
                onClick={() => setIsDonationModalOpen(true)}
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Once
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold bg-transparent"
                onClick={scrollToContact}
              >
                Become a Monthly Supporter
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-3 gap-6">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5"
                >
                  <point.icon className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    {point.title}
                  </h4>
                  <p className="text-sm text-primary-foreground/75">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tax Benefit Note */}
            <p className="mt-10 text-sm text-primary-foreground/70">
              All donations are eligible for tax benefits under Section 80G of the Income Tax Act
            </p>
          </div>
        </div>
      </section>
      <DonationModal
        isOpen={isDonationModalOpen}
        onOpenChange={setIsDonationModalOpen}
      />
    </>
  );
};

export default DonationSection;
