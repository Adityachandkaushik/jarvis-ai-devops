import AnimatedBackground from "../components/background/AnimatedBackground";
import Hero from "../components/dashboard/Hero";

export default function Dashboard() {
  return (
    <div className="relative h-screen overflow-hidden">

      <AnimatedBackground />

      <main className="relative z-10 h-full p-16">
        <Hero />
      </main>

    </div>
  );
}