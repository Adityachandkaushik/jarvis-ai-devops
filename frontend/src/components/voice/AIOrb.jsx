import { motion } from "framer-motion";

export default function AIOrb() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center">

      {/* OUTER GLOW */}
      <div className="absolute h-[430px] w-[430px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* OUTER RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px] rounded-full border border-cyan-400/20"
      />

      {/* MIDDLE RING */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
        className="absolute flex h-[280px] w-[280px] items-center justify-center rounded-full border border-violet-500/30"
      >
        <div className="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#00e5ff]" />
      </motion.div>

      {/* HEXAGON */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[210px] w-[210px]"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon
            points="50,3 93,25 93,75 50,97 7,75 7,25"
            fill="transparent"
            stroke="#00E5FF"
            strokeWidth="0.8"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* PULSE */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.4, 0.1, 0.4],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
        className="absolute h-[160px] w-[160px] rounded-full border border-cyan-400/30"
      />

      {/* CORE */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 0 20px #00e5ff",
            "0 0 90px #00e5ff",
            "0 0 20px #00e5ff",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-600"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute h-[85px] w-[85px] rounded-full border border-white/20"
        />

        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
          }}
          className="h-10 w-10 rounded-full bg-white shadow-[0_0_25px_white]"
        />
      </motion.div>

    </div>
  );
}