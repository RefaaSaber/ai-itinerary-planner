import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Itinerary() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No data</p>;

  const { itinerary, destination } = state;
  const days = itinerary.split(/Day \d+/i).filter(Boolean);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      <Navbar />
      <div className="container mt-5 pb-5">
        <h2 className="text-white fw-bold text-center mb-5">
          🗺️ Your Trip to {destination}
        </h2>

        {days.map((d, i) => {
          const lines = d.split("\n").filter(l => l.trim());
          return (
            <div key={i} className="card shadow-lg border-0 mb-4"
              style={{ borderRadius: "20px", overflow: "hidden" }}>
              {/* Day Header */}
              <div style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "15px 25px"
              }}>
                <h4 className="text-white fw-bold mb-0">📅 Day {i + 1}</h4>
              </div>

              {/* Day Content */}
              <div className="p-4">
                {lines.map((line, j) => {
                  const isMorning = line.toLowerCase().includes("morning");
                  const isLunch = line.toLowerCase().includes("lunch");
                  const isAfternoon = line.toLowerCase().includes("afternoon");
                  const isDinner = line.toLowerCase().includes("dinner");

                  let icon = "📌";
                  let color = "#f8f9fa";
                  if (isMorning) { icon = "🌅"; color = "#fff3cd"; }
                  if (isLunch) { icon = "🍽️"; color = "#d1ecf1"; }
                  if (isAfternoon) { icon = "☀️"; color = "#d4edda"; }
                  if (isDinner) { icon = "🌙"; color = "#e2d9f3"; }

                  return (
                    <div key={j} className="p-3 mb-3 rounded"
                      style={{ backgroundColor: color }}>
                      <p className="mb-0 fw-semibold">
                        {icon} {line.replace(/^-\s*/, "")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="text-center mt-4">
          <button className="btn btn-light btn-lg px-5 fw-bold"
            style={{ borderRadius: "50px" }}
            onClick={() => navigate("/plan")}>
            ✈️ Plan Another Trip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;