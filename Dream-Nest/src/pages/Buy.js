import React from 'react';
import axios from "axios";
import "./Buy.css";
import dreamNest from "../Images/dreamNest.png";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import xlogo from "../Images/xlogo.png";
import linkedin from "../Images/linkedIn.png";
import bg from "../Images/bg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const baseURL = "http://localhost:4000/listproperties";

const App = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <body>
      <header>
        <div id="nav1">
          <Link to="/" >
            <img src={dreamNest} alt="" />
          </Link>
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
      <main>
        {post.map((property) => (
          <div key={property._id} className="property">
          <Link to={`/buy/${property._id}`} key={property._id} className="property">
            <h2>{property.name}</h2>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            
            {/* You can map through the images array and display them */}
            {property.images.map((image) => (
              <img key={image._id} src={image.url} alt={image.public_id} />
            ))}

            <p>Category: {property.category}</p>
            <p>Created At: {property.createdAt}</p>
            </Link>
          </div>
        ))}
      </main>

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
    </body>
  );
};

export default App;
