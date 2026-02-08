import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly, such as your name, email address, and message content when you use our contact forms. We also automatically collect certain technical information including IP address, browser type, and usage data through cookies and analytics tools.",
  },
  {
    title: "How We Use Your Information",
    content: "We use your information to provide and improve our services, respond to inquiries, send project updates, and communicate about our offerings. We may also use aggregated, anonymized data for analytics and service improvement.",
  },
  {
    title: "Data Sharing",
    content: "We do not sell your personal information. We may share data with trusted service providers who assist in operating our website and services, subject to confidentiality agreements. We may also disclose information when required by law.",
  },
  {
    title: "Data Security",
    content: "We implement industry-standard security measures including encryption, secure servers, and access controls to protect your data. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "Cookies",
    content: "We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at privacy@klicksphere.com.",
  },
  {
    title: "Changes to This Policy",
    content: "We may update this policy from time to time. We will notify you of any material changes by posting the updated policy on our website with a revised effective date.",
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <AIAssistant />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-4">Privacy Policy</h1>
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
          <h3 className="text-lg font-semibold text-foreground mb-2">Questions?</h3>
          <p className="text-muted-foreground">
            Contact us at{" "}
            <a href="mailto:privacy@klicksphere.com" className="text-primary hover:text-primary/80">
              privacy@klicksphere.com
            </a>
          </p>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
