import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// Import axios for sending requests
import axios from "axios";

// Define a custom component called ImageFeed
function ImageFeed() {
  // Define a state variable for storing the image data
  const [images, setImages] = useState([]);

  // Define a useEffect hook to fetch the image data when the component mounts
  useEffect(() => {
    // Define an async function to fetch the image data
    const fetchImages = async () => {
      try {
        // Send a GET request to the endpoint "/img/list" and get the response data
        const response = await axios.get("http://127.0.0.1:8000/img/list");

        // Set the images state to the response data
        setImages(response.data);
      } catch (error) {
        // Handle any errors that may occur during the request or display them on the UI as needed
        console.error(error);
      }
    };

    // Invoke the fetchImages function
    fetchImages();
  }, []); // Pass an empty dependency array to run only once

  return (
    <div className="ImageFeed">
      <h1>Image Feed</h1>
      <h4> <a href="/upload">Return to Upload file</a> </h4>
      <div className="ImageList">
        {images.map((image) => (
          <div className="ImageItem" key={image.id}>
            <img src={image.url} alt={image.caption} />
            <p>{image.caption}</p>
            <p>{image.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export the component for rendering in other files or components
export default ImageFeed;
