import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
    return (
        <div
            style={{
                display: "flex",
                background: "#0f172a",
                minHeight: "100vh",
            }}
        >
            <Sidebar />

            <main
                style={{
                    flex: 1,
                    padding: "25px",
                }}
            >
                <Navbar />

                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;