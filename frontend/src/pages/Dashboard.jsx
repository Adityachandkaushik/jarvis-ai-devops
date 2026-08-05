import DashboardLayout from "../layouts/DashboardLayout";
import HealthCard from "../components/HealthCard";
import SystemCard from "../components/SystemCard";
import DockerCard from "../components/DockerCard";

function Dashboard() {
    return (
        <DashboardLayout>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                }}
            >
                <HealthCard />
                <SystemCard />
                <DockerCard />
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;