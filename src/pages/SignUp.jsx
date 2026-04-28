import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSignUp() {
    if (!email || !password) {
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
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Create New Account</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input className="form-control my-2" placeholder="Email"
        onChange={e => setEmail(e.target.value)} />
      <input className="form-control my-2" type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary w-100"
        onClick={handleSignUp}>Sign Up</button>
      <p className="mt-2">Already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
}

export default SignUp;
