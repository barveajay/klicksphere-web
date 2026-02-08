import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const openings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build high-performance web applications using React, TypeScript, and modern tooling.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Create stunning user interfaces and seamless experiences for our clients.",
  },
  {
    title: "Digital Marketing Strategist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Develop data-driven marketing strategies that drive measurable growth.",
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design and build scalable APIs and microservices for enterprise clients.",
  },
  {
    title: "Content Writer",
    department: "Marketing",
    location: "Remote",
    type: "Contract",
    description: "Craft compelling technical content and thought leadership articles.",
  },
];

const perks = [
  "Fully remote work",
  "Unlimited PTO",
  "Health & dental insurance",
  "Learning budget ($2k/year)",
  "Latest equipment",
  "Team retreats",
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AIAssistant />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <motion.div
            className="max-w-4xl mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
              Careers
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-display mb-8 leading-tight">
              Build the future
              <br />
              <span className="text-primary text-glow-primary">with us.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Join a team of passionate builders, designers, and strategists creating
              exceptional digital experiences for ambitious brands.
            </p>
          </motion.div>

          {/* Perks */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl font-bold text-foreground font-display mb-8">
              Why KlickSphere?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {perks.map((perk, i) => (
                <motion.div
                  key={i}
                  className="p-5 rounded-xl bg-card border border-border/50 text-foreground font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-primary mr-2">✦</span> {perk}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Openings */}
          <section>
            <h2 className="text-3xl font-bold text-foreground font-display mb-8">
              Open Positions
            </h2>
            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div
                  key={i}
                  className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" /> {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {job.type}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
