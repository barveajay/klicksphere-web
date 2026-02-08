import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn, LogOut, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at calc(100% - 40px) 40px)",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const },
    },
    open: {
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 50 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 glass"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <motion.div
              className="flex items-center gap-2 text-xl font-semibold"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">K</span>
              </div>
              <span className="text-foreground font-display">
                Klick<span className="text-primary">Sphere</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href}>
                <motion.span
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground truncate max-w-[150px]">
                  {user.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <Link to="/auth">
                <button className="flex items-center gap-1.5 px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
              </Link>
            )}
            <Link to="/contact">
              <MagneticButton className="px-6 py-2.5 bg-accent text-accent-foreground rounded-full font-medium glow-accent">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-foreground/80 pulse-live" />
                  Start Project
                </span>
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)}>
                  <motion.span
                    className="text-4xl font-semibold text-foreground hover:text-primary transition-colors font-display"
                    variants={linkVariants}
                    custom={i}
                    initial="closed"
                    animate="open"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}

              {/* Mobile Auth */}
              <motion.div
                variants={linkVariants}
                custom={navLinks.length}
                initial="closed"
                animate="open"
              >
                {user ? (
                  <button
                    onClick={() => { signOut(); setIsMenuOpen(false); }}
                    className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors font-display"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors font-display">
                      Sign In
                    </span>
                  </Link>
                )}
              </motion.div>

              <motion.div
                variants={linkVariants}
                custom={navLinks.length + 1}
                initial="closed"
                animate="open"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <MagneticButton className="mt-4 px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium text-lg">
                    Start Project
                  </MagneticButton>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
