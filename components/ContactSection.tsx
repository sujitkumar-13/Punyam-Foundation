"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactAction } from "@/app/actions/send-contact";
import { ScrollReveal } from "./ui/ScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // We can use standard form submission or keep controlled inputs. 
  // For validation feedback, controlled inputs are fine, but FormData is easier for the server action.
  // Let's stick to the controlled approach for UI consistency but use FormData for submission or construct it manually.
  // Actually, standard FormData from the event is cleaner.

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("subject", formData.subject);
    submissionData.append("message", formData.message);

    try {
      const result = await sendContactAction(submissionData);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error || "Failed to send message.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "J-12/5 Flat No. G-01, Virat Garden, Nati Imli, Varanasi - 221001 (UP) India",
    },
    {
      icon: Mail,
      title: "Email",
      content: "punyamfoundation@gmail.com",
      href: "mailto:punyamfoundation@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7398799789",
      href: "tel:+917398799789",
    },
  ];

  return (
    <section id="contact" className="section-padding gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <ScrollReveal animation="fadeIn">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-primary font-medium mb-2">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Have questions? Want to volunteer or partner with us? We'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <ScrollReveal animation="slideRight" delay={0.2}>
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-primary/10">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background transition-all focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                    maxLength={15}
                    className="bg-background transition-all focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background transition-all focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-background transition-all focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background resize-none transition-all focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
                  />
                </div>
                <Button type="submit" className="w-full gradient-cta" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal animation="slideLeft" delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>

              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 md:p-5 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm md:text-base text-muted-foreground break-words">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl overflow-hidden shadow-soft h-48 flex items-center justify-center border-2 border-dashed border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-primary/50" />
                  <p className="text-sm">Varanasi, Uttar Pradesh</p>
                  <p className="text-xs">The Holy City of India</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
