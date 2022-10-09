import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Rating from './pages/rating';
import ServicePage from './pages/service-page';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/rating" element={<Rating />} />
      </Routes>
    </Router>
  );
}

export default App;
