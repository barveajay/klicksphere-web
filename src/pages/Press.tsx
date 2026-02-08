import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const pressReleases = [
  {
    date: "Jan 2024",
    title: "KlickSphere Launches AI-Powered Web Development Platform",
    source: "TechCrunch",
  },
  {
    date: "Dec 2023",
    title: "How KlickSphere Achieved 340% Conversion Lift for TechFlow",
    source: "Forbes Digital",
  },
  {
    date: "Nov 2023",
    title: "KlickSphere Named Top Digital Agency of 2023",
    source: "Awwwards",
  },
  {
    date: "Oct 2023",
    title: "KlickSphere Expands Global Team to 50+ Members",
    source: "Business Insider",
  },
];

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AIAssistant />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
              Press
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-display mb-8 leading-tight">
              In the
              <br />
              <span className="text-primary text-glow-primary">spotlight.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Latest news, press releases, and media coverage about KlickSphere.
            </p>
          </motion.div>

          {/* Brand Assets */}
          <motion.section
            className="mb-20 p-8 md:p-12 rounded-2xl bg-card border border-border/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl font-bold text-foreground font-display mb-4">
              Brand Assets
            </h2>
            <p className="text-muted-foreground mb-6">
              Download our official logos, brand guidelines, and media kit.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
              <Download className="w-4 h-4" />
              Download Media Kit
            </button>
          </motion.section>

          {/* Press Releases */}
          <section>
            <h2 className="text-3xl font-bold text-foreground font-display mb-8">
              Press Releases
            </h2>
            <div className="space-y-4">
              {pressReleases.map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div>
                    <span className="text-xs text-muted-foreground font-mono">{item.date}</span>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                      {item.title}
                    </h3>
                    <span className="text-sm text-primary/70">{item.source}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Media Contact */}
          <motion.section
            className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/5 border border-border/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl font-bold text-foreground font-display mb-4">
              Media Inquiries
            </h2>
            <p className="text-muted-foreground mb-2">
              For press inquiries, interviews, and speaking engagements:
            </p>
            <a href="mailto:press@klicksphere.com" className="text-primary hover:text-primary/80 font-medium">
              press@klicksphere.com
            </a>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
