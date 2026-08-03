function Sidebar() {
    return (
        <aside
            style={{
                width: "240px",
                background: "#111827",
                color: "white",
                padding: "20px",
                minHeight: "100vh",
            }}
        >
            <h2>🤖 JARVIS</h2>

            <hr />

            <p>🏠 Dashboard</p>
            <p>🐳 Docker</p>
            <p>📊 Monitoring</p>
            <p>🔨 Jenkins</p>
            <p>🎤 Voice</p>
            <p>🤖 AI Chat</p>
        </aside>
    );
}

export default Sidebar;