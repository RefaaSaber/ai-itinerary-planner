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
    } catch (err) {
      setError("Wrong email or password");
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input className="form-control my-2" placeholder="Email"
        onChange={e => setEmail(e.target.value)} />
      <input className="form-control my-2" type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary w-100"
        onClick={handleSignIn}>Sign In</button>
      <p className="mt-2">No account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default SignIn;
