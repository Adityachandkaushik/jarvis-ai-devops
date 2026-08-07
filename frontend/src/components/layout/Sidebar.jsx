import {
  LayoutDashboard,
  Cpu,
  Box,
  Terminal,
  Settings,
} from "lucide-react";

const menus = [
  { icon: LayoutDashboard, title: "Dashboard" },
  { icon: Cpu, title: "AI Core" },
  { icon: Box, title: "Docker" },
  { icon: Terminal, title: "Terminal" },
  { icon: Settings, title: "Settings" },
];

function Sidebar() {
  return (
    <aside className="glass flex w-72 flex-col border-r border-white/10 p-6">
      <h1 className="mb-10 text-3xl font-bold text-cyan-400">
        JARVIS
      </h1>

      <nav className="space-y-3">
        {menus.map((item) => (
          <button
            key={item.title}
            className="flex w-full items-center gap-4 rounded-xl px-4 py-3 transition hover:bg-cyan-500/10"
          >
            <item.icon size={20} />
            <span>{item.title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;