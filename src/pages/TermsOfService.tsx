import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using KlickSphere's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "Services",
    content: "KlickSphere provides web development, UI/UX design, digital marketing, and SEO services. The specific scope, deliverables, and timeline for each project will be outlined in a separate project agreement.",
  },
  {
    title: "Intellectual Property",
    content: "Upon full payment, clients receive ownership of all custom work created specifically for their project. KlickSphere retains the right to showcase completed work in our portfolio unless otherwise agreed in writing.",
  },
  {
    title: "Payment Terms",
    content: "Payment terms are specified in individual project agreements. Typically, projects require a 50% deposit upfront with the remaining balance due upon completion. Late payments may incur additional fees.",
  },
  {
    title: "Confidentiality",
    content: "Both parties agree to keep confidential any proprietary information shared during the course of the project. This obligation survives the termination of the agreement.",
  },
  {
    title: "Limitation of Liability",
    content: "KlickSphere's total liability for any claims arising from our services shall not exceed the total fees paid by the client for the specific project in question. We are not liable for indirect, incidental, or consequential damages.",
  },
  {
    title: "Termination",
    content: "Either party may terminate a project agreement with 30 days written notice. In such cases, the client is responsible for payment of all work completed up to the termination date.",
  },
  {
    title: "Governing Law",
    content: "These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles.",
  },
];

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <AIAssistant />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 15, 2024</p>
        </motion.div>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.03 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-8 rounded-2xl bg-card border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">Questions about our terms?</h3>
          <p className="text-muted-foreground">
            Contact us at{" "}
            <a href="mailto:legal@klicksphere.com" className="text-primary hover:text-primary/80">
              legal@klicksphere.com
            </a>
          </p>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;
