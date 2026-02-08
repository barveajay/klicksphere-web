import { motion } from "framer-motion";
import { Search, Globe, BarChart3, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const capabilities = [
  { icon: Search, title: "Technical SEO", desc: "Site audits, schema markup, Core Web Vitals — the foundation of organic visibility." },
  { icon: FileText, title: "Content Strategy", desc: "Keyword research, topic clusters, and editorial calendars that drive traffic." },
  { icon: Globe, title: "Local & International SEO", desc: "Multi-language, multi-region optimization for global reach." },
  { icon: BarChart3, title: "Reporting & Analytics", desc: "Custom dashboards tracking rankings, traffic, and revenue attribution." },
];

const SEOPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <AIAssistant />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-4xl mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
            SEO & Growth
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-display mb-8 leading-tight">
            Make Google<br />
            <span className="text-accent text-glow-accent">love you.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Algorithmic visibility meets strategic content for lasting organic dominance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-3xl bg-gradient-to-br from-accent/10 via-card to-primary/10 border border-border p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold text-foreground font-display mb-4">Dominate search results.</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's build an SEO strategy that compounds over time.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors glow-accent"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default SEOPage;
