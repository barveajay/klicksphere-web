import { motion } from "framer-motion";
import { Terminal, Key, Webhook, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const endpoints = [
  { method: "GET", path: "/api/v1/projects", desc: "List all projects" },
  { method: "POST", path: "/api/v1/projects", desc: "Create a new project" },
  { method: "GET", path: "/api/v1/analytics", desc: "Retrieve analytics data" },
  { method: "POST", path: "/api/v1/deploy", desc: "Trigger a deployment" },
  { method: "GET", path: "/api/v1/templates", desc: "Browse available templates" },
  { method: "DELETE", path: "/api/v1/projects/:id", desc: "Delete a project" },
];

const features = [
  { icon: Key, title: "Authentication", desc: "OAuth 2.0 and API key-based authentication for secure access." },
  { icon: Webhook, title: "Webhooks", desc: "Real-time event notifications for builds, deploys, and analytics." },
  { icon: Shield, title: "Rate Limiting", desc: "Fair usage policies with generous rate limits for all tiers." },
  { icon: Terminal, title: "SDKs", desc: "Official SDKs for JavaScript, Python, Go, and Ruby." },
];

const methodColors: Record<string, string> = {
  GET: "text-accent",
  POST: "text-primary",
  DELETE: "text-destructive",
};

const APIPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <AIAssistant />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-4xl mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
            API Reference
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-display mb-8 leading-tight">
            Build with our<br />
            <span className="text-primary text-glow-primary">powerful API.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            RESTful endpoints, webhooks, and SDKs to integrate KlickSphere into your workflow.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-card border border-border/50"
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

        {/* Endpoints */}
        <h2 className="text-3xl font-bold text-foreground font-display mb-8">Endpoints</h2>
        <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
          {endpoints.map((ep, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 px-6 py-4 border-b border-border/30 last:border-0 hover:bg-muted/50 transition-colors cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.03 }}
            >
              <span className={`font-mono font-bold text-sm w-16 ${methodColors[ep.method] || "text-foreground"}`}>
                {ep.method}
              </span>
              <code className="font-mono text-sm text-foreground flex-1">{ep.path}</code>
              <span className="text-sm text-muted-foreground hidden sm:block">{ep.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default APIPage;
