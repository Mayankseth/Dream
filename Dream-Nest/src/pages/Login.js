import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
import axios from "axios";

const baseURL = "http://localhost:4000";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/login`, { email, password });

      
      const token = response.data.token;
      console.log ("login succefully " + token);
    } catch (error) {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <header>
        <div id="nav1">
          <img src={dreamNest} alt="" />
        </div>
        <div id="nav2">
          <ul className="home-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">News</Link></li>
            <li><Link to="/teams">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login"><button className="btn">Login</button></Link></li>
          </ul>
        </div>
      </header>
      <div className="bgi">
        <div className="form-container">
          <h2 className="form-title">Login</h2>
          <form id="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              id="login-username"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <div className="password-container">
              <input
                type="password"
                id="login-password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {/* Add an icon to toggle password visibility if needed */}
            </div>
            <button type="submit" id="login-button">
              Login
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Register here</Link>
          </p>
          <p id="message" className="message">
            {message}
          </p>
        </div>
      </div>
      <footer>
        <div className="copy">
          <h3>Copyright @ Dream Nest</h3>
        </div>
        <div className="contacticon">
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={xlogo} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Login;
