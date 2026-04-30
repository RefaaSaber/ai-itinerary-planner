import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Itinerary() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No data</p>;

  const { itinerary, destination } = state;
  const days = itinerary.split(/Day \d+/i).filter(Boolean);

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2 className="text-primary mb-4">
          Trip to {destination}
        </h2>

        {days.map((d, i) => (
          <div key={i} className="card p-3 mb-3 shadow">
            <h5>Day {i + 1}</h5>
            <p>{d}</p>
          </div>
        ))}

        <button className="btn btn-secondary"
          onClick={() => navigate("/plan")}
        >
          Back
        </button>

        <button className="btn btn-primary ms-2"
          onClick={() => navigate("/map", { state: { destination } })}
        >
          View Map
        </button>
      </div>
    </>
  );
}

export default Itinerary;