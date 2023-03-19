import React from "react";
// import ReactDOM from "react-dom";
import { Routes, Route ,Navigate } from "react-router-dom";

// import { Routes, Route, Navigate } from "react-router-dom";

import ImageFeed from "./components/ImageFeed";
import ImageUpload from "./components/ImageUpload";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
function App() {
  return (
    <div className="App">
          <Routes>
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/" element={<ImageFeed />} />
        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
    </div>
  );
}

export default App;
