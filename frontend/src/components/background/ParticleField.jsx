import { motion } from "framer-motion";

const particles = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 6,
}));

export default function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            opacity: 0.15,
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            y: [
              `${particle.y}vh`,
              `${particle.y - 6}vh`,
              `${particle.y}vh`,
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]"
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
}