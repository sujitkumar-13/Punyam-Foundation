"use client";

import { Award, Music, Sparkles, Palette, GraduationCap, Trophy, Heart } from "lucide-react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  } as const;

  const imageEffect = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  } as const;

  return (
    <section id="team" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          {...fadeIn}
        >
          <p className="text-primary font-medium mb-2 tracking-widest uppercase text-xs">Our Leadership</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Visionaries Behind <span className="text-gradient">Punyam</span>
          </h2>
          <motion.div
            className="h-1.5 w-24 bg-primary/20 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Extraordinary individuals dedicated to transforming lives through creativity, healing, and selfless service.
          </p>
        </motion.div>

        {/* Founder 1: Dr. Neha Singh */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-40">
          {/* Content Left */}
          <motion.div
            className="space-y-8 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <span className="absolute -left-8 -top-8 text-primary/5 text-8xl font-serif">"</span>
              <h3 className="text-4xl font-bold text-foreground mb-1 leading-tight tracking-tight">Dr. Neha Singh</h3>
              <p className="text-primary font-bold text-xl tracking-wide uppercase">Founder</p>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Dr. Neha Singh is a remarkable visionary with multiple talents.
                She holds a <span className="text-foreground font-semibold">Guinness World Record</span> and six other world records, demonstrating her exceptional dedication.
              </p>
              <p>
                As an international artist and prolific author of <span className="text-foreground font-semibold">eight books</span>, she utilizes her creative gifts as a skilled poet and Art Therapist to inspire global change.
              </p>
              <p>
                Through Punyam Foundation, she integrates her skills as a Pranic Healer and Tarot Card Reader to positively impact lives with her unique healing abilities.
              </p>
            </div>

            {/* Achievement Row (Horizontal Small Boxes) */}
            <div className="pt-6 grid grid-cols-3 gap-4">
              {[
                { icon: Trophy, label: "World Records", color: "bg-primary/10" },
                { icon: Palette, label: "Art & Books", color: "bg-secondary/10" },
                { icon: Heart, label: "Art Therapist", color: "bg-primary/5" }
              ].map((box, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`${box.color} p-4 rounded-2xl border border-white/10 backdrop-blur-sm shadow-soft text-center group transition-colors hover:border-primary/20`}
                >
                  <box.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] font-black text-foreground uppercase tracking-widest">{box.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            className="relative order-1 md:order-2"
            {...imageEffect}
          >
            <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[2rem] gradient-subtle p-6 shadow-2xl">
              <div className="h-full rounded-2xl border-2 border-dashed border-primary/20 overflow-hidden shadow-inner group">
                <img
                  src="/images/neha-singh.jpg"
                  alt="Dr. Neha Singh"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            {/* Background Glows */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
          </motion.div>
        </div>

        {/* Founder 2: Amit Kumar Rai */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Left */}
          <motion.div
            className="relative"
            {...imageEffect}
          >
            <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[2rem] gradient-subtle p-6 shadow-2xl">
              <div className="h-full rounded-2xl border-2 border-dashed border-secondary/20 overflow-hidden shadow-inner group">
                <img
                  src="/images/amit-kumar-rai.jpg"
                  alt="Amit Kumar Rai"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            {/* Background Glows */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          </motion.div>

          {/* Content Right */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <span className="absolute -right-8 -top-8 text-secondary/5 text-8xl font-serif">"</span>
              <h3 className="text-4xl font-bold text-foreground mb-1 leading-tight tracking-tight">Amit Kumar Rai</h3>
              <p className="text-primary font-bold text-xl tracking-wide uppercase">Co-founder</p>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Amit Kumar Rai is a versatile artist with a deep <span className="text-foreground font-semibold">passion for music</span>.
                As a renowned musician, he possesses the rare expertise of playing almost all types of instruments.
              </p>
              <p>
                Beyond his musical mastery, Amit is a <span className="text-foreground font-semibold">certified Pranic Healing instructor</span>,
                utilizing the healing arts to empower and transform the community he serves.
              </p>
              <p>
                His multifaceted personality and Commendable work through the Foundation enable him to inspire others,
                blending music and healing into a powerful force for good.
              </p>
            </div>

            {/* Achievement Row (Horizontal Small Boxes) */}
            <div className="pt-6 grid grid-cols-3 gap-4">
              {[
                { icon: Music, label: "Master Musician", color: "bg-accent/30" },
                { icon: Sparkles, label: "Healing Lead", color: "bg-secondary/10" },
                { icon: GraduationCap, label: "Expert Teacher", color: "bg-primary/5" }
              ].map((box, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`${box.color} p-4 rounded-2xl border border-white/10 backdrop-blur-sm shadow-soft text-center group transition-colors hover:border-primary/20`}
                >
                  <box.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] font-black text-foreground uppercase tracking-widest">{box.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
