import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSignUp() {
    if (!email || !password || !name) {
      setError("Please fill in all fields");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/plan");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow p-4">
        <h2 className="text-center text-primary mb-4">
          Create New Account
        </h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <input
          className="form-control my-2"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={handleSignUp}
        >
          Sign Up
        </button>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
