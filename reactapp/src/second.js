import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./new.css";

function Second() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform additional validation or submit the form
    // based on your requirements

    if (!isStrongPassword(password)) {
      setPasswordError("use a Strong password");
      return;
    }
    const data = {
      username: username,
      email: email,
      phonenumber: phoneNumber,
      password: password
    };
    axios.post('http://127.0.0.1:8080/post', data);
    
    // Reset the form fields
    setUsername("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setPasswordError("");
  };

  const isStrongPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <div>
      <div className="background">
        <div className="a" />
      </div>
      <form onSubmit={handleSubmit}>
        <h3>New Account Creation</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="ph">Phone Number:</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          id="ph"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <br />
        <label htmlFor="e">Email address:</label>
        <input
          type="email"
          placeholder="Enter your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter a password"
          id="p"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        {passwordError && <p className="error">{passwordError}</p>}
        <input type="submit" value="Create Account" />
        <Link to="/">Back to Home</Link>
        <button>
          <Link to="/newaccount">Are you an Advisor?</Link>
        </button>
      </form>
    </div>
  );
}

export default Second;
