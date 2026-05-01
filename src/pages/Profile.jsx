import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

function Profile() {
  const { currentUser } = useAuth();

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      <Navbar />
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card shadow-lg p-4 border-0"
          style={{ maxWidth: "600px", width: "100%", borderRadius: "20px" }}>
          <div className="text-center mb-4">
            <div style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "40px"
            }}>
              👤
            </div>
            <h3 className="mt-3 text-primary fw-bold">My Profile</h3>
          </div>
          <div className="mb-3 p-3 bg-light rounded">
            <label className="fw-bold text-muted">Email</label>
            <p className="mb-0 fw-semibold">{currentUser?.email}</p>
          </div>
          <div className="mb-3 p-3 bg-light rounded">
            <label className="fw-bold text-muted">Account Created</label>
            <p className="mb-0 fw-semibold">
              {currentUser?.metadata?.creationTime}
            </p>
          </div>
          <div className="mb-3 p-3 bg-light rounded">
            <label className="fw-bold text-muted">Last Sign In</label>
            <p className="mb-0 fw-semibold">
              {currentUser?.metadata?.lastSignInTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;