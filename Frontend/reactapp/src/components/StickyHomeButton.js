import React from 'react';
import { useNavigate } from 'react-router-dom';

const StickyHomeButton = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Navigate to homepage
  };

  return (
    <button
      onClick={handleHomeClick}
      className="fixed top-24 right-4 p-3 bg-green-500 text-white font-bold rounded-md s  hadow-lg hover:bg-green-700 transition"
    >
      Home
    </button>
  );
};

export default StickyHomeButton;
