import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut(auth);
    navigate("/");
  }

  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/plan">
        ✈️ AI Itinerary Planner
      </Link>

      <button className="btn btn-outline-light" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;