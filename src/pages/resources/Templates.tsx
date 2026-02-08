import { motion } from "framer-motion";
import { Layout, ShoppingCart, FileText, BarChart3, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const templates = [
  { icon: Layout, title: "SaaS Landing Page", category: "Landing Page", desc: "Conversion-optimized template with pricing tables, feature grids, and testimonials." },
  { icon: ShoppingCart, title: "E-Commerce Starter", category: "E-Commerce", desc: "Complete storefront with product pages, cart, and checkout flow." },
  { icon: FileText, title: "Blog & Content Hub", category: "Content", desc: "SEO-ready blog template with categories, search, and newsletter signup." },
  { icon: BarChart3, title: "Analytics Dashboard", category: "Dashboard", desc: "Data visualization template with charts, tables, and real-time metrics." },
  { icon: Layout, title: "Portfolio Showcase", category: "Portfolio", desc: "Minimal portfolio template with project galleries and case study layouts." },
  { icon: FileText, title: "Documentation Site", category: "Docs", desc: "Technical documentation template with sidebar navigation and search." },
];

const TemplatesPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <AIAssistant />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-4xl mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
            Templates
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-display mb-8 leading-tight">
            Start building<br />
            <span className="text-primary text-glow-primary">faster.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Production-ready templates built with best practices and modern tooling.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-border/30 flex items-center justify-center mb-4">
                <template.icon className="w-10 h-10 text-primary/50" />
              </div>
              <span className="text-xs text-primary font-medium mb-2">{template.category}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{template.title}</h3>
              <p className="text-sm text-muted-foreground flex-1">{template.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Preview <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TemplatesPage;
