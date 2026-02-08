import { motion } from "framer-motion";
import { BookOpen, Code2, Palette, Zap, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const sections = [
  { icon: BookOpen, title: "Getting Started", desc: "Quick start guides, onboarding, and project setup instructions.", articles: 12 },
  { icon: Code2, title: "Developer Guides", desc: "API references, integration guides, and code examples.", articles: 24 },
  { icon: Palette, title: "Design Guidelines", desc: "Brand assets, component libraries, and design tokens.", articles: 8 },
  { icon: Zap, title: "Performance", desc: "Optimization tips, caching strategies, and monitoring setup.", articles: 15 },
];

const Documentation = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <AIAssistant />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-4xl mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
            Documentation
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-display mb-8 leading-tight">
            Everything you<br />
            <span className="text-primary text-glow-primary">need to know.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive guides, references, and resources for working with KlickSphere.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <section.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{section.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{section.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">{section.articles} articles</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Documentation;
