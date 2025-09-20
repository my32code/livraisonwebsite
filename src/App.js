import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DeliveryForm from './components/DeliveryForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/formulaire-livraison" element={<DeliveryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
