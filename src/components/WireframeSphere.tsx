import { motion } from "framer-motion";

const WireframeSphere = () => {
  const circles = [
    { rx: 120, ry: 120, rotateX: 0 },
    { rx: 120, ry: 40, rotateX: 75 },
    { rx: 120, ry: 40, rotateX: -75 },
    { rx: 40, ry: 120, rotateY: 75 },
    { rx: 40, ry: 120, rotateY: -75 },
    { rx: 80, ry: 120, rotateY: 45 },
    { rx: 80, ry: 120, rotateY: -45 },
  ];

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: 360, rotateX: 10 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        <svg
          viewBox="-150 -150 300 300"
          className="w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <defs>
            <linearGradient id="sphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(239 84% 67%)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(82 84% 79%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(239 84% 67%)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {circles.map((circle, i) => (
            <motion.ellipse
              key={i}
              cx="0"
              cy="0"
              rx={circle.rx}
              ry={circle.ry}
              fill="none"
              stroke="url(#sphereGradient)"
              strokeWidth="1"
              className="svg-draw"
              style={{
                transform: `rotateX(${circle.rotateX || 0}deg) rotateY(${circle.rotateY || 0}deg)`,
                transformOrigin: "center",
              }}
              initial={{ strokeDashoffset: 1000 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, delay: i * 0.1, ease: "easeOut" }}
            />
          ))}
          
          {/* Latitude lines */}
          {[-60, -30, 0, 30, 60].map((lat, i) => (
            <motion.ellipse
              key={`lat-${i}`}
              cx="0"
              cy={lat}
              rx={Math.cos((lat * Math.PI) / 180) * 120}
              ry={Math.cos((lat * Math.PI) / 180) * 20}
              fill="none"
              stroke="url(#sphereGradient)"
              strokeWidth="0.5"
              opacity={0.5}
              initial={{ strokeDashoffset: 500 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </svg>
      </motion.div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
    </div>
  );
};

export default WireframeSphere;
