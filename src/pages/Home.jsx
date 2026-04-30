import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 fw-bold text-primary">✈️ AI Itinerary Planner</h1>
      <p className="lead mt-3">Plan your perfect trip in seconds</p>
      <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
        alt="travel illustration" width="200" className="my-4" />
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-primary btn-lg"
          onClick={() => navigate("/signin")}>Sign In</button>
        <button className="btn btn-outline-primary btn-lg"
          onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  );
}
export default Home;