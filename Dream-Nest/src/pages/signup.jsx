import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
import axios from "axios";

const baseURL = "http://localhost:4000/register";

const Login = () => {
    const [registerDetail, setRegisterDetail] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [postResponse, setPostResponse] = useState(null);

    const registerDataChange = (e) => {
        setRegisterDetail({
            ...registerDetail,
            [e.target.id]: e.target.value,
        });
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        axios.post(baseURL, registerDetail)
            .then((response) => {
                setPostResponse(response.data);
                document.getElementById("login-form").reset();
            })
            .catch((error) => {
                console.error('Error creating post:', error);
            });
    };

    return (
        <div>
            {/* Header code here */}

            <div className="bgi">
                <div className="form-container" id="box-container">
                    <h2 className="form-title">Login</h2>
                    <form id="login-form" onSubmit={registerSubmit}>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            required
                            onChange={registerDataChange}
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            required
                            onChange={registerDataChange}
                        />
                        <div className="password-container">
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                required
                                onChange={registerDataChange}
                            />
                            <i className="fas fa-eye password-icon" id="password-toggle"></i>
                        </div>
                        <button type='submit' id="login-button" value="Register">Register</button>
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
