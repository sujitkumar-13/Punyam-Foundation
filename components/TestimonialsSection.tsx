import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Punyam Foundation gave my daughter a chance at education when we had lost all hope. They didn't just provide books—they gave us dignity.",
      author: "Kamla Devi",
      role: "Beneficiary Parent",
      location: "Varanasi",
    },
    {
      quote: "Volunteering here has been the most fulfilling experience of my life. The team's dedication to serving the truly needy is inspiring.",
      author: "Rahul Verma",
      role: "Volunteer",
      location: "Varanasi",
    },
    {
      quote: "The elderly care program brought warmth back into my father's life. The respect and love they show our seniors is remarkable.",
      author: "Sunita Agarwal",
      role: "Family Member",
      location: "Varanasi",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Stories of Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Voices from the <span className="text-gradient">Community</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from the people whose lives have been touched by our work
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover-lift relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-foreground leading-relaxed mt-4 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
