import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import dreamNest from '../Images/dreamNest.png';
import facebook from '../Images/facebook.png';
import insta from '../Images/insta.png';
import xlogo from '../Images/xlogo.png';
import linkedin from '../Images/linkedIn.png';
import Cookies from 'js-cookie';
import "./Sell.css";


const SellPropertyForm = () => {
  const [ownerName, setOwnerName] = useState('');
  const [ownerNumber, setOwnerNumber] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [price, setPrice] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [category, setCategory] = useState('');
  const [propertyDescription, setPropertyDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [image, setImage] = useState(null);


  const baseURL = 'http://localhost:4000/listproperty';


  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImageToCloudinary = async () => {
    const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dbwecbkgl/image/upload'; // Replace with your Cloudinary upload URL
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'soa5zlvz'); // Replace with your Cloudinary upload preset

    const response = await axios.post(cloudinaryURL, formData);
    const { public_id, secure_url } = response.data;

    return { public_id, url: secure_url };
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const token = Cookies.get('JWTtoken');
      const { public_id, url } = await uploadImageToCloudinary();

      console.log(token , public_id,url);
      // const formData = new FormData();
      const formData = {
        ownername: ownerName,
        ownernumber: ownerNumber,
        name: propertyName,
        price: price,
        address: propertyAddress,
        category: category,
        description: propertyDescription,
        images: [{ public_id, url }] 
      };


      const response = await axios.post(baseURL, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess('Property submitted successfully!');
    } catch (error) {
      setError('Error submitting property');
    } finally {
      setSubmitting(false);
    }
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

      <div id="sell-box">
        <form onSubmit={handleSubmit}>
          <ul>
            <h2>Sell Your Property</h2>
            <li>
              <input
                type="text"
                name="ownername"
                id="OwnerName"
                placeholder="Property Owner Name"
                onChange={(e) => setOwnerName(e.target.value)}
              />
              <input
                type="text"
                name="ownernumber"
                id="OwnerNumber"
                placeholder="Property Owner Number"
                onChange={(e) => setOwnerNumber(e.target.value)}
              />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Property Name"
                onChange={(e) => setPropertyName(e.target.value)}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Property Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Property Address"
                onChange={(e) => setPropertyAddress(e.target.value)}
              />
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </li>
            <li>
              <input
                type='file'
                accept=".jpg,.png,.jpeg"
                name="description"
                id="message"
                placeholder="Property Description"
                onChange={handleImageChange}
              ></input>
            </li>
            <li>
              <textarea
                name="description"
                id="message"
                placeholder="Property Description"
                onChange={(e) => setPropertyDescription(e.target.value)}
              ></textarea>
            </li>
            <li>
              <input
                type="submit"
                value={submitting ? 'Submitting...' : 'Submit'}
                className="btn1"
                id="submit"
                disabled={submitting}
              />
            </li>
          </ul>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
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

export default SellPropertyForm;

