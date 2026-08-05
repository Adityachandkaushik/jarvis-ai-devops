import {
    LayoutDashboard,
    Container,
    BarChart3,
    Wrench,
    Brain,
    Mic,
    Settings,
} from "lucide-react";

const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Docker", icon: Container },
    { name: "Monitoring", icon: BarChart3 },
    { name: "Jenkins", icon: Wrench },
    { name: "AI Chat", icon: Brain },
    { name: "Voice", icon: Mic },
    { name: "Settings", icon: Settings },
];

function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-700 text-white">
            <div className="p-6 text-2xl font-bold border-b border-slate-700">
                🤖 JARVIS
            </div>

            <nav className="mt-6">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.name}
                            className="flex items-center gap-3 px-6 py-4 cursor-pointer hover:bg-slate-800 transition-all duration-200"
                        >
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}

export default Sidebar;