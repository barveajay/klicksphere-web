import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WireframeSphere from "./WireframeSphere";
import MagneticButton from "./MagneticButton";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0]);
  const sphereScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const sphereOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Blueprint Grid Background */}
      <motion.div
        className="absolute inset-0 blueprint-grid"
        style={{ opacity: gridOpacity }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

      {/* Network Lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(239 84% 67%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(82 84% 79%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[
          "M0,200 Q250,150 500,200 T1000,200",
          "M0,400 Q300,350 500,400 T1000,450",
          "M0,600 Q200,650 500,600 T1000,550",
          "M0,800 Q400,750 500,800 T1000,850",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
            >
              <span className="w-2 h-2 rounded-full bg-accent pulse-live" />
              <span className="text-sm text-muted-foreground font-medium">
                Digital Agency • Est. 2024
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-foreground">We build</span>
              <br />
              <span className="text-primary text-glow-primary">digital</span>{" "}
              <span className="text-foreground">experiences</span>
              <br />
              <span className="text-accent text-glow-accent">that convert.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              From high-speed conversion engines to data-led marketing strategies.
              We don't just build websites—we engineer growth machines.
            </motion.p>

            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <MagneticButton className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg glow-accent group">
                <span className="flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </MagneticButton>

              <MagneticButton className="px-8 py-4 border border-border rounded-full font-medium text-lg hover:border-primary/50 transition-colors">
                View Our Work
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-12 pt-8 border-t border-border/50"
            >
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "40M+", label: "Revenue Generated" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Sphere */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            style={{ scale: sphereScale, opacity: sphereOpacity }}
          >
            <WireframeSphere />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
