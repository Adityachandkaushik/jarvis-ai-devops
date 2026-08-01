import { useEffect, useState } from "react";
import api from "../services/api";

function HealthCard() {
    const [health, setHealth] = useState(null);

    useEffect(() => {
        api.get("/health/")
            .then((res) => setHealth(res.data))
            .catch(() => setHealth({ status: "offline" }));
    }, []);

    return (
        <div
            style={{
                padding: "20px",
                borderRadius: "12px",
                background: "#20232a",
                color: "white",
                width: "350px",
                margin: "50px auto",
                textAlign: "center",
            }}
        >
            <h2>🤖 JARVIS Backend</h2>

            <h3>
                Status :
                {health?.status === "healthy"
                    ? " ✅ Healthy"
                    : " ❌ Offline"}
            </h3>

            <p>{health?.service}</p>
            <small>{health?.version}</small>
        </div>
    );
}

export default HealthCard;