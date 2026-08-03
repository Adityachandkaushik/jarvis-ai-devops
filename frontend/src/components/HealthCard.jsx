import { useEffect, useState } from "react";
import api from "../services/api";

function HealthCard() {
    const [health, setHealth] = useState({
        status: "loading",
        service: "",
        version: "",
    });

    useEffect(() => {
        api.get("/health/")
            .then((res) => {
                console.log("✅ Backend Response:", res.data);
                setHealth(res.data);
            })
            .catch((err) => {
                console.error("❌ Axios Error:", err);
                console.error("Response:", err.response);
                console.error("Request:", err.request);

                setHealth({
                    status: "offline",
                    service: "JARVIS AI DevOps",
                    version: "",
                });
            });
    }, []);

    return (
        <div
            style={{
                padding: "20px",
                borderRadius: "12px",
                background: "#20232a",
                color: "#fff",
                width: "350px",
                margin: "50px auto",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
        >
            <h2>🤖 JARVIS Backend</h2>

            <h3>
                Status :
                {health.status === "healthy"
                    ? " 🟢 Healthy"
                    : health.status === "loading"
                    ? " 🟡 Loading..."
                    : " 🔴 Offline"}
            </h3>

            <p>{health.service}</p>

            <small>{health.version}</small>
        </div>
    );
}

export default HealthCard;