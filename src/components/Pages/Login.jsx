import React, { useState } from "react";
import "./Login.css"; // Import CSS

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Sample login validation (Replace with real authentication logic)
    if (username === "admin" && password === "password123") {
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/home"; // Redirect to home page
      }, 2000);
    } else {
      setMessage("❌ Invalid username or password. Try again!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        {/* Display login message */}
        {message && <p className="login-message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
