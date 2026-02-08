import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTestimonials } from "@/hooks/useTestimonials";

// Fallback data when database is empty
const fallbackTestimonials = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: "SC",
    content: "KlickSphere transformed our outdated website into a conversion machine. Our leads increased by 340% in just 3 months.",
    rating: 5,
    published: true,
    created_at: "",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Founder, GrowthLab",
    avatar: "MJ",
    content: "The team's attention to detail and technical expertise is unmatched. They delivered exactly what we envisioned, on time and on budget.",
    rating: 5,
    published: true,
    created_at: "",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "CMO, ScaleUp Inc",
    avatar: "ER",
    content: "Their digital marketing strategies are data-driven and results-focused. We saw a 5x return on our ad spend within the first quarter.",
    rating: 5,
    published: true,
    created_at: "",
  },
  {
    id: "4",
    name: "David Kim",
    role: "CTO, InnovateTech",
    avatar: "DK",
    content: "Clean code, modern architecture, and exceptional performance. KlickSphere built us a platform that scales effortlessly.",
    rating: 5,
    published: true,
    created_at: "",
  },
];

const Testimonials = () => {
  const { data: dbTestimonials } = useTestimonials();
  const testimonials = dbTestimonials && dbTestimonials.length > 0 ? dbTestimonials : fallbackTestimonials;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-sm text-accent font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display mb-6">
            Loved by teams
            <br />
            <span className="text-primary text-glow-primary">worldwide.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold">
                  {testimonial.avatar || testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
