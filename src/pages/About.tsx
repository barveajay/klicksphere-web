import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import Stats from "@/components/Stats";

const team = [
  { name: "Alex Thompson", role: "Founder & CEO", initials: "AT" },
  { name: "Sarah Chen", role: "Head of Marketing", initials: "SC" },
  { name: "Marcus Lee", role: "Lead Designer", initials: "ML" },
  { name: "Emily Rodriguez", role: "Tech Lead", initials: "ER" },
  { name: "David Kim", role: "Senior Developer", initials: "DK" },
  { name: "Jessica Park", role: "UX Researcher", initials: "JP" },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision is measured against real business outcomes.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle for good enough. Every pixel matters.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Your success is our success. We work as partners, not vendors.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We genuinely love what we do, and it shows in our work.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AIAssistant />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-24">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-display mb-8 leading-tight">
              We're a team of
              <br />
              <span className="text-primary text-glow-primary">digital craftspeople.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Founded in 2024, KlickSphere emerged from a simple belief: exceptional digital
              experiences shouldn't be reserved for Fortune 500 companies. We bring
              enterprise-grade solutions to ambitious businesses ready to scale.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <Stats />

        {/* Values */}
        <section className="py-24 container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="py-24 container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground text-lg">
              The people behind the pixels.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6">
          <motion.div
            className="rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-border p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
              Ready to work with us?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can help transform your digital presence.
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors glow-accent"
            >
              Get in Touch
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
