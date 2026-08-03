import { useEffect, useState } from "react";
import api from "../services/api";

function SystemCard() {
    const [system, setSystem] = useState(null);

    useEffect(() => {
        const fetchSystemInfo = () => {
            api.get("/system/")
                .then((res) => {
                    console.log("System Info:", res.data);
                    setSystem(res.data);
                })
                .catch((err) => {
                    console.error("System API Error:", err);
                });
        };

        fetchSystemInfo();

        // Auto refresh every 5 seconds
        const interval = setInterval(fetchSystemInfo, 5000);

        return () => clearInterval(interval);
    }, []);

    if (!system) {
        return (
            <div
                style={{
                    padding: "20px",
                    borderRadius: "12px",
                    background: "#20232a",
                    color: "white",
                    width: "350px",
                    margin: "20px auto",
                    textAlign: "center",
                }}
            >
                Loading System Information...
            </div>
        );
    }

    return (
        <div
            style={{
                padding: "20px",
                borderRadius: "12px",
                background: "#20232a",
                color: "white",
                width: "350px",
                margin: "20px auto",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
        >
            <h2>💻 System Monitor</h2>

            <p><strong>CPU:</strong> {system.cpu}%</p>
            <p><strong>Memory:</strong> {system.memory}%</p>
            <p><strong>Disk:</strong> {system.disk}%</p>
            <p><strong>Hostname:</strong> {system.hostname}</p>
            <p><strong>Platform:</strong> {system.platform}</p>
        </div>
    );
}

export default SystemCard;