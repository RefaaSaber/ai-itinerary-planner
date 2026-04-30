import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSignIn() {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/plan");
    } catch {
      setError("Wrong email or password");
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow p-4">
        <h2 className="text-center text-primary mb-4">Sign In</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <input
          className="form-control my-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control my-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-primary w-100 mt-3"
          onClick={handleSignIn}
        >
          Sign In
        </button>

        <p className="text-center mt-3">
          No account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
