import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password) {
      setError("All fields are required!");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format!");
    } else {
      alert("Registration Successful!");
      setError("");
      setName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "left" }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ width: "100%", padding: "6px" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
