import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const projects = [
  {
    id: 1,
    title: "TechFlow Dashboard",
    category: "Web Application",
    description: "A comprehensive SaaS dashboard for managing team workflows and analytics.",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "GrowthLab E-commerce",
    category: "E-commerce",
    description: "High-performance headless e-commerce platform with 3x conversion improvement.",
    tags: ["Next.js", "Shopify", "Stripe"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "ScaleUp Marketing Site",
    category: "Marketing",
    description: "Brand-focused marketing website that increased lead generation by 250%.",
    tags: ["React", "Framer Motion", "CMS"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 4,
    title: "InnovateTech Platform",
    category: "Web Application",
    description: "Enterprise platform serving 100k+ daily active users with 99.9% uptime.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 5,
    title: "HealthHub Portal",
    category: "Healthcare",
    description: "HIPAA-compliant patient portal with secure messaging and scheduling.",
    tags: ["React", "AWS", "Security"],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 6,
    title: "FinanceFlow App",
    category: "Fintech",
    description: "Mobile-first banking dashboard with real-time transaction tracking.",
    tags: ["React Native", "Plaid", "Charts"],
    color: "from-violet-500/20 to-purple-500/20",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AIAssistant />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            className="max-w-3xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground font-display mb-6">
              Projects that
              <br />
              <span className="text-accent text-glow-accent">drive results.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A selection of our recent work across web development, e-commerce, and digital marketing.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />

                {/* Content */}
                <div className="relative p-8 min-h-[300px] flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 rounded-full bg-muted/50 text-muted-foreground text-xs font-medium mb-4 w-fit backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-bold text-foreground font-display mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:text-foreground transition-colors flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
          >
            <p className="text-muted-foreground mb-4">Have a project in mind?</p>
            <a
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors glow-accent"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
