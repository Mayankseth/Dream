import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import "./Login.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
import axios from "axios";

const baseURL = "http://localhost:4000/register";

const Login = () => {
    const [registerDetail, setregisterDetail] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [postResponse, setPostResponse] = useState(null);
    
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
                <div className="form-container" id="box-container">
                    <h2 className="form-title">Login</h2>
                    <form id="login-form">
                        <input type="text" id="login-username" placeholder="Name" required />
                        <input type="email" id="email" placeholder="email" required />
                        <div className="password-container">
                            <input type="password" id="login-password" placeholder="Password" required />
                            <i className="fas fa-eye password-icon" id="password-toggle"></i>
                        </div>
                        <button id="login-button">Login</button>
                    </form>
                    <p>
                        Don't have an account? <Link to="/login">Login</Link>
                    </p>
                    <p id="message" className="message"></p>
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
