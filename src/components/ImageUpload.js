import React, { useState } from "react";
import FileUploadService from "../services/FileUploadService";
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null); 
    const [caption, setCaption] = useState(""); 
    const [previewUrl, setPreviewUrl] = useState(null); 

  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); 
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value); 
  };

  // function to handle upload button click event
  const handleUpload = () => {
    if (selectedFile && caption) {
      FileUploadService.upload(selectedFile, caption) // call upload service with file and caption
        .then((response) => {
          alert("Image uploaded successfully!"); // show success message
          setSelectedFile(null); // reset selected file state
          setCaption(""); // reset caption state
          setPreviewUrl(null); // reset preview URL state
        })
        .catch((error) => {
          alert("Image upload failed!"); // show error message
        });
    } else {
      alert("Please select an image and enter a caption!"); // show validation message
    }
  };

  return (
    <div className="container" >
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Image Upload</h4>
            </div>
        </div>
        <div class="row">
                <div class="form-group">
                  <div class="col-xs-3">
                  <label for="">Image</label>
                  </div>
                  <div class="col-xs-3">
                  <input type="file" accept="image/*" onChange={handleFileChange} /> {/* input for selecting image */}            
                  {previewUrl && <img src={previewUrl} alt="Preview" />} {/* preview image if available */}
                  </div>
                </div>
        </div>
        <br></br>      
        <div class="row">
                <div class="form-group">
                  <div class="col-xs-3">
                  <label for="">caption</label>
                  </div>
                  <div class="col-xs-3">
                  <input type="text"  placeholder="Enter caption" value={caption} onChange={handleCaptionChange} /> {/* input for entering caption */}
                  </div>
                </div>
        </div>
        <br></br>      
        <div class="row">
                <div class="form-group">
                  <div class="col-xs-3">
                  <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
                  </div>
                </div>
        </div>
      
      
    </div>
  );
};


export default ImageUpload;