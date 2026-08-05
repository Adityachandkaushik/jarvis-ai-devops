import { useEffect, useState } from "react";
import api from "../services/api";

function DockerCard() {
    const [containers, setContainers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Docker Containers
    const fetchContainers = () => {
        api.get("/docker/containers")
            .then((res) => {
                setContainers(res.data.containers || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Docker API Error:", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchContainers();

        const interval = setInterval(fetchContainers, 5000);

        return () => clearInterval(interval);
    }, []);

    // Start Container
    const startContainer = async (name) => {
        try {
            await api.post(`/docker/start/${name}`);
            fetchContainers();
        } catch (err) {
            console.error(err);
        }
    };

    // Stop Container
    const stopContainer = async (name) => {
        try {
            await api.post(`/docker/stop/${name}`);
            fetchContainers();
        } catch (err) {
            console.error(err);
        }
    };

    // Restart Container
    const restartContainer = async (name) => {
        try {
            await api.post(`/docker/restart/${name}`);
            fetchContainers();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div
            style={{
                padding: "20px",
                borderRadius: "12px",
                background: "#20232a",
                color: "white",
                width: "500px",
                margin: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
        >
            <h2>🐳 Docker Containers</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>
                        <strong>Total Containers:</strong> {containers.length}
                    </p>

                    {containers.map((container) => (
                        <div
                            key={container.ID}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "12px 0",
                                borderBottom: "1px solid #444",
                            }}
                        >
                            <div>
                                <strong>{container.Names}</strong>
                                <br />
                                <small>{container.Image}</small>
                            </div>

                            <div style={{ textAlign: "right" }}>
                                <p style={{ marginBottom: "8px" }}>
                                    {container.State === "running"
                                        ? "🟢 Running"
                                        : "🔴 Stopped"}
                                </p>

                                {container.State === "running" ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                restartContainer(container.Names)
                                            }
                                            style={{ marginRight: "6px" }}
                                        >
                                            🔄 Restart
                                        </button>

                                        <button
                                            onClick={() =>
                                                stopContainer(container.Names)
                                            }
                                        >
                                            ⏹ Stop
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() =>
                                            startContainer(container.Names)
                                        }
                                    >
                                        ▶ Start
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default DockerCard;