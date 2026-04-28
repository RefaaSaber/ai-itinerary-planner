import { useLocation, useNavigate } from "react-router-dom";

function Itinerary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { itinerary, destination } = location.state || {};

  if (!itinerary) {
    return <div className="container mt-5">No itinerary found. Please go back and generate one.</div>;
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <h2>Your Itinerary for {destination} 🗺️</h2>
      <div className="card p-4 mt-3">
        <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
          {itinerary}
        </pre>
      </div>
      <button className="btn btn-secondary mt-3 me-2"
        onClick={() => navigate("/plan")}>
        Plan Another Trip
      </button>
    </div>
  );
}

export default Itinerary;
