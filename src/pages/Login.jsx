import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleEnter() {
    const cleanName = name.trim();

    if (!cleanName) return;

    localStorage.setItem("username", cleanName);

    navigate("/home");
  }

  return (
    <div className="login-wrapper">
      <div className="login-page">
      <h2>Welcome to CodeLeap network!</h2>

      <p>Please enter your username</p>

      <input
        type="text"
        placeholder="My name is..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="actions">
        <button 
          onClick={handleEnter} 
          className="btn-enter"
          disabled={name.trim().length === 0} 
        >
          ENTER
        </button>
      </div>
      </div>
    </div>
  );
}

export default Login;
