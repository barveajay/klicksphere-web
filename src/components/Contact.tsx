import { motion } from "framer-motion";
import { useState } from "react";
import MagneticButton from "./MagneticButton";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { submitContact, isSubmitting } = useContactForm();

  const totalFields = 3;
  const filledFields = Object.values(formData).filter((v) => v.length > 0).length;
  const progress = (filledFields / totalFields) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitContact(formData);
    if (success) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const inputClasses =
    "w-full bg-transparent border-b-2 border-border/50 py-4 text-foreground placeholder-transparent focus:border-primary focus:outline-none transition-colors peer";

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium mb-6">
              Get in Touch
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's build
              <br />
              <span className="text-accent text-glow-accent">something epic.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Ready to transform your digital presence? We're here to turn your vision
              into reality. No fluff, just results.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@klicksphere.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Form progress</span>
                <span className="text-primary font-mono">{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className={inputClasses}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="name"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    formData.name || focusedField === "name"
                      ? "top-0 text-xs text-primary"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className={inputClasses}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    formData.email || focusedField === "email"
                      ? "top-0 text-xs text-primary"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Email Address
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    formData.message || focusedField === "message"
                      ? "top-0 text-xs text-primary"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Your Message
                </label>
              </div>

              <MagneticButton className="w-full py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg glow-accent group">
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
