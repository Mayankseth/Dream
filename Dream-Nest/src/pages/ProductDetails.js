import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/listproperties/${id}`)
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>

      {/* Display property images */}
      <div>
        {property.images.map((image) => (
          <img key={image._id} src={image.url} alt={image.public_id} />
        ))}
      </div>

      <p>Category: {property.category}</p>
      <p>Created At: {property.createdAt}</p>
    </div>
  );
};

export default PropertyDetails;
