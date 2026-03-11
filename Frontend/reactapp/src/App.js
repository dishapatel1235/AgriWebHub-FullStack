import React from 'react'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MSPForm from './components/MSPForm';
import FarmerForm from './components/FarmerForm';
import FarmerSearch from './components/FarmerSearch';
import ConsumerForm from './components/ConsumerForm';
import ConsumerSearch from './components/ConsumerSearch';
import homepageImage from './components/homepage.avif';
import HomePage from './components/Home';
import StickyHomeButton from './components/StickyHomeButton'; // Import the StickyHomeButton component

function App() {
  return (
    <>
      <Router>
        <div className="h-screen w-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${homepageImage})` }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/calculate-msp" element={<MSPForm />} />
            <Route path="/farmer" element={<FarmerForm />} />
            <Route path="/find-farmer" element={<FarmerSearch />} />
            <Route path="/consumer" element={<ConsumerForm />} />
            <Route path="/find-consumer" element={<ConsumerSearch />} />
          </Routes>
          
        </div>
        <StickyHomeButton /> {/* Add the Sticky Home Button here */}
      </Router>
      
    </>
  );  
}

export default App;
