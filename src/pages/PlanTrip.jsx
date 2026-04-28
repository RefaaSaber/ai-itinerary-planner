import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateItinerary } from "../hooks/useOpenAI";

function PlanTrip() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const interestOptions = ["History", "Nature", "Shopping", "Food", "Adventure"];

  function handleInterest(interest) {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  }

  async function handleGenerate() {
    if (!destination || !budget || !days) {
      alert("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const result = await generateItinerary(destination, budget, interests, days);
      navigate("/itinerary", { state: { itinerary: result, destination } });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2>Plan Your Trip ✈️</h2>
      <input className="form-control my-2" placeholder="Destination"
        onChange={e => setDestination(e.target.value)} />
      <input className="form-control my-2" placeholder="Budget ($)"
        type="number" onChange={e => setBudget(e.target.value)} />
      <input className="form-control my-2" placeholder="Number of Days"
        type="number" onChange={e => setDays(e.target.value)} />
      <p className="mt-2">Interests:</p>
      {interestOptions.map(interest => (
        <div key={interest} className="form-check">
          <input className="form-check-input" type="checkbox"
            onChange={() => handleInterest(interest)} />
          <label className="form-check-label">{interest}</label>
        </div>
      ))}
      <button className="btn btn-primary mt-3 w-100"
        onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate My Plan"}
      </button>
    </div>
  );
}

export default PlanTrip;
