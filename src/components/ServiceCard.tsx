import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  size?: "default" | "large";
  background?: ReactNode;
}

const ServiceCard = ({
  title,
  description,
  icon,
  className = "",
  size = "default",
  background,
}: ServiceCardProps) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-6 md:p-8 ${
        size === "large" ? "md:col-span-2" : ""
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Border Beam on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-beam pointer-events-none" />

      {/* Background Animation */}
      {background && (
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
          {background}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>

        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;
