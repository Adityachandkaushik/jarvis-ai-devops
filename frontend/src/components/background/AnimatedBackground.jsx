import { motion } from "framer-motion";

const blobs = [
  {
    size: 520,
    color: "rgba(0,229,255,.18)",
    top: "-120px",
    left: "-120px",
    duration: 28,
  },
  {
    size: 420,
    color: "rgba(124,58,237,.18)",
    bottom: "-100px",
    right: "-100px",
    duration: 34,
  },
  {
    size: 320,
    color: "rgba(59,130,246,.15)",
    top: "45%",
    left: "42%",
    duration: 24,
  },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base Background Animation */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Glow blobs */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 90, -70, 0],
            y: [0, -70, 90, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full blur-[140px]"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            ...blob,
          }}
        />
      ))}

      {/* Radial center glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px]
        -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,.08), transparent 70%)",
        }}
      />

    </div>
  );
}