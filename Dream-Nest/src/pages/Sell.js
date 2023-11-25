import React, { useState } from 'react';
import "./Sell.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
import { Link } from 'react-router-dom';
import axios from "axios";

const baseURL = "http://localhost:4000/listproperty";

const SellPropertyForm = () => {
  const [property, setProperty] = useState({
    ownerName: '',
    ownerNumber: '',
    name: '',
    price: '',
    address: '',
    category: '', 
    image: null, 
    message: '',
  });

  const [postResponse, setPostResponse] = useState(null);

  function createPost() {
    axios.post(baseURL, property)
      .then((response) => {
        setPostResponse(response.data);
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setProperty({
      ...property,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
  };

  return (
    <div>
      <header>
        <div id="nav1">
          <a href="home.html">
            <img src={dreamNest} alt="" />
          </a>
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
      <section id="sell">
        <div id="sell-box">
          <form onSubmit={handleSubmit}>
            <ul>
              <h2>Sell Your Property</h2>
              <li>
                <input type="text" name="ownerName" id="OwnerName" placeholder="Property Owner Name" onChange={handleChange} />
                <input type="int" name="ownerNumber" id="OwnerNumber" placeholder="Property Owner Number" onChange={handleChange} />
                <input type="text" name="name" id="name" placeholder="Property Name" onChange={handleChange} />
                <input type="int" name="price" id="price" placeholder="Property Price" onChange={handleChange} />
                <input type="text" name="address" id="address" placeholder="Property Address" onChange={handleChange} />
                <div className="dropdown">
                  <button className="dropbtn">Category</button>
                  <div className="dropdown-content">
                    <a>Sell</a>
                    <a>Buy</a>
                  </div>
                </div>
                <p className="lable">Drop the image of your property </p>
                <input type="file" name="image" id="image" onChange={handleFileChange} accept="image/png, image/jpeg" />
              </li>
              <li>
                <textarea name="message" id="message" placeholder="Property Description" onChange={handleChange}></textarea>
              </li>
              <li>
                <input type="submit" value="Submit" className="btn1" id="submit" />
              </li>
            </ul>
          </form>
        </div>
      </section>

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

export default SellPropertyForm;
