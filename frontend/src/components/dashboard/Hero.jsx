import { Sparkles, Terminal } from "lucide-react";
import AIOrb from "../voice/AIOrb";

export default function Hero() {
  return (
    <section className="grid h-full grid-cols-[1.15fr_0.85fr] items-center gap-20">

      {/* LEFT */}
      <div className="max-w-2xl pl-16">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl">
          <Sparkles size={16} className="text-cyan-400" />

          <span className="text-sm uppercase tracking-[5px] text-cyan-300">
            Artificial Intelligence
          </span>
        </div>

        {/* Title */}

        <h1 className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-8xl font-black leading-none text-transparent"> 
          JARVIS
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-xl text-xl leading-10 text-slate-400">
          The next-generation DevOps AI Operating System designed for
          infrastructure automation, intelligent monitoring, Docker,
          Kubernetes, Jenkins, Prometheus and voice-controlled operations.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex gap-6">

          <button
            className="
              rounded-2xl
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-8
              py-4
              font-semibold
              text-cyan-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-105
              hover:border-cyan-300
              hover:bg-cyan-400/20
              hover:shadow-[0_0_45px_rgba(34,211,238,.45)]
            "
          >
            Initialize AI
          </button>

          <button
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/10
            "
          >
            <Terminal size={18} />

            Open Console
          </button>

        </div>

        {/* Stats */}

        <div className="mt-16 grid grid-cols-3 gap-10">

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">
              24+
            </h2>

            <p className="mt-2 text-slate-400">
              Active Services
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">
              99.98%
            </h2>

            <p className="mt-2 text-slate-400">
              System Health
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">
              8 ms
            </h2>

            <p className="mt-2 text-slate-400">
              Response Time
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex justify-center">
        <AIOrb />
      </div>

    </section>
  );
}