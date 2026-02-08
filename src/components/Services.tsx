import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { Code2, Palette, TrendingUp, Zap, Globe, BarChart3 } from "lucide-react";

const TerminalAnimation = () => (
  <div className="absolute inset-0 overflow-hidden font-mono text-xs text-primary/30">
    <motion.div
      className="p-4"
      animate={{ y: [0, -100] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      {[
        "<KlickSphere>",
        "  <Header />",
        "  <Hero animation='fade' />",
        "  <Services layout='bento' />",
        "  <Portfolio items={projects} />",
        "  <Contact form={true} />",
        "</KlickSphere>",
        "",
        "const build = async () => {",
        "  await optimize();",
        "  await deploy();",
        "  return success;",
        "};",
        "",
        "// Performance: 100/100",
        "// SEO: Optimized",
        "// Conversion: +340%",
      ].map((line, i) => (
        <div key={i} className="whitespace-pre">
          {line}
        </div>
      ))}
    </motion.div>
  </div>
);

const GraphAnimation = () => (
  <div className="absolute inset-0 flex items-end justify-center p-8">
    <svg viewBox="0 0 200 100" className="w-full h-full opacity-30">
      <motion.path
        d="M0,100 L20,90 L40,85 L60,70 L80,60 L100,45 L120,50 L140,35 L160,25 L180,30 L200,10"
        fill="none"
        stroke="hsl(82 84% 79%)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.path
        d="M0,100 L20,90 L40,85 L60,70 L80,60 L100,45 L120,50 L140,35 L160,25 L180,30 L200,10 L200,100 L0,100"
        fill="url(#graphGradient)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 1 }}
      />
      <defs>
        <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(82 84% 79%)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const SignalAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute w-20 h-20 rounded-full border border-primary/20"
        initial={{ scale: 0.5, opacity: 0.8 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeOut",
        }}
      />
    ))}
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Everything you need to
            <br />
            <span className="text-primary text-glow-primary">dominate digital.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From pixel-perfect designs to data-driven growth strategies, we deliver
            end-to-end solutions that transform businesses.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <ServiceCard
            title="Full-Stack Development"
            description="We don't just build websites; we build high-speed conversion engines. From Headless E-commerce to SaaS dashboards, we write clean code that scales."
            icon={<Code2 className="w-6 h-6" />}
            size="large"
            background={<TerminalAnimation />}
          />

          <ServiceCard
            title="UI/UX Design"
            description="Where art meets analytics. We design assets that stop the scroll and trigger the click."
            icon={<Palette className="w-6 h-6" />}
          />

          <ServiceCard
            title="Performance"
            description="Lighthouse 100. Every time. Speed is not optional—it's revenue."
            icon={<Zap className="w-6 h-6" />}
          />

          <ServiceCard
            title="Digital Marketing"
            description="Stop buying clicks, start buying customers. Our data-led strategies focus on ROAS and long-term organic dominance."
            icon={<TrendingUp className="w-6 h-6" />}
            size="large"
            background={<GraphAnimation />}
          />

          <ServiceCard
            title="SEO & Growth"
            description="Algorithmic visibility meets strategic content. We make Google love you."
            icon={<BarChart3 className="w-6 h-6" />}
            background={<SignalAnimation />}
          />

          <ServiceCard
            title="Global Scale"
            description="Multi-region deployment, i18n, and edge computing. Your site, everywhere, fast."
            icon={<Globe className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
