import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const studies = [
  { client: "TechFlow", industry: "SaaS", result: "+340% Leads", desc: "Redesigned the entire platform and implemented a conversion-focused funnel." },
  { client: "GrowthLab", industry: "E-Commerce", result: "5x ROAS", desc: "Built a headless storefront with personalized product recommendations." },
  { client: "ScaleUp Inc", industry: "FinTech", result: "+200% Traffic", desc: "Complete SEO overhaul with technical optimization and content strategy." },
  { client: "InnovateTech", industry: "Healthcare", result: "99.9% Uptime", desc: "Migrated legacy systems to a modern, scalable cloud architecture." },
];

const CaseStudies = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <AIAssistant />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-4xl mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
            Case Studies
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-display mb-8 leading-tight">
            Real results,<br />
            <span className="text-accent text-glow-accent">proven impact.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            See how we've helped businesses transform their digital presence and drive measurable growth.
          </p>
        </motion.div>

        <div className="space-y-6">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-primary font-medium">{study.client}</span>
                    <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted">{study.industry}</span>
                  </div>
                  <p className="text-foreground text-lg mb-2">{study.desc}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="font-bold text-accent font-mono">{study.result}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 border border-border p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold text-foreground font-display mb-4">Want similar results?</h2>
          <p className="text-muted-foreground mb-8">Let's discuss how we can help your business grow.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors glow-accent"
          >
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CaseStudies;
