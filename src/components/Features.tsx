import { motion } from "framer-motion";
import { Rocket, Shield, Zap, Globe, BarChart3, Cpu } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Sub-second load times with edge deployment and optimized assets.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SSL, DDoS protection, and regular audits.",
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "Redundant infrastructure ensures your site is always accessible.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivered from 200+ edge locations worldwide.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights into traffic, conversions, and user behavior.",
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Smart automation for personalization and optimization.",
  },
];

const Features = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-display mb-6">
            Built for
            <span className="text-accent text-glow-accent"> performance.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project is engineered with cutting-edge technology and best practices.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
