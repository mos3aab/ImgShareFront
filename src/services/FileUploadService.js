import axios from "axios";

const FileUploadService = {
  upload: (file, caption) => {
    let formData = new FormData(); // create a form data object

    formData.append("image", file); // append the image file to the form data object with key "image"
    formData.append("caption", caption); // append the caption text to the form data object with key "caption"

    return axios.post("http://127.0.0.1:8000/img/upload", formData); // send a POST request to "/img/upload" endpoint with form data as body 
  },
};


export default FileUploadService;